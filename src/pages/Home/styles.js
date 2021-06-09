import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 auto;
    max-width: 1130px;
    padding: 3.5rem 0 4rem 0;

    h1 {
        font-size: 1.85rem;
        font-family: 'Open Sans', sans-serif;
        font-weight: 300;
        color: #43484b;
        border-bottom: 1px solid #eee;
        padding-bottom: 1rem;
    }

    @media (max-width: 1200px) and (min-width: 800px) {
		padding-right: 2rem;
		padding-left: 2rem;
	}

    @media (max-width: 800px) {
		h1 {
            margin-top: -2.5rem;
            text-align: center;
        }
    }
`;

export const Content = styled.div`
    margin: 0 auto;
    max-width: 970px;
    padding: 3rem 0 4rem 0;
`;