import React, { useContext } from 'react';
import InputMask from 'react-input-mask';
import { GlobalContext } from '../../../contexts/AppContext';

import { cpf as checkCpf } from 'cpf-cnpj-validator';

import { Form } from './styles';

export const Step3 = ({ formData, setForm, navigation }) => {
	const {
		errors,
		setErrors,
	} = useContext(GlobalContext);

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

	function validateCpf(e) {
		let err = errors;

		const { value } = e.target;

		let cpf = value.replace(/[^\d]+/g, '');

		if (checkCpf.isValid(cpf)) {
			err.dadosRepresentanteLegal.cpf = false;
			document.getElementById(`error.dadosRepresentanteLegal.cpf`).hidden = true;
		} else {
			err.dadosRepresentanteLegal.cpf = true;
			document.getElementById(`error.dadosRepresentanteLegal.cpf`).hidden = false;
		}

		setErrors(err);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		let exists = Object.values(errors.dadosRepresentanteLegal).includes(true);

		if (exists === false) {
			navigation.next()
		}
	}

    return (
        <Form onSubmit={handleSubmit}>
            <div>
				<span className='label'>
					<p>Nome completo *</p>
				</span>
				<span className='input'>
					<input
						className='size1'
						type='text'
						name='dadosRepresentanteLegal.nomeCompleto'
						value={formData.dadosRepresentanteLegal.nomeCompleto}
						onChange={setForm}
						onBlur={(e) => validate(e, 3)}
						required
					/>
				</span>
			</div>
			<span
				className='error'
				id='error.dadosRepresentanteLegal.nomeCompleto'
				hidden={true}
			>
				Deve ter no mínimo 3 caracteres!
			</span>
            <div>
				<span className='label'>
					<p>CPF *</p>
				</span>
				<span className='input'>
					<InputMask
						mask='999.999.999-99'
						maskChar=''
						className='size2'
						type='text'
						name='dadosRepresentanteLegal.cpf'
						value={formData.dadosRepresentanteLegal.cpf}
						onChange={setForm}
						onBlur={(e) => validateCpf(e)}
						required
					/>
				</span>
			</div>
			<span
				className='error'
				id='error.dadosRepresentanteLegal.cpf'
				hidden={true}
			>
				Insira um CPF válido!
			</span>
            <div>
				<span className='label'>
					<p>Email *</p>
				</span>
				<span className='input'>
					<input
						type='email'
						name='dadosRepresentanteLegal.email'
						value={formData.dadosRepresentanteLegal.email}
						onChange={setForm}
						required
					/>
				</span>
			</div>
            <div>
				<span className='label'>
					<p>Data de nascimento *</p>
				</span>
				<span className='input'>
					<input
						className='size2'
						type='date'
						name='dadosRepresentanteLegal.dataNascimento'
						value={formData.dadosRepresentanteLegal.dataNascimento}
						onChange={setForm}
						required
					/>
				</span>
			</div>
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
						name='dadosRepresentanteLegal.telefone'
						value={formData.dadosRepresentanteLegal.telefone}
						onChange={setForm}
						onBlur={(e) => validate(e, 14)}
						required
					/>
				</span>
			</div>
			<span
				className='error'
				id='error.dadosRepresentanteLegal.telefone'
				hidden={true}
			>
				Deve ter no mínimo 10 caracteres!
			</span>
            <div className='buttons'>
				<button onClick={() => navigation.previous()}>Voltar</button>
				<button type='submit'>Próxima</button>
			</div>
        </Form>
    )
}