import styled from 'styled-components';

export const Form = styled.form`
    border: 1px solid #ddd;
    border-radius: 0.4rem;

    h1 {
        padding: 2rem;
        font-size: 1.7rem;
        text-align: center;

        div {
            margin: 0;
            display: flex;
            justify-content: flex-end;
            margin-top: -20px;
            margin-right: -20px;

            img {
                height: 18px;
                cursor: help;
            }
        }
    }

    h2 {
        font-size: 1.7rem;
        font-family: Roboto, sans-serif;
        font-weight: 300;
        color: #212121;
        padding-bottom: 1rem;
        text-align: center;
    }

    .data {
        display: flex;
        vertical-align: top;
        align-items: flex-start;
    }

    .info {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        vertical-align: super;
        

        div {
            margin-bottom: 0;
        }
    }

    .title2 {
        border-top: 1px solid #ddd;
    }

    div {
        display: flex;
        align-items: center;
        margin: 1.5rem 0;
    }

    .label {
        width: 200px;

        font-size: 0.9rem;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 600;
        color: #212121;

        p {
            text-align: right;
            margin-right: 2rem;
        }
    }

    .wrap {
        display: flex;
        align-items: flex-start;
    }

    .value {
        width: 260px;
        max-width: 280px;
        word-wrap: break-word;
        display: flex;
        flex-wrap: wrap;
        align-items: center;

        font-size: 0.9rem;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 300;
        color: #212121;

        label {
            margin-left: 0.5rem;;
        }
    }

    .buttons {
        max-width: 800px;
        margin: 0 auto 3rem auto;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        button {
            border: 1px solid green;
            background-color: #1eb366;
            color: #fff;
            font-size: 0.9rem;
            font-family: Arial, Helvetica, sans-serif;
            font-weight: 300;
            padding: 0.6rem 0.8rem;
            transition: 0.2s;
        }

        button:hover {
            filter: brightness(80%);
        }

        button:first-child {
            border: 1px solid blue;
            background-color: #3873b4;
        }
    }
`;