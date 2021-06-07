import React from 'react';
import InputMask from 'react-input-mask';

import { Form } from './styles';

export const Step3 = ({ formData, setForm, navigation }) => {
    return (
        <Form>
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
					/>
				</span>
			</div>
            <div>
				<span className='label'>
					<p>CPF *</p>
				</span>
				<span className='input'>
					<InputMask
						mask='999.999.999-99'
						className='size2'
						type='text'
						name='dadosRepresentanteLegal.cpf'
						value={formData.dadosRepresentanteLegal.cpf}
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
						type='text'
						name='dadosRepresentanteLegal.email'
						value={formData.dadosRepresentanteLegal.email}
						onChange={setForm}
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
						name='dadosRepresentanteLegal.telefone'
						value={formData.dadosRepresentanteLegal.telefone}
						onChange={setForm}
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