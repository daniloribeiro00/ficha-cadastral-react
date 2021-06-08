import React, { useContext, useEffect } from 'react';
import InputMask from 'react-input-mask';
import { GlobalContext } from '../../../contexts/AppContext';
import { PasswordMeter1 } from '../../PasswordMeter1';
import { PasswordMeter2 } from '../../PasswordMeter2';

import { Form } from './styles';

export const Step4 = ({ formData, setForm, navigation }) => {
	const { disabledTecnicoInput, setDisabledTecnicoInput, errors, setErrors } =
		useContext(GlobalContext);

	const handleAdminData = () => {
		let err = errors;

		formData.dadosAdministrador.tecnico =
			formData.dadosAdministrador.administrador;
		setDisabledTecnicoInput(!disabledTecnicoInput);

		err.dadosAdministrador.tecnico.nomeCompleto = false;
		document.getElementById(
			`error.dadosAdministrador.tecnico.nomeCompleto`
		).hidden = true;

		err.dadosAdministrador.tecnico.senha = false;
		document.getElementById(
			`error.dadosAdministrador.tecnico.senha`
		).hidden = true;

		err.dadosAdministrador.tecnico.confirmaSenha = false;
		document.getElementById(
			`error.dadosAdministrador.tecnico.confirmaSenha`
		).hidden = true;

		err.dadosAdministrador.tecnico.telefone = false;
		document.getElementById(
			`error.dadosAdministrador.tecnico.telefone`
		).hidden = true;
	};

	useEffect(() => {
		if (disabledTecnicoInput === true) {
			formData.dadosAdministrador.tecnico =
				formData.dadosAdministrador.administrador;
			document.getElementById('confirmaSenhaTecnico').value =
				formData.dadosAdministrador.administrador.senha;
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [disabledTecnicoInput]);

	useEffect(() => {
		if (disabledTecnicoInput === true) {
			formData.dadosAdministrador.tecnico =
				formData.dadosAdministrador.administrador;
			// document.getElementById('confirmaSenhaTecnico').value = formData.dadosAdministrador.administrador.senha;
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [formData.dadosAdministrador.administrador]);

	const handleCheckPasswordAdministrador1 = (e) => {
		validate(e, 5);
		const { value } = e.target;
		let err = errors;

		if (document.getElementById('confirmaSenhaAdministrador').value === value) {
			err.dadosAdministrador.administrador.confirmaSenha = false;
			document.getElementById(
				`error.dadosAdministrador.administrador.confirmaSenha`
			).hidden = true;
		} else {
			err.dadosAdministrador.administrador.confirmaSenha = true;
			document.getElementById(
				`error.dadosAdministrador.administrador.confirmaSenha`
			).hidden = false;
		}
	};

	const handleCheckPasswordAdministrador2 = (e) => {
		const { value } = e.target;
		let err = errors;

		if (formData.dadosAdministrador.administrador.senha === value) {
			err.dadosAdministrador.administrador.confirmaSenha = false;
			document.getElementById(
				`error.dadosAdministrador.administrador.confirmaSenha`
			).hidden = true;
		} else {
			err.dadosAdministrador.administrador.confirmaSenha = true;
			document.getElementById(
				`error.dadosAdministrador.administrador.confirmaSenha`
			).hidden = false;
		}
	};

	const handleCheckPasswordTecnico1 = (e) => {
		validate(e, 5);
		const { value } = e.target;
		let err = errors;

		if (document.getElementById('confirmaSenhaTecnico').value === value) {
			err.dadosAdministrador.tecnico.confirmaSenha = false;
			document.getElementById(
				`error.dadosAdministrador.tecnico.confirmaSenha`
			).hidden = true;
		} else {
			err.dadosAdministrador.tecnico.confirmaSenha = true;
			document.getElementById(
				`error.dadosAdministrador.tecnico.confirmaSenha`
			).hidden = false;
		}
	};

	const handleCheckPasswordTecnico2 = (e) => {
		const { value } = e.target;
		let err = errors;

		if (formData.dadosAdministrador.tecnico.senha === value) {
			err.dadosAdministrador.tecnico.confirmaSenha = false;
			document.getElementById(
				`error.dadosAdministrador.tecnico.confirmaSenha`
			).hidden = true;
		} else {
			err.dadosAdministrador.tecnico.confirmaSenha = true;
			document.getElementById(
				`error.dadosAdministrador.tecnico.confirmaSenha`
			).hidden = false;
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
		let exists1 = Object.values(
			errors.dadosAdministrador.administrador
		).includes(true);
		let exists2 = Object.values(errors.dadosAdministrador.tecnico).includes(
			true
		);

		if (exists1 === false && exists2 === false) {
			navigation.next();
		}
	};

	return (
		<Form onSubmit={handleSubmit}>
			<h1>
				<div>
					<img src='icons/help-blue.png' alt='' />
				</div>
				<span>Administrador da área restrita.</span>
			</h1>
			<div>
				<span className='label'>
					<p>Nome completo *</p>
				</span>
				<span className='input'>
					<input
						className='size1'
						type='text'
						name='dadosAdministrador.administrador.nomeCompleto'
						value={formData.dadosAdministrador.administrador.nomeCompleto}
						onBlur={(e) => validate(e, 3)}
						onChange={setForm}
						required
					/>
				</span>
			</div>
			<span
				className='error'
				id='error.dadosAdministrador.administrador.nomeCompleto'
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
						type='email'
						name='dadosAdministrador.administrador.email'
						value={formData.dadosAdministrador.administrador.email}
						onChange={setForm}
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
						type='password'
						name='dadosAdministrador.administrador.senha'
						value={formData.dadosAdministrador.administrador.senha}
						onChange={setForm}
						onBlur={handleCheckPasswordAdministrador1}
						required
					/>
				</span>
				<span>
					<PasswordMeter1
						password={formData.dadosAdministrador.administrador.senha}
					/>
				</span>
			</div>
			<span
				className='error'
				id='error.dadosAdministrador.administrador.senha'
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
						id='confirmaSenhaAdministrador'
						type='password'
						onBlur={handleCheckPasswordAdministrador2}
						required
						// name='dadosAdministrador.email'
						// value={formData.dadosAdministrador.email}
						// onChange={setForm}
					/>
				</span>
			</div>
			<span
				className='error'
				id='error.dadosAdministrador.administrador.confirmaSenha'
				hidden={true}
			>
				As senhas não coincidem!
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
						name='dadosAdministrador.administrador.telefone'
						value={formData.dadosAdministrador.administrador.telefone}
						onChange={setForm}
						onBlur={(e) => validate(e, 14)}
						placeholder='(00) 0000-0000'
						required
					/>
				</span>
			</div>
			<span
				className='error'
				id='error.dadosAdministrador.administrador.telefone'
				hidden={true}
			>
				Deve ter no mínimo 10 caracteres!
			</span>
			<h1 className='title2'>
				<div>
					<img src='icons/help-blue.png' alt='' />
				</div>
				<span>Técnico responsável pelo uso das soluções na organização.</span>
			</h1>
			<div>
				<span className='label'></span>
				<span className='input adminData'>
					<input
						type='checkbox'
						onChange={handleAdminData}
						checked={disabledTecnicoInput}
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
						id='nomeTecnico'
						type='text'
						name='dadosAdministrador.tecnico.nomeCompleto'
						value={formData.dadosAdministrador.tecnico.nomeCompleto}
						onBlur={(e) => validate(e, 3)}
						onChange={setForm}
						disabled={disabledTecnicoInput}
						required
					/>
				</span>
			</div>
			<span
				className='error'
				id='error.dadosAdministrador.tecnico.nomeCompleto'
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
						id='emailTecnico'
						type='email'
						name='dadosAdministrador.tecnico.email'
						value={formData.dadosAdministrador.tecnico.email}
						onChange={setForm}
						disabled={disabledTecnicoInput}
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
						id='senhaTecnico'
						type='password'
						name='dadosAdministrador.tecnico.senha'
						value={formData.dadosAdministrador.tecnico.senha}
						onChange={setForm}
						disabled={disabledTecnicoInput}
						onBlur={handleCheckPasswordTecnico1}
						required
					/>
				</span>
				<div className='passwordMeter'>
					<span hidden={disabledTecnicoInput}>
						<PasswordMeter2
							password={formData.dadosAdministrador.tecnico.senha}
						/>
					</span>
				</div>
			</div>
			<span
				className='error'
				id='error.dadosAdministrador.tecnico.senha'
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
						id='confirmaSenhaTecnico'
						type='password'
						onBlur={handleCheckPasswordTecnico2}
						// name='dadosAdministrador.email'
						// value={formData.dadosAdministrador.email}
						// onChange={setForm}
						disabled={disabledTecnicoInput}
						required
					/>
				</span>
			</div>
			<span
				className='error'
				id='error.dadosAdministrador.tecnico.confirmaSenha'
				hidden={true}
			>
				As senhas não coincidem!
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
						id='telefoneTecnico'
						type='text'
						name='dadosAdministrador.tecnico.telefone'
						value={formData.dadosAdministrador.tecnico.telefone}
						onChange={setForm}
						onBlur={(e) => validate(e, 14)}
						placeholder='(00) 0000-0000'
						disabled={disabledTecnicoInput}
						required
					/>
				</span>
			</div>
			<span
				className='error'
				id='error.dadosAdministrador.tecnico.telefone'
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
