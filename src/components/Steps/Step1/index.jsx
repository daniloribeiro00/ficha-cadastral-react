/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import InputMask from 'react-input-mask';

import { Form } from './styles';

import checkCep from 'cep-promise';
import { GlobalContext } from '../../../contexts/AppContext';

export const Step1 = ({ formData, setForm, navigation }) => {

	console.log(formData.dadosDaOrganizacao);

	const {
		disabledSelectCidade,
		setDisabledSelectCidade,
		disabledInputInscricaoEstadual,
		setDisabledInputInscricaoEstadual,
		listUf,
		setListUf,
		listCity,
		setListCity,
		cep,
		setCep,
	} = useContext(GlobalContext);

	useEffect(() => {
		loadUf();
	}, []);

	useEffect(() => {
		if (formData.dadosDaOrganizacao.address.estado) {
			loadCity(formData.dadosDaOrganizacao.address.estado);
			setDisabledSelectCidade(false);
		} else {
			setDisabledSelectCidade(true);
		}
	}, [formData.dadosDaOrganizacao.address.estado]);

	const loadUf = async () => {
		await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
			.then((response) => response.json())
			.then((data) => {
				data.sort((a, b) => a.nome.localeCompare(b.nome));
				setListUf([{}, ...data]);
			});
	};

	const loadCity = async (id) => {
		await fetch(
			`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}/municipios`
		)
			.then((response) => response.json())
			.then((data) => {
				data.sort((a, b) => a.nome.localeCompare(b.nome));
				setListCity([{}, ...data]);
			});
	};

	const handleChangeCep = (e) => {
		const { value } = e.target;

		const typedCep = value?.replace(/[^0-9]/g, '');

		if (typedCep?.length !== 8) {
			return;
		}

		try {
			checkCep(typedCep).then((r) => setCep(r));
			checkCep(typedCep).then((r) => setCep(r));
		} catch {
			console.log('error');
		}
	};

	useEffect(() => {
		formData.dadosDaOrganizacao.address.endereco = cep.street;
		formData.dadosDaOrganizacao.address.bairro = cep.neighborhood;
		formData.dadosDaOrganizacao.address.estado = cep.state;
		formData.dadosDaOrganizacao.address.cidade = cep.city;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [cep]);

	const handleInscricaoEstadual = () => {
		if (formData.dadosDaOrganizacao.inscricaoEstadual === 'Isento') {
			formData.dadosDaOrganizacao.inscricaoEstadual = '';
			setDisabledInputInscricaoEstadual(false);
		} else {
			formData.dadosDaOrganizacao.inscricaoEstadual = 'Isento';
			setDisabledInputInscricaoEstadual(true);
		}
	};

	return (
		<Form>
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
					/>
				</span>
			</div>
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
					/>
				</span>
			</div>
			<div>
				<span className='label'>
					<p>CNPJ *</p>
				</span>
				<span className='input'>
					<InputMask
						mask='99.999.999/9999-99'
						className='size2'
						type='text'
						name='dadosDaOrganizacao.cnpj'
						value={formData.dadosDaOrganizacao.cnpj}
						onChange={setForm}
					/>
				</span>
			</div>
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
							onChange={setForm}
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
			<div>
				<span className='label'>
					<p>Telefone *</p>
				</span>
				<span className='input'>
					<InputMask
						mask='(99) 99999-9999'
						className='size2'
						type='text'
						name='dadosDaOrganizacao.telefone'
						value={formData.dadosDaOrganizacao.telefone}
						onChange={setForm}
					/>
				</span>
			</div>
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
			<div>
				<span className='label'>
					<p>CEP *</p>
				</span>
				<span className='input'>
					<InputMask
						mask='99999-999'
						className='size2'
						type='text'
						name='dadosDaOrganizacao.address.cep'
						onBlur={handleChangeCep}
						value={formData.dadosDaOrganizacao.address.cep}
						onChange={setForm}
					/>
				</span>
			</div>
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
					/>
				</span>
			</div>
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
					/>
				</span>
			</div>
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
					/>
				</span>
			</div>
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
				<button onClick={() => navigation.next()}>Próxima</button>
			</div>
		</Form>
	);
};
