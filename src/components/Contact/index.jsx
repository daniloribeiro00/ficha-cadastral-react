import React from 'react';
import { Container, Content } from './styles';

export const Contact = () => {
    return (
        <Container>
            <Content >
                <div className='social'>
                    <a href="http://www.facebook.com/tecnospeed">
                        <img src="/icons/facebook.png" alt="Facebook" />
                    </a>
                    <a href="https://www.linkedin.com/company/tecnospeed-ti">
                        <img src="/icons/linkedin.png" alt="LinkedIn" />
                    </a>
                    <a href="http://www.youtube.com/tecnospeedti">
                        <img src="/icons/youtube.png" alt="YouTube" />
                    </a>
                </div>
                <div className='buttons'>
                    <button className='telephone'>
                        <img src="/icons/phone.png" alt="Ligar" />
                        <p>0800 006 9500 / 44 3037 9500</p>
                    </button>
                    <button>
                        <img src="/icons/chat.png" alt="Atendimento" />
                        <a href="https://tecnospeed.com.br/comercial">Atendimento</a>
                    </button>
                    <button>
                        <img src="/icons/help.png" alt="Suporte" />
                        <a href="https://atendimento.tecnospeed.com.br/">Suporte</a>
                    </button>
                    <button>
                        <img src="/icons/email.png" alt="Email" />
                        <a href="mailto:contato@tecnospeed.com.br">contato@tecnospeed.com.br</a>
                    </button>
                </div>
            </Content>
        </Container>
    )
}