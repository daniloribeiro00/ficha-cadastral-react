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

    .boxes {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0;

        .input {
            input[type=checkbox] {
                margin-left: 1rem;
                height: 25px;
            }

            input[type=text] {
                margin-top: 0.8rem;
            }

            label {
                width: 100px;
            }
        }
    }

    .radioButtons {
        .input {
            height: 27px;
        }
    }

    .adminData {
        width: 415px;
        text-align: center;
        margin-left: 12px;
        margin-top: -18px;
        
        input {
            margin-bottom: 16px;
        }
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

    .vertical {
        margin-bottom: 110px;
    }   
    
    .vertical2 {
        margin-bottom: 25px;
    }   

    .vertical3 {
        margin-bottom: 152px;
    }

    .vertical4 {
        margin-bottom: 73px;
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

        input, select {
            height: 35px;
            border: 1px solid #ddd;
            padding: 0 0.5rem;
            transition: 0.2rem;
            font-size: 0.9rem;
            font-family: Arial, Helvetica, sans-serif;
            font-weight: 300;
        }

        input:disabled, select:disabled {
            background-color: #ddd;
        }

        input:focus, select:focus {
            border: 1px solid #3873b4;
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

    .size1 {
        width: 450px;
    }

    .size2 {
        width: 180px;
    }

    .size3 {
        width: 280px;
    }

    .size4 {
        width: 100px;
    }
`;