import styled from 'styled-components';

export const Foot = styled.footer`
    position: absolute;
	width: 100%;
	background-color: #f9fbfc;
	left: 0;
	bottom: 0;
    border-top: 1px solid #eee;
    text-align: center;
    padding: 1.3rem 0 1rem 0;

    @media (max-width: 900px) {
		margin: 1rem;
		text-align: center;
		width: 100%;
		margin: 0 auto;
        position: relative;
	}
`;
