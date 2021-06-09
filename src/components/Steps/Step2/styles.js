import styled from 'styled-components';

export const Form = styled.form`
	border: 1px solid #ddd;
	border-radius: 0.4rem;

	h1 {
		padding: 2rem;
		font-size: 1.65rem;
		text-align: center;
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
			input[type='checkbox'] {
				margin-left: 1rem;
				height: 25px;
			}

			input[type='text'] {
				margin-top: 0.8rem;
			}

			label {
				width: 100px;
			}
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

		input:disabled,
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

	@media (max-width: 900px) {
		margin: 1rem;
		text-align: center;

		h1 {
			margin-top: 0.3rem;
		}

		div {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin: 1.5rem 0 2rem 0;

			.label {
				display: flex;
				flex-direction: column;
				align-items: center;

				p {
					margin: 0;
					margin-bottom: 1rem;
				}
			}

			.vertical {
				margin-bottom: 0;
			}

			.vertical2 {
				margin-bottom: 0;
			}

			.vertical3 {
				margin-bottom: 0;
			}

            .vertical4 {
				margin-bottom: 0;
			}

			.input {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 90%;
				margin: 0 1rem;
			}
		}

		.boxes {
			.input {
				display: flex;
				line-break: loose;
				flex-wrap: wrap;
				align-items: center;
				justify-content: center;
				width: 300px;
                margin-left: 1rem;

				input {
					margin-bottom: 1rem;
				}

                label {
                    display: flex;
                    align-items: flex-start;
                    margin-bottom: 1rem;
                    margin-left: 0.5rem;
                }
			}
		}

        .buttons {
            button {
                margin-bottom: 2rem;
            }
        }

		.error {
			margin: 0 auto;
		}
	}
`;
