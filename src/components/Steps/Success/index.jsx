import React, { useContext } from 'react';
import { GlobalContext } from '../../../contexts/AppContext';

import { FinalMessage, Buttons } from './styles';

export const Success = ({ navigation }) => {
	const { companies } = useContext(GlobalContext);

	const showCompany = () => {
		console.log('Empresas cadastradas: ', companies);
		console.log('Última empresa cadastrada: ', companies[companies.length - 1]);
		alert('Verifique o console do navegador!')
	}

	const reload = () => {
		window.location.reload()
	}

	return (
		<>
			<FinalMessage>
				<div>
					<h1>
						Ficha encaminhada com sucesso ao setor comercial!
						<img src='/icons/check.png' alt='Sucesso' />
					</h1>
					<p>
						Acesse sua caixa de entrada e confirme o e-mail do administrador!
					</p>
				</div>
			</FinalMessage>
			<Buttons>
				<button className='showCompany' onClick={showCompany}>
					Exibir empresa cadastrada
				</button>
			</Buttons>
			<Buttons>
				<button onClick={reload}>
					Cadastrar nova empresa
				</button>
			</Buttons>
		</>
	);
};
