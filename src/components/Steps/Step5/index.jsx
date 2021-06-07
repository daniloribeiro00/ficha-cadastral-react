import React, { useState, useEffect } from 'react';

import { Form } from './styles';

export const Step5 = ({ formData, setForm, navigation }) => {
    const [disabledInput, setDisabledInput] = useState(false);

    console.log(formData.dadosNFeBoleto);

    const handleAdminData = () => {
        formData.dadosNFeBoleto.responsavelFinanceiro = formData.dadosAdministrador.administrador;
		setDisabledInput(!disabledInput);
    }

    useEffect(() => {
		if (disabledInput === true) {
			formData.dadosNFeBoleto.responsavelFinanceiro = formData.dadosAdministrador.administrador;
			document.getElementById('confirmaSenhaFinanceiro').value = formData.dadosAdministrador.administrador.senha;
		} else {
			formData.dadosNFeBoleto.responsavelFinanceiro = {
				nomeCompleto: '',
				email: '',
				senha: '',
				telefone: '',
			}
			document.getElementById('nomeFinanceiro').value = '';
			document.getElementById('emailFinanceiro').value = '';
			document.getElementById('senhaFinanceiro').value = '';
			document.getElementById('confirmaSenhaFinanceiro').value = '';
			document.getElementById('telefoneFinanceiro').value = '';
		}	
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [disabledInput])

	useEffect(() => {
		if (disabledInput === true) {
			formData.dadosNFeBoleto.responsavelFinanceiro = formData.dadosAdministrador.administrador;
		}	
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [formData.dadosAdministrador.administrador])

    const handleCheckPassword1 = (e) => {
		const { value } = e.target;

		console.log(value);
		if (document.getElementById('confirmaSenhaFinanceiro').value === value) {
			console.log('valido');
		} else {
			console.log('invalido');
		}
	}

	const handleCheckPassword2 = (e) => {
		const { value } = e.target;

		console.log(value);
		if (formData.dadosNFeBoleto.responsavelFinanceiro.senha === value) {
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
							defaultChecked={
								formData.dadosNFeBoleto.diaVencimento ===
								'10'
							}
							onChange={setForm}
						/>
						<label htmlFor='10'>10</label>
					</span>
					<span className='input'>
						<input
							type='radio'
							name='dadosNFeBoleto.diaVencimento'
							defaultValue='15'
							checked={
								formData.dadosNFeBoleto.diaVencimento ===
								'15'
							}
							onChange={setForm}
						/>
						<label htmlFor='15'>15</label>
					</span>
					<span className='input'>
						<input
							type='radio'
							name='dadosNFeBoleto.diaVencimento'
							defaultValue='20'
							checked={
								formData.dadosNFeBoleto.diaVencimento ===
								'20'
							}
							onChange={setForm}
						/>
						<label htmlFor='20'>20</label>
					</span>
                    <span className='input'>
						<input
							type='radio'
							name='dadosNFeBoleto.diaVencimento'
							defaultValue='25'
							checked={
								formData.dadosNFeBoleto.diaVencimento ===
								'25'
							}
							onChange={setForm}
						/>
						<label htmlFor='25'>25</label>
					</span>
                    <span className='input'>
						<input
							type='radio'
							name='dadosNFeBoleto.diaVencimento'
							defaultValue='30'
							checked={
								formData.dadosNFeBoleto.diaVencimento ===
								'30'
							}
							onChange={setForm}
						/>
						<label htmlFor='30'>30</label>
					</span>
				</span>
			</div>
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
						id='nomeFinanceiro'
						type='text'
						name='dadosNFeBoleto.responsavelFinanceiro.nomeCompleto'
						value={formData.dadosNFeBoleto.responsavelFinanceiro.nomeCompleto}
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
						id='emailFinanceiro'
						type='text'
						name='dadosNFeBoleto.responsavelFinanceiro.email'
						value={formData.dadosNFeBoleto.responsavelFinanceiro.email}
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
						id='senhaFinanceiro'
						type='password'
						name='dadosNFeBoleto.responsavelFinanceiro.senha'
						value={formData.dadosNFeBoleto.responsavelFinanceiro.senha}
						onChange={setForm}
						disabled={disabledInput}
						onBlur={handleCheckPassword1}
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
						id='confirmaSenhaFinanceiro'
						type='password'
						onBlur={handleCheckPassword2}
						// name='dadosAdministrador.email'
						// value={formData.dadosAdministrador.email}
						// onChange={setForm}
						disabled={disabledInput}
					/>
				</span>
			</div>
            <div>
				<span className='label'>
					<p>Celular *</p>
				</span>
				<span className='input'>
					<input
						className='size2'
						id='telefoneFinanceiro'
						type='text'
						name='dadosNFeBoleto.responsavelFinanceiro.telefone'
						value={formData.dadosNFeBoleto.responsavelFinanceiro.telefone}
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