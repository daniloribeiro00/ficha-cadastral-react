import styled from 'styled-components';

export const Container = styled.div`
	.progress {
		background-color: #eee;
		border: 1px solid #ddd;
		height: 25px;
		border-radius: 0.3rem;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: 'Open Sans', sans-serif;
		font-size: 14px;
		font-weight: 800;

		div {
			width: 20%;
			height: 25px;
			text-align: center;
		}

		div:nth-child(3) {
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.actualProgress {
			background: repeating-linear-gradient(
				45deg,
				#5bc0de,
				#5bc0de 14.5px,
				#73c9e3 14.5px,
				#73c9e3  29px
			);
		}

		.pastProgress {
			background-color: #5cb85c;
		}
	}

	.steps {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1.8rem 0;

		div {
			width: 200px;
			height: 125px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			text-align: center;
			font-size: 14px;
			font-family: 'Open Sans', sans-serif;
			font-weight: 400;
			color: #333;

			img {
				height: 40px;
				margin-bottom: 0.15rem;
			}

			span {
				height: 40px;
				padding: 0 1rem;
			}
		}

		.actualStep {
			background-color: #5bc0de;
			border-bottom: 5px solid #3873b4;
		}
	}

	@media (max-width: 800px) {
		margin-top: -1.3rem;

		.progress {
            margin: 0 2rem
        }

		.steps {
			margin: 0 1rem;

			div {
				zoom: 55%;
				width: 100%;
				height: 120px;
				display: flex;
				flex-direction: column;
				justify-content: center;
				font-weight: 520;

				span {
					display: none;
				}
			}
		}
    }
`;
