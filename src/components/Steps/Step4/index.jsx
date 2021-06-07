import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';

import { Form } from './styles';

export const Step4 = ({ formData, setForm, navigation }) => {
	const [disabledInput, setDisabledInput] = useState(false);

    const handleAdminData = () => {
        formData.dadosAdministrador.tecnico = formData.dadosAdministrador.administrador;
		setDisabledInput(!disabledInput);
    }

	useEffect(() => {
		if (disabledInput === true) {
			formData.dadosAdministrador.tecnico = formData.dadosAdministrador.administrador;
			document.getElementById('confirmaSenhaTecnico').value = formData.dadosAdministrador.administrador.senha;
		} else {
			formData.dadosAdministrador.tecnico = {
				nomeCompleto: '',
				email: '',
				senha: '',
				telefone: '',
			}
			document.getElementById('nomeTecnico').value = '';
			document.getElementById('emailTecnico').value = '';
			document.getElementById('senhaTecnico').value = '';
			document.getElementById('confirmaSenhaTecnico').value = '';
			document.getElementById('telefoneTecnico').value = '';
		}	
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [disabledInput])

	useEffect(() => {
		if (disabledInput === true) {
			formData.dadosAdministrador.tecnico = formData.dadosAdministrador.administrador;
			// document.getElementById('confirmaSenhaTecnico').value = formData.dadosAdministrador.administrador.senha;
		}	
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [formData.dadosAdministrador.administrador])

	const handleCheckPasswordAdministrador1 = (e) => {
		const { value } = e.target;

		console.log(value);
		if (document.getElementById('confirmaSenhaAdministrador').value === value) {
			console.log('valido');
		} else {
			console.log('invalido');
		}
	}

	const handleCheckPasswordAdministrador2 = (e) => {
		const { value } = e.target;

		console.log(value);
		if (formData.dadosAdministrador.administrador.senha === value) {
			console.log('valido');
		} else {
			console.log('invalido');
		}
	}

	const handleCheckPasswordTecnico1 = (e) => {
		const { value } = e.target;

		console.log(value);
		if (document.getElementById('confirmaSenhaTecnico').value === value) {
			console.log('valido');
		} else {
			console.log('invalido');
		}
	}

	const handleCheckPasswordTecnico2 = (e) => {
		const { value } = e.target;

		console.log(value);
		if (formData.dadosAdministrador.tecnico.senha === value) {
			console.log('valido');
		} else {
			console.log('invalido');
		}
	}

    return (
        <Form>
            <h1>
                <div>
                    <img src="icons/help-blue.png" alt="" />
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
						onChange={setForm}
					/>
				</span>
			</div>
            <div>
				<span className='label'>
					<p>Email *</p>
				</span>
				<span className='input'>
					<input
						className='size3'
						type='text'
						name='dadosAdministrador.administrador.email'
						value={formData.dadosAdministrador.administrador.email}
						onChange={setForm}
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
					/>
				</span>
			</div>
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
						// name='dadosAdministrador.email'
						// value={formData.dadosAdministrador.email}
						// onChange={setForm}
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
						className='size2'
						type='text'
						name='dadosAdministrador.administrador.telefone'
						value={formData.dadosAdministrador.administrador.telefone}
						onChange={setForm}
                        placeholder='(00) 0000-0000'
					/>
				</span>
			</div>
            <h1 className='title2'>
                <div>
                    <img src="icons/help-blue.png" alt="" />
                </div>
                <span>Técnico responsável pelo uso das soluções na organização.</span>
			</h1>
            <div>
				<span className='label'>
				</span>
				<span className='input adminData'>
						<input
							type='checkbox'
							onChange={handleAdminData}
						/>
						<label>Desejo usar os dados do administrador para preencher estes campos.</label>
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
						onChange={setForm}
						disabled={disabledInput}
					/>
				</span>
			</div>
            <div>
				<span className='label'>
					<p>Email *</p>
				</span>
				<span className='input'>
					<input
						className='size3'
						id='emailTecnico'
						type='text'
						name='dadosAdministrador.tecnico.email'
						value={formData.dadosAdministrador.tecnico.email}
						onChange={setForm}
						disabled={disabledInput}
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
						disabled={disabledInput}
						onBlur={handleCheckPasswordTecnico1}
					/>
				</span>
			</div>
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
						disabled={disabledInput}
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
						className='size2'
						id='telefoneTecnico'
						type='text'
						name='dadosAdministrador.tecnico.telefone'
						value={formData.dadosAdministrador.tecnico.telefone}
						onChange={setForm}
                        placeholder='(00) 0000-0000'
						disabled={disabledInput}
					/>
				</span>
			</div>
            <div className='buttons'>
				<button onClick={() => navigation.previous()}>Voltar</button>
				<button onClick={() => navigation.next()}>Próxima</button>
			</div>
        </Form>
    )
}