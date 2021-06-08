import React, { useContext, useEffect } from 'react';
import InputMask from 'react-input-mask';
import { GlobalContext } from '../../../contexts/AppContext';
import { PasswordMeter3 } from '../../PasswordMeter3';

import { Form } from './styles';

export const Step5 = ({ formData, setForm, navigation }) => {
	const { disabledFinanceiroInput, setDisabledFinanceiroInput, errors, setErrors  } =
		useContext(GlobalContext);

	const handleAdminData = () => {
		let err = errors;

		formData.dadosNFeBoleto.responsavelFinanceiro =
			formData.dadosAdministrador.administrador;
		setDisabledFinanceiroInput(!disabledFinanceiroInput);

		err.dadosNFeBoleto.responsavelFinanceiro.nomeCompleto = false;
		document.getElementById(`error.dadosNFeBoleto.responsavelFinanceiro.nomeCompleto`).hidden = true;

		err.dadosNFeBoleto.responsavelFinanceiro.senha = false;
		document.getElementById(`error.dadosNFeBoleto.responsavelFinanceiro.senha`).hidden = true;

		err.dadosNFeBoleto.responsavelFinanceiro.confirmaSenha = false;
		document.getElementById(`error.dadosNFeBoleto.responsavelFinanceiro.confirmaSenha`).hidden = true;
		
		err.dadosNFeBoleto.responsavelFinanceiro.telefone = false;
		document.getElementById(`error.dadosNFeBoleto.responsavelFinanceiro.telefone`).hidden = true;
	};

	useEffect(() => {
		if (disabledFinanceiroInput === true) {
			formData.dadosNFeBoleto.responsavelFinanceiro =
				formData.dadosAdministrador.administrador;
			document.getElementById('confirmaSenhaFinanceiro').value =
				formData.dadosAdministrador.administrador.senha;
		} 
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [disabledFinanceiroInput]);

	useEffect(() => {
		if (disabledFinanceiroInput === true) {
			formData.dadosNFeBoleto.responsavelFinanceiro =
				formData.dadosAdministrador.administrador;
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [formData.dadosAdministrador.administrador]);

	const handleCheckPassword1 = (e) => {
		validate(e, 5);
		const { value } = e.target;
		let err = errors;

		if (document.getElementById('confirmaSenhaFinanceiro').value === value) {
			err.dadosNFeBoleto.responsavelFinanceiro.confirmaSenha = false;
			document.getElementById(`error.dadosNFeBoleto.responsavelFinanceiro.confirmaSenha`).hidden = true;
		} else {
			err.dadosNFeBoleto.responsavelFinanceiro.confirmaSenha = true;
			document.getElementById(`error.dadosNFeBoleto.responsavelFinanceiro.confirmaSenha`).hidden = false;
		}
	};

	const handleCheckPassword2 = (e) => {
		const { value } = e.target;
		let err = errors;

		if (formData.dadosNFeBoleto.responsavelFinanceiro.senha === value) {
			err.dadosNFeBoleto.responsavelFinanceiro.confirmaSenha = false;
			document.getElementById(`error.dadosNFeBoleto.responsavelFinanceiro.confirmaSenha`).hidden = true;
		} else {
			err.dadosNFeBoleto.responsavelFinanceiro.confirmaSenha = true;
			document.getElementById(`error.dadosNFeBoleto.responsavelFinanceiro.confirmaSenha`).hidden = false;
		}
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

	const handleSubmit = (e) => {
		e.preventDefault();

		let err = errors;

		if (formData.dadosNFeBoleto.diaVencimento === '') {
			err.dadosNFeBoleto.diaVencimento = true;
			document.getElementById(`error.dadosNFeBoleto.diaVencimento`).hidden = false;
		} else {
			err.dadosNFeBoleto.diaVencimento = false;
			document.getElementById(`error.dadosNFeBoleto.diaVencimento`).hidden = true;
		}

		setErrors(err);

		let exists1 = Object.values(errors.dadosNFeBoleto).includes(true);
		let exists2 = Object.values(errors.dadosNFeBoleto.responsavelFinanceiro).includes(true);

		if (exists1 === false && exists2 === false) {
			navigation.next()
		}
	}

	useEffect(() => {
		let err = errors;

		err.dadosNFeBoleto.diaVencimento = false;
		document.getElementById(`error.dadosNFeBoleto.diaVencimento`).hidden = true;
		
		setErrors(err);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [formData.dadosNFeBoleto.diaVencimento])

	return (
		<Form onSubmit={handleSubmit}>
			<h1>
				<div>
					<img src='icons/help-blue.png' alt='' />
				</div>
				<span>Dados do responsável financeiro.</span>
			</h1>
			<div>
				<span className='label vertical'>
					<p>Dia preferencial para vencimento</p>
				</span>
				<span className='radioButtons'>
					<span className='input'>
						<input
							type='radio'
							name='dadosNFeBoleto.diaVencimento'
							defaultValue='10'
							defaultChecked={formData.dadosNFeBoleto.diaVencimento === '10'}
							onChange={setForm}
						/>
						<label htmlFor='10'>10</label>
					</span>
					<span className='input'>
						<input
							type='radio'
							name='dadosNFeBoleto.diaVencimento'
							defaultValue='15'
							checked={formData.dadosNFeBoleto.diaVencimento === '15'}
							onChange={setForm}
						/>
						<label htmlFor='15'>15</label>
					</span>
					<span className='input'>
						<input
							type='radio'
							name='dadosNFeBoleto.diaVencimento'
							defaultValue='20'
							checked={formData.dadosNFeBoleto.diaVencimento === '20'}
							onChange={setForm}
						/>
						<label htmlFor='20'>20</label>
					</span>
					<span className='input'>
						<input
							type='radio'
							name='dadosNFeBoleto.diaVencimento'
							defaultValue='25'
							checked={formData.dadosNFeBoleto.diaVencimento === '25'}
							onChange={setForm}
						/>
						<label htmlFor='25'>25</label>
					</span>
					<span className='input'>
						<input
							type='radio'
							name='dadosNFeBoleto.diaVencimento'
							defaultValue='30'
							checked={formData.dadosNFeBoleto.diaVencimento === '30'}
							onChange={setForm}
						/>
						<label htmlFor='30'>30</label>
					</span>
				</span>
			</div>
			<span
				className='error'
				id='error.dadosNFeBoleto.diaVencimento'
				hidden={true}
			>
				Selecione o dia do vencimento
			</span>
			<div>
				<span className='label'></span>
				<span className='input adminData'>
					<input
						type='checkbox'
						onChange={handleAdminData}
						checked={disabledFinanceiroInput}
					/>
					<label>
						Desejo usar os dados do administrador para preencher estes campos.
					</label>
				</span>
			</div>
			<div>
				<span className='label'>
					<p>Nome completo *</p>
				</span>
				<span className='input'>
					<input
						className='size1'
						id='nomeFinanceiro'
						type='text'
						name='dadosNFeBoleto.responsavelFinanceiro.nomeCompleto'
						value={formData.dadosNFeBoleto.responsavelFinanceiro.nomeCompleto}
						onChange={setForm}
						onBlur={(e) => validate(e, 3)}
						disabled={disabledFinanceiroInput}
						required
					/>
				</span>
			</div>
			<span
				className='error'
				id='error.dadosNFeBoleto.responsavelFinanceiro.nomeCompleto'
				hidden={true}
			>
				Deve ter no mínimo 3 caracteres!
			</span>
			<div>
				<span className='label'>
					<p>Email *</p>
				</span>
				<span className='input'>
					<input
						className='size3'
						id='emailFinanceiro'
						type='email'
						name='dadosNFeBoleto.responsavelFinanceiro.email'
						value={formData.dadosNFeBoleto.responsavelFinanceiro.email}
						onChange={setForm}
						disabled={disabledFinanceiroInput}
						required
					/>
				</span>
			</div>
			<div>
				<span className='label'>
					<p>Senha *</p>
				</span>
				<span className='input'>
					<input
						className='size3'
						id='senhaFinanceiro'
						type='password'
						name='dadosNFeBoleto.responsavelFinanceiro.senha'
						value={formData.dadosNFeBoleto.responsavelFinanceiro.senha}
						onChange={setForm}
						disabled={disabledFinanceiroInput}
						onBlur={handleCheckPassword1}
						required
					/>
				</span>
				<div className='passwordMeter'>
					<span hidden={disabledFinanceiroInput}>
						<PasswordMeter3
							password={formData.dadosNFeBoleto.responsavelFinanceiro.senha}
						/>
					</span>
				</div>
			</div>
			<span
				className='error'
				id='error.dadosNFeBoleto.responsavelFinanceiro.senha'
				hidden={true}
			>
				Deve ter no mínimo 5 caracteres!
			</span>
			<div>
				<span className='label'>
					<p>Confirme a senha *</p>
				</span>
				<span className='input'>
					<input
						className='size3'
						id='confirmaSenhaFinanceiro'
						type='password'
						onBlur={handleCheckPassword2}
						// name='dadosAdministrador.email'
						// value={formData.dadosAdministrador.email}
						// onChange={setForm}
						disabled={disabledFinanceiroInput}
						required
					/>
				</span>
			</div>
			<span
				className='error'
				id='error.dadosNFeBoleto.responsavelFinanceiro.confirmaSenha'
				hidden={true}
			>
				As senhas não coincidem!
			</span>
			<div>
				<span className='label'>
					<p>Celular *</p>
				</span>
				<span className='input'>
					<InputMask
						mask='(99) 99999-9999'
						maskChar=''
						className='size2'
						id='telefoneFinanceiro'
						type='text'
						name='dadosNFeBoleto.responsavelFinanceiro.telefone'
						value={formData.dadosNFeBoleto.responsavelFinanceiro.telefone}
						onChange={setForm}
						onBlur={(e) => validate(e, 14)}
						placeholder='(00) 0000-0000'
						disabled={disabledFinanceiroInput}
						required
					/>
				</span>
			</div>
			<span
				className='error'
				id='error.dadosNFeBoleto.responsavelFinanceiro.telefone'
				hidden={true}
			>
				Deve ter no mínimo 10 caracteres!
			</span>
			<div className='buttons'>
				<button onClick={() => navigation.previous()}>Voltar</button>
				<button type='submit'>Próxima</button>
			</div>
		</Form>
	);
};
