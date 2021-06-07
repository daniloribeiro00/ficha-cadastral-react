import React, { useContext } from 'react';
import { GlobalContext } from '../../../contexts/AppContext';

import { FinalMessage, Buttons } from './styles';

export const Success = ({ navigation }) => {
	const { companies } = useContext(GlobalContext);

	console.log(companies);

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
				<button onClick={() => navigation.next()}>
					Cadastrar nova empresa
				</button>
			</Buttons>
		</>
	);
};
