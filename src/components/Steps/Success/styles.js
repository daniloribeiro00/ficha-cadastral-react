import styled from 'styled-components';

export const FinalMessage = styled.div`
	border: 1px solid #ddd;
	border-radius: 0.4rem;
	background-color: #eee;
	width: 1130px;
	margin-left: -80px;
	margin-top: -50px;

	div {
		padding: 2.5rem 1.2rem;

		h1 {
			font-size: 1.6rem;
			text-align: left;
			display: flex;
			align-items: center;

			img {
				height: 25px;
				margin-left: 0.4rem;
			}
		}

		p {
			font-family: 'Open Sans', sans-serif;
			font-size: 14px;
			color: #8c9195;
			font-weight: 400;
			text-align: left;
			display: flex;
			align-items: center;
			margin-top: -10px;
		}
	}
`;

export const Buttons = styled.div`
	margin: 3rem auto 3rem auto;
	display: flex;
	align-items: center;
	justify-content: center;

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

	.showCompany {
		border: 1px solid blue;
		background-color: #3873b4;
	}
`;
