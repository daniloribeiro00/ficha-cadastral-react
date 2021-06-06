import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 auto;
    max-width: 1100px;
    padding: 4rem 0;

    h1 {
        font-size: 2rem;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 300;
        color: #212121;
        border-bottom: 1px solid #ddd;
        padding-bottom: 1rem;
    }
`;

export const Content = styled.div`
    margin: 0 auto;
    max-width: 950px;
    padding: 4rem 0;

    .progress {
        background-color: #eee;
        border: 1px solid #ddd;
        height: 30px;
        border-radius: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .steps {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem 0;

        div {
            width: 190px;
            height: 120px;
            display: flex;
            flex-direction: column;
            align-items: center ;
            justify-content: center;
            text-align: center;
            font-size: 0.8rem;
            font-family: Arial, Helvetica, sans-serif;
            font-weight: 300;
            color: #212121;

            img {
                height: 40px;
                margin-bottom: 0.5rem;
            }

            span {
                height: 40px;
            }
        }
    }
`;