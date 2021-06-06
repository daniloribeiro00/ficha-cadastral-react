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

    .adminData {
        width: 415px;
        text-align: center;
        
        input {
            margin-bottom: 16px;
        }
    }

    .label {
        width: 350px;

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
        margin-bottom: 70px;
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


    .input {
        display: flex;
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