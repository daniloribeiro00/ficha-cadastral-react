import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    padding: 0.5rem;
`;

export const Content = styled.div`
    margin: 0 auto;
    max-width: 1100px;

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

            a {
                text-decoration: none;
                font-family: Arial, Helvetica, sans-serif;
                font-size: 0.85rem;
                color: #212121;
                padding: 0 2rem;
            }

            a:last-child {
                padding-right: 0;
            }
        }
    }
`;