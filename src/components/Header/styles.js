import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    padding: 0.5rem;
`;

export const Content = styled.div`
    margin: 0 auto;
    max-width: 1120px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        height: 60px;
    }

    .buttons {
        button {
            border: none;
            background: none;
            padding: 0 1.2rem;

            a {
                text-decoration: none;
                font-family: 'Open Sans', sans-serif;
                font-weight: 400;
                font-size: 0.85rem;
                color: #4f5c6a;
                padding-bottom: 1.8rem;
            }

            a:hover {
                border-bottom: 2px solid #3873b4;
            }
        }

        button:last-child {
            padding-right: 0;
        }
    }
`;