import styled from 'styled-components';

export const Container = styled.div`
	margin: 0;
	padding: 0;
	height: 10px;

	.password {
		/* background-color: red; */
		/* border: 1px solid #ddd; */
		height: 7px;
		width: 105px;
		margin-left: 1rem;
		border-radius: 0.5rem;
		display: flex;
		align-items: center;
		justify-content: center;

		div {
			background-color: #ddd;
			border: 1px solid #fff;
			border-radius: 0.5rem;
			width: 20%;
			height: 7px;
			text-align: center;
		}

		.veryWeak {
			background-color: #ff0000;
		}

		.weak {
			background-color: #ffa500;
		}

		.mid {
			background-color: #a1c502;
		}

		.strong {
			background-color: #5ecc1e;
		}

		.veryStrong {
			background-color: #009933;
		}
	}

	@media (max-width: 900px) {
		.password {
			margin-top: -20px;
			display: flex;
			flex-direction: row;
			height: 10px;
			width: 120px;
			margin: 0;

			div {
				margin-top: 0.5rem;
			}
		}
	}
`;
