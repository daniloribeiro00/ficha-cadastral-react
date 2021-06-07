import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../contexts/AppContext';

import { Container } from './styles';

export const Progress = () => {
	const [percent, setPercent] = useState(0);
	const { step } = useContext(GlobalContext);

	useEffect(() => {
		switch (step.id) {
			case 'step1':
				document.getElementById('step 1').className = 'actualStep';
				document.getElementById('step 2').className = '';
				document.getElementById('step 3').className = '';
				document.getElementById('step 4').className = '';
				document.getElementById('step 5').className = '';
				if (percent < 0) {
					setPercent(0);
				}
				break;
			case 'step2':
				document.getElementById('step 1').className = '';
				document.getElementById('step 2').className = 'actualStep';
				document.getElementById('step 3').className = '';
				document.getElementById('step 4').className = '';
				document.getElementById('step 5').className = '';
				if (percent < 20) {
					setPercent(20);
				}
				break;
			case 'step3':
				document.getElementById('step 1').className = '';
				document.getElementById('step 2').className = '';
				document.getElementById('step 3').className = 'actualStep';
				document.getElementById('step 4').className = '';
				document.getElementById('step 5').className = '';
				if (percent < 40) {
					setPercent(40);
				}
				break;
			case 'step4':
				document.getElementById('step 1').className = '';
				document.getElementById('step 2').className = '';
				document.getElementById('step 3').className = '';
				document.getElementById('step 4').className = 'actualStep';
				document.getElementById('step 5').className = '';
				if (percent < 60) {
					setPercent(60);
				}
				break;
			case 'step5':
				document.getElementById('step 1').className = '';
				document.getElementById('step 2').className = '';
				document.getElementById('step 3').className = '';
				document.getElementById('step 4').className = '';
				document.getElementById('step 5').className = 'actualStep';
				if (percent < 80) {
					setPercent(80);
				}
				break;
			default:
				document.getElementById('step 1').className = '';
				document.getElementById('step 2').className = '';
				document.getElementById('step 3').className = '';
				document.getElementById('step 4').className = '';
				document.getElementById('step 5').className = '';
				if (percent < 100) {
					setPercent(100);
				}
				break;
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [step]);

	useEffect(() => {
		switch (percent) {
			case 0:
				document.getElementById('progress 1').className = 'actualProgress';
				document.getElementById('progress 2').className = '';
				document.getElementById('progress 3').className = '';
				document.getElementById('progress 4').className = '';
				document.getElementById('progress 5').className = '';
				break;
			case 20:
				document.getElementById('progress 1').className = 'pastProgress';
				document.getElementById('progress 2').className = 'actualProgress';
				document.getElementById('progress 3').className = '';
				document.getElementById('progress 4').className = '';
				document.getElementById('progress 5').className = '';
				break;
			case 40:
				document.getElementById('progress 1').className = 'pastProgress';
				document.getElementById('progress 2').className = 'pastProgress';
				document.getElementById('progress 3').className = 'actualProgress';
				document.getElementById('progress 4').className = '';
				document.getElementById('progress 5').className = '';
				break;
			case 60:
				document.getElementById('progress 1').className = 'pastProgress';
				document.getElementById('progress 2').className = 'pastProgress';
				document.getElementById('progress 3').className = 'pastProgress';
				document.getElementById('progress 4').className = 'actualProgress';
				document.getElementById('progress 5').className = '';
				break;
			case 80:
				document.getElementById('progress 1').className = 'pastProgress';
				document.getElementById('progress 2').className = 'pastProgress';
				document.getElementById('progress 3').className = 'pastProgress';
				document.getElementById('progress 4').className = 'pastProgress';
				document.getElementById('progress 5').className = 'actualProgress';
				break;
			default:
				document.getElementById('progress 1').className = 'pastProgress';
				document.getElementById('progress 2').className = 'pastProgress';
				document.getElementById('progress 3').className = 'pastProgress';
				document.getElementById('progress 4').className = 'pastProgress';
				document.getElementById('progress 5').className = 'pastProgress';
				break;
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [percent]);

	return (
		<Container>
			<div className='progress'>
				<div id='progress 1'></div>
				<div id='progress 2'></div>
				<div id='progress 3'>
					<span>{percent}%</span>
				</div>
				<div id='progress 4'></div>
				<div id='progress 5'></div>
			</div>
			<div className='steps'>
				<div id='step 1'>
					<img src='/icons/menu.png' alt='Dados da organização' />
					<span>Dados da organização</span>
				</div>
				<div id='step 2'>
					<img
						src='/icons/company.png'
						alt='Informações adicionais da organização'
					/>
					<span>Informações adicionais da organização</span>
				</div>
				<div id='step 3'>
					<img src='/icons/user.png' alt='Dados do representante legal' />
					<span>Dados do representante legal</span>
				</div>
				<div id='step 4'>
					<img
						src='/icons/monitor.png'
						alt='Dados do administrador e do responsável técnico'
					/>
					<span>Dados do administrador e do responsável técnico</span>
				</div>
				<div id='step 5'>
					<img
						src='/icons/money.png'
						alt='Dados para envio da nota fiscal e boleto'
					/>
					<span>Dados para envio da nota fiscal e boleto</span>
				</div>
			</div>
		</Container>
	);
};
