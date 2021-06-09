import React from 'react';
import { Container, Content } from './styles';

export const Header = () => {
	return (
		<Container>
			<Content>
				<div>
					<a href='/'>
						<img src='logo.png' alt='Tecnospeed' />
					</a>
				</div>
				<div className='buttons'>
					<span>
						<button>
							<a href='https://tecnospeed.com.br/#solucoes'>SOLUÇÕES</a>
						</button>
						<button>
							<a href='https://tecnospeed.com.br/institucional/'>
								INSTITUCIONAL
							</a>
						</button>
					</span>
					<span>
						<button>
							<a href='https://atendimento.tecnospeed.com.br/'>SUPORTE</a>
						</button>
						<button>
							<a href='https://blog.tecnospeed.com.br/'>BLOG</a>
						</button>
					</span>
				</div>
			</Content>
		</Container>
	);
};
