import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    background-color: #f9fbfc;
    border-bottom: 1px solid #eee;
    padding: 1rem;
`;

export const Content = styled.div`
    margin: 0 auto;
    max-width: 1120px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .social {               
        img {
            height: 15px;
            margin-right: 1rem;
            filter: saturate(0);
            opacity: 70%;
            transition: 0.2s;
        }

        img:hover{
            filter: none;
            opacity: 100%;
        }
    }

    .buttons {
        display: flex;
        align-items: center;
        justify-content: center;

        button {
            border: none;
            background: none;
            padding: 0 1rem;

            display: flex;
            align-items: center;

            img {
                height: 13px;
                opacity: 50%;
                margin-right: 0.8rem;
            }

            p {
                text-decoration: none;
                font-family: 'Open Sans', sans-serif;
                font-size: 0.8rem;
                color: orangered;
            }

            a {
                text-decoration: none;
                font-family: 'Open Sans', sans-serif;
                font-size: 0.8rem;
                color: #3873b4;
                
            }
        }

        button:last-child {
            padding-right: 0;
        }

        .telephone {
            cursor: text;
        }
    }

    @media (max-width: 850px) {
        display: flex;
        flex-direction: column;

        .social {
            a {
                img {
                    margin-right: 2rem;
                }
            }
            
            a:last-child {
                img {
                    margin-right: 0;
                }
            }
        }

        .buttons {
            display: flex;
            flex-direction: column;
            margin-top: 1rem;

            button {
                margin: 0.5rem 0;
            }
        }
	}
`;