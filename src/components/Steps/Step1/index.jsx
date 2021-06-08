/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import InputMask from 'react-input-mask';

import { Form } from './styles';

import checkCep from 'cep-promise';
import { cnpj as checkCnpj } from 'cpf-cnpj-validator';
import { GlobalContext } from '../../../contexts/AppContext';

export const Step1 = ({ formData, setForm, navigation }) => {
	const {
		disabledSelectCidade,
		disabledInputInscricaoEstadual,
		setDisabledInputInscricaoEstadual,
		listUf,
		listCity,
		cep,
		setCep,
		errors,
		setErrors,
	} = useContext(GlobalContext);

	const handleChangeCep = (e) => {
		validate(e, 9);
		const { value } = e.target;

		const typedCep = value?.replace(/[^0-9]/g, '');

		if (typedCep?.length !== 8) {
			return;
		}

		checkCep(typedCep).then((r) => setCep(r));
		checkCep(typedCep)
			.then((r) => setCep(r))
			.catch(handleInvalidCep);
	};

	const handleInvalidCep = (e) => {
		let err = errors;
		err.dadosDaOrganizacao.address.cep = true;
		document.getElementById(
			`error.dadosDaOrganizacao.address.cep`
		).hidden = false;
		setErrors(err);
	};

	useEffect(() => {
		formData.dadosDaOrganizacao.address.endereco = cep.street;
		formData.dadosDaOrganizacao.address.bairro = cep.neighborhood;
		formData.dadosDaOrganizacao.address.estado = cep.state;
		formData.dadosDaOrganizacao.address.cidade = cep.city;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [cep]);

	const handleInscricaoEstadual = (e) => {
		let err = errors;
		if (formData.dadosDaOrganizacao.inscricaoEstadual === 'Isento') {
			formData.dadosDaOrganizacao.inscricaoEstadual = '';
			setDisabledInputInscricaoEstadual(false);
			err.dadosDaOrganizacao.inscricaoEstadual = true;
			document.getElementById(
				`error.dadosDaOrganizacao.inscricaoEstadual`
			).hidden = false;
		} else {
			formData.dadosDaOrganizacao.inscricaoEstadual = 'Isento';
			setDisabledInputInscricaoEstadual(true);
			err.dadosDaOrganizacao.inscricaoEstadual = false;
			document.getElementById(
				`error.dadosDaOrganizacao.inscricaoEstadual`
			).hidden = true;
		}
		setErrors(err);
	};

	const validate = (e, chNumber) => {
		let err = errors;
		const { name } = e.target;
		let path = name.split('.');

		let path1 = '';
		let path2 = '';
		let path3 = '';

		if (path.length <= 2) {
			path1 = path[0];
			path2 = path[1];
			if (formData[path1][path2].length < chNumber) {
				err[path1][path2] = true;
				document.getElementById(`error.${path1}.${path2}`).hidden = false;
			} else {
				err[path1][path2] = false;
				document.getElementById(`error.${path1}.${path2}`).hidden = true;
			}
		} else {
			path1 = path[0];
			path2 = path[1];
			path3 = path[2];
			if (formData[path1][path2][path3].length < chNumber) {
				err[path1][path2][path3] = true;
				document.getElementById(
					`error.${path1}.${path2}.${path3}`
				).hidden = false;
			} else {
				err[path1][path2][path3] = false;
				document.getElementById(
					`error.${path1}.${path2}.${path3}`
				).hidden = true;
			}
		}
		setErrors(err);
	};

	function validateCnpj(e) {
		let err = errors;

		const { value } = e.target;

		let cnpj = value.replace(/[^\d]+/g, '');

		if (checkCnpj.isValid(cnpj)) {
			err.dadosDaOrganizacao.cnpj = false;
			document.getElementById(`error.dadosDaOrganizacao.cnpj`).hidden = true;
		} else {
			err.dadosDaOrganizacao.cnpj = true;
			document.getElementById(`error.dadosDaOrganizacao.cnpj`).hidden = false;
		}

		setErrors(err);
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		let err = errors;

		if (formData.dadosDaOrganizacao.tipoEmpresa === '') {
			err.dadosDaOrganizacao.tipoEmpresa = true;
			document.getElementById(
				`error.dadosDaOrganizacao.tipoEmpresa`
			).hidden = false;
		} else {
			err.dadosDaOrganizacao.tipoEmpresa = false;
			document.getElementById(
				`error.dadosDaOrganizacao.tipoEmpresa`
			).hidden = true;
		}

		setErrors(err);

		let exists1 = Object.values(errors.dadosDaOrganizacao).includes(true);
		let exists2 = Object.values(errors.dadosDaOrganizacao.address).includes(true);

		if (exists1 === false && exists2 === false) {
			navigation.next();
		}
	};

	useEffect(() => {
		let err = errors;

		err.dadosDaOrganizacao.tipoEmpresa = false;
		document.getElementById(
			`error.dadosDaOrganizacao.tipoEmpresa`
		).hidden = true;

		setErrors(err);
	}, [formData.dadosDaOrganizacao.tipoEmpresa]);

	return (
		<Form onSubmit={handleSubmit}>
			<div>
				<span className='label'>
					<p>Pessoa</p>
				</span>
				<span className='input'>
					<input
						type='radio'
						name='dadosDaOrganizacao.pessoa'
						defaultValue='Jurídica'
						defaultChecked={(formData.dadosDaOrganizacao.pessoa = 'Jurídica')}
						onChange={setForm}
						required
					/>
					<label htmlFor='Jurídica'>Jurídica</label>
				</span>
			</div>
			<div>
				<span className='label'>
					<p>Razão social *</p>
				</span>
				<span className='input'>
					<input
						className='size1'
						type='text'
						name='dadosDaOrganizacao.razaoSocial'
						value={formData.dadosDaOrganizacao.razaoSocial}
						onChange={setForm}
						onBlur={(e) => validate(e, 3)}
						required
					/>
				</span>
			</div>
			<span
				className='error'
				id='error.dadosDaOrganizacao.razaoSocial'
				hidden={true}
			>
				Deve ter no mínimo 3 caracteres!
			</span>
			<div>
				<span className='label'>
					<p>Nome fantasia *</p>
				</span>
				<span className='input'>
					<input
						className='size1'
						type='text'
						name='dadosDaOrganizacao.nomeFantasia'
						value={formData.dadosDaOrganizacao.nomeFantasia}
						onChange={setForm}
						onBlur={(e) => validate(e, 3)}
						required
					/>
				</span>
			</div>
			<span
				className='error'
				id='error.dadosDaOrganizacao.nomeFantasia'
				hidden={true}
			>
				Deve ter no mínimo 3 caracteres!
			</span>
			<div>
				<span className='label'>
					<p>CNPJ *</p>
				</span>
				<span className='input'>
					<InputMask
						mask='99.999.999/9999-99'
						maskChar=''
						className='size2'
						type='text'
						name='dadosDaOrganizacao.cnpj'
						value={formData.dadosDaOrganizacao.cnpj}
						onChange={setForm}
						onBlur={(e) => validateCnpj(e)}
						required
					/>
				</span>
			</div>
			<span className='error' id='error.dadosDaOrganizacao.cnpj' hidden={true}>
				Deve ser um CNPJ válido (14 números)!
			</span>
			<div>
				<span className='label vertical'>
					<p>Inscrição Estadual *</p>
				</span>
				<span>
					<span className='input'>
						<input
							className='size2'
							type='text'
							name='dadosDaOrganizacao.inscricaoEstadual'
							disabled={disabledInputInscricaoEstadual}
							value={formData.dadosDaOrganizacao.inscricaoEstadual}
							onBlur={(e) => validate(e, 3)}
							onChange={setForm}
							required
						/>
					</span>
					<span className='input'>
						<input
							type='checkbox'
							value='Isento'
							onChange={handleInscricaoEstadual}
							checked={disabledInputInscricaoEstadual}
						/>
						<label>Isento</label>
					</span>
				</span>
			</div>
			<span
				className='error'
				id='error.dadosDaOrganizacao.inscricaoEstadual'
				hidden={true}
			>
				Deve ter no mínimo 3 caracteres!
			</span>
			<div>
				<span className='label'>
					<p>Telefone *</p>
				</span>
				<span className='input'>
					<InputMask
						mask='(99) 99999-9999'
						maskChar=''
						className='size2'
						type='text'
						name='dadosDaOrganizacao.telefone'
						value={formData.dadosDaOrganizacao.telefone}
						onChange={setForm}
						onBlur={(e) => validate(e, 14)}
						required
					/>
				</span>
			</div>
			<span
				className='error'
				id='error.dadosDaOrganizacao.telefone'
				hidden={true}
			>
				Deve ter no mínimo 10 caracteres!
			</span>
			<div>
				<span className='label vertical2'>
					<p>Tipo empresa</p>
				</span>
				<span>
					<span className='input'>
						<input
							type='radio'
							name='dadosDaOrganizacao.tipoEmpresa'
							defaultValue='Empresa de software'
							defaultChecked={
								formData.dadosDaOrganizacao.tipoEmpresa ===
								'Empresa de software'
							}
							onChange={setForm}
						/>
						<label htmlFor='Empresa de software'>Empresa de software</label>
					</span>
					<span className='input'>
						<input
							type='radio'
							name='dadosDaOrganizacao.tipoEmpresa'
							defaultValue='Integrador / representante de software'
							checked={
								formData.dadosDaOrganizacao.tipoEmpresa ===
								'Integrador / representante de software'
							}
							onChange={setForm}
						/>
						<label htmlFor='Integrador / representante de software'>
							Integrador / representante de software
						</label>
					</span>
					<span className='input'>
						<input
							type='radio'
							name='dadosDaOrganizacao.tipoEmpresa'
							defaultValue='Empresa de outro ramo'
							checked={
								formData.dadosDaOrganizacao.tipoEmpresa ===
								'Empresa de outro ramo'
							}
							onChange={setForm}
						/>
						<label htmlFor='Empresa de outro ramo'>Empresa de outro ramo</label>
					</span>
				</span>
			</div>
			<span
				className='error'
				id='error.dadosDaOrganizacao.tipoEmpresa'
				hidden={true}
			>
				Selecione o tipo da empresa!
			</span>
			<div>
				<span className='label'>
					<p>CEP *</p>
				</span>
				<span className='input'>
					<InputMask
						mask='99999-999'
						maskChar=''
						className='size2'
						type='text'
						name='dadosDaOrganizacao.address.cep'
						onBlur={handleChangeCep}
						value={formData.dadosDaOrganizacao.address.cep}
						onChange={setForm}
						required
					/>
				</span>
			</div>
			<span
				className='error'
				id='error.dadosDaOrganizacao.address.cep'
				hidden={true}
			>
				Insira um CEP válido!
			</span>
			<div>
				<span className='label'>
					<p>Endereço *</p>
				</span>
				<span className='input'>
					<input
						className='size3'
						type='text'
						name='dadosDaOrganizacao.address.endereco'
						value={formData.dadosDaOrganizacao.address.endereco}
						onChange={setForm}
						onBlur={(e) => validate(e, 3)}
						required
					/>
				</span>
			</div>
			<span
				className='error'
				id='error.dadosDaOrganizacao.address.endereco'
				hidden={true}
			>
				Deve ter no mínimo 3 caracteres!
			</span>
			<div>
				<span className='label'>
					<p>Número *</p>
				</span>
				<span className='input'>
					<input
						className='size4'
						type='text'
						name='dadosDaOrganizacao.address.numero'
						value={formData.dadosDaOrganizacao.address.numero}
						onChange={setForm}
						onBlur={(e) => validate(e, 1)}
						required
					/>
				</span>
			</div>
			<span
				className='error'
				id='error.dadosDaOrganizacao.address.numero'
				hidden={true}
			>
				Deve ter no mínimo 1 carácter!
			</span>
			<div>
				<span className='label'>
					<p>Complemento</p>
				</span>
				<span className='input'>
					<input
						className='size3'
						type='text'
						name='dadosDaOrganizacao.address.complemento'
						value={formData.dadosDaOrganizacao.address.complemento}
						onChange={setForm}
					/>
				</span>
			</div>
			<div>
				<span className='label'>
					<p>Bairro *</p>
				</span>
				<span className='input'>
					<input
						className='size3'
						type='text'
						name='dadosDaOrganizacao.address.bairro'
						value={formData.dadosDaOrganizacao.address.bairro}
						onChange={setForm}
						onBlur={(e) => validate(e, 3)}
						required
					/>
				</span>
			</div>
			<span
				className='error'
				id='error.dadosDaOrganizacao.address.bairro'
				hidden={true}
			>
				Deve ter no mínimo 3 caracteres!
			</span>
			<div>
				<span className='label'>
					<p>Estado *</p>
				</span>
				<span className='input'>
					<select
						className='size4'
						name='dadosDaOrganizacao.address.estado'
						// value={uf}
						// onChange={(e) => setUf(e.target.value)}
						value={formData.dadosDaOrganizacao.address.estado}
						onChange={setForm}
						required
					>
						{listUf.map((a, index) => (
							<option key={index} value={a.sigla}>
								{a.sigla}
							</option>
						))}
					</select>
				</span>
			</div>
			<div>
				<span className='label'>
					<p>Cidade *</p>
				</span>
				<span className='input'>
					<select
						className='size3'
						name='dadosDaOrganizacao.address.cidade'
						disabled={disabledSelectCidade}
						value={formData.dadosDaOrganizacao.address.cidade}
						onChange={setForm}
						required
					>
						{formData.dadosDaOrganizacao.address.estado !== '' &&
							listCity.map((a, index) => (
								<option key={index} value={a.nome}>
									{a.nome}
								</option>
							))}
					</select>
				</span>
			</div>
			<div className='buttons'>
				<button type='submit'>Próxima</button>
			</div>
		</Form>
	);
};
