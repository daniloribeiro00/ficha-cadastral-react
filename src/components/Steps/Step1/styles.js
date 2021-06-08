import styled from 'styled-components';

export const Form = styled.form`
	border: 1px solid #ddd;
	border-radius: 0.4rem;

	div {
		display: flex;
		align-items: center;
		margin: 1.5rem 0;
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
		margin-bottom: 35px;
	}

	.vertical2 {
		margin-bottom: 72px;
	}

	.input {
		display: flex;
		align-items: center;

		font-size: 0.9rem;
		font-family: Arial, Helvetica, sans-serif;
		font-weight: 300;
		color: #212121;

		label {
			margin-left: 0.5rem;
		}

		input,
		select {
			height: 35px;
			border: 1px solid #ddd;
			padding: 0 0.5rem;
			transition: 0.2rem;
			font-size: 0.9rem;
			font-family: Arial, Helvetica, sans-serif;
			font-weight: 300;
		}

		select:disabled {
			background-color: #ddd;
		}

		input:focus,
		select:focus {
			border: 1px solid #3873b4;
		}
	}

	.error {
		font-family: 'Open Sans', sans-serif;
		font-size: 14px;
		font-weight: 400;
		color: #a94442;
		margin-left: 350px;
		position: relative;
		top: -15px;
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
