import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    padding: 1rem;
`;

export const Content = styled.div`
    margin: 0 auto;
    max-width: 1100px;

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
                margin-right: 1rem;
            }

            p {
                text-decoration: none;
                font-family: Arial, Helvetica, sans-serif;
                font-size: 0.8rem;
                color: orangered;
            }

            a {
                text-decoration: none;
                font-family: Arial, Helvetica, sans-serif;
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
`;