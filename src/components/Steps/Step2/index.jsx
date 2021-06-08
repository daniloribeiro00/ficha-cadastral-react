import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../../contexts/AppContext';

import { Form } from './styles';

export const Step2 = ({ formData, setForm, navigation }) => {
	const {
		disabledLanguageInput,
		setDisabledLanguageInput,
		disabledFormasInput,
		setDisabledFormasInput,
		languageChecked,
		setLanguageChecked,
		ramoChecked,
		setRamoChecked,
		estadoChecked,
		setEstadoChecked,
		formaChecked,
		setFormaChecked,
		errors,
		setErrors,
	} = useContext(GlobalContext);

	const handleLinguagens = (e) => {
		const { value } = e.target;
		let langs = languageChecked;
		const i = langs.findIndex((e) => e.value === value);
		const indexNenhuma = languageChecked.findIndex(
			(e) => e.value === 'Nenhuma'
		);
		if (value === 'Nenhuma') {
			formData.informacoesAdicionais.linguagensDeProgramacao = ['Nenhuma'];
			langs.forEach((e, i) => {
				langs[i].isChecked = false;
			});
			setDisabledLanguageInput(true);
			formData.informacoesAdicionais.outrasLinguagens = [];
			document.getElementById('outrasLinguagensInput').value = '';
			langs[indexNenhuma].isChecked = !langs[indexNenhuma].isChecked;
			setLanguageChecked([...languageChecked, langs]);
		} else {
			langs[indexNenhuma].isChecked = false;
			setLanguageChecked([...languageChecked, langs]);
			if (value === 'Outras') {
				setDisabledLanguageInput(!disabledLanguageInput);
				langs[i].isChecked = !langs[i].isChecked;
				setLanguageChecked([...languageChecked, langs]);
				if (formData.informacoesAdicionais.outrasLinguagens !== []) {
					formData.informacoesAdicionais.outrasLinguagens = [];
					document.getElementById('outrasLinguagensInput').value = '';
				}
			} else {
				if (
					formData.informacoesAdicionais.linguagensDeProgramacao.includes(value)
				) {
					const found =
						formData.informacoesAdicionais.linguagensDeProgramacao.findIndex(
							(e) => e === value
						);
					formData.informacoesAdicionais.linguagensDeProgramacao.splice(
						found,
						1
					);
					langs[i].isChecked = false;
					setLanguageChecked([...languageChecked, langs]);
				} else {
					formData.informacoesAdicionais.linguagensDeProgramacao.push(value);
					// setLanguageChecked({ ...languageChecked, value: true });
					langs[i].isChecked = true;
					setLanguageChecked([...languageChecked, langs]);
				}
			}
		}
	};

	const handleOutrasLinguagens = (e) => {
		const { value } = e.target;
		let splitLanguage = value.split(',');
		formData.informacoesAdicionais.outrasLinguagens = splitLanguage;
	};

	useEffect(() => {
		if (document.getElementById('outrasLinguagensInput').value === '') {
			document.getElementById('outrasLinguagensInput').value =
				formData.informacoesAdicionais.outrasLinguagens;
		}
		if (document.getElementById('outrasFormasInput').value === '') {
			document.getElementById('outrasFormasInput').value =
				formData.informacoesAdicionais.outrasFormas;
		}
		if (document.getElementById('clientesInput').value === '') {
			document.getElementById('clientesInput').value =
				formData.informacoesAdicionais.principaisClientes;
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleRamoDeAtividade = (e) => {
		const { value } = e.target;
		let ramos = ramoChecked;
		const i = ramos.findIndex((e) => e.value === value);

		if (formData.informacoesAdicionais.ramoDeAtividade.includes(value)) {
			const found = formData.informacoesAdicionais.ramoDeAtividade.findIndex(
				(e) => e === value
			);
			formData.informacoesAdicionais.ramoDeAtividade.splice(found, 1);
			ramos[i].isChecked = false;
			setRamoChecked([...ramoChecked, ramos]);
		} else {
			formData.informacoesAdicionais.ramoDeAtividade.push(value);
			// setLanguageChecked({ ...languageChecked, value: true });
			ramos[i].isChecked = true;
			setRamoChecked([...ramoChecked, ramos]);
		}
	};

	const handleEstados = (e) => {
		const { value } = e.target;
		let estados = estadoChecked;
		const i = estados.findIndex((e) => e.value === value);
		if (value === 'Todos') {
			if (
				formData.informacoesAdicionais.estadosQuePossuiClientes.length === 27
			) {
				formData.informacoesAdicionais.estadosQuePossuiClientes = [];
				estados.forEach((e, i) => {
					estados[i].isChecked = false;
				});
				setEstadoChecked([...estadoChecked, estados]);
			} else {
				formData.informacoesAdicionais.estadosQuePossuiClientes = [
					'AC',
					'AL',
					'AM',
					'AP',
					'BA',
					'CE',
					'DF',
					'ES',
					'GO',
					'MA',
					'MG',
					'MS',
					'MT',
					'PA',
					'PB',
					'PE',
					'PI',
					'PR',
					'RJ',
					'RN',
					'RO',
					'RR',
					'RS',
					'SC',
					'SE',
					'SP',
					'TO',
				];
				estados.forEach((e, i) => {
					estados[i].isChecked = true;
				});
				setEstadoChecked([...estadoChecked, estados]);
			}
		} else if (
			formData.informacoesAdicionais.estadosQuePossuiClientes.includes(value)
		) {
			const found =
				formData.informacoesAdicionais.estadosQuePossuiClientes.findIndex(
					(e) => e === value
				);
			formData.informacoesAdicionais.estadosQuePossuiClientes.splice(found, 1);
			estados[i].isChecked = !estados[i].isChecked;
			setEstadoChecked([...estadoChecked, estados]);
		} else {
			formData.informacoesAdicionais.estadosQuePossuiClientes.push(value);
			// setLanguageChecked({ ...languageChecked, value: true });
			estados[i].isChecked = !estados[i].isChecked;
			setEstadoChecked([...estadoChecked, estados]);
		}
	};

	const handleFormas = (e) => {
		const { value } = e.target;
		let formas = formaChecked;
		const i = formas.findIndex((e) => e.value === value);
		const indexNenhuma = formaChecked.findIndex((e) => e.value === 'Nenhuma');
		if (value === 'Nenhuma') {
			formData.informacoesAdicionais.formaComercializacaoErp = ['Nenhuma'];
			formas.forEach((e, i) => {
				formas[i].isChecked = false;
			});
			setDisabledFormasInput(true);
			formData.informacoesAdicionais.outrasFormas = [];
			document.getElementById('outrasFormasInput').value = '';
			formas[indexNenhuma].isChecked = !formas[indexNenhuma].isChecked;
			setFormaChecked([...formaChecked, formas]);
		} else {
			formas[indexNenhuma].isChecked = false;
			setFormaChecked([...formaChecked, formas]);
			if (value === 'Outro') {
				setDisabledFormasInput(!disabledFormasInput);
				formas[i].isChecked = !formas[i].isChecked;
				setFormaChecked([...formaChecked, formas]);
				if (formData.informacoesAdicionais.outrasFormas !== []) {
					formData.informacoesAdicionais.outrasFormas = [];
					document.getElementById('outrasFormasInput').value = '';
				}
			} else {
				if (
					formData.informacoesAdicionais.formaComercializacaoErp.includes(value)
				) {
					const found =
						formData.informacoesAdicionais.formaComercializacaoErp.findIndex(
							(e) => e === value
						);
					formData.informacoesAdicionais.formaComercializacaoErp.splice(
						found,
						1
					);
					formas[i].isChecked = false;
					setFormaChecked([...formaChecked, formas]);
				} else {
					formData.informacoesAdicionais.formaComercializacaoErp.push(value);
					// setLanguageChecked({ ...languageChecked, value: true });
					formas[i].isChecked = true;
					setFormaChecked([...formaChecked, formas]);
				}
			}
		}
	};

	const handleOutrasFormas = (e) => {
		const { value } = e.target;
		let splitForma = value.split(',');
		formData.informacoesAdicionais.outrasFormas = splitForma;
	};

	const handlePrincipaisClientes = (e) => {
		const { value } = e.target;
		let splitClientes = value.split(',');
		formData.informacoesAdicionais.principaisClientes = splitClientes;
	};

	const validate = (e, chNumber) => {
		let err = errors;
		const { name } = e.target;
		let path = name.split('.');

		let path1 = '';
		let path2 = '';

		if (path.length <= 2) {
			path1 = path[0];
			path2 = path[1];

			// eslint-disable-next-line default-case
			switch (name) {
				case 'informacoesAdicionais.linguagensDeProgramacao':
					handleLinguagens(e);
					break;
				case 'informacoesAdicionais.ramoDeAtividade':
					handleRamoDeAtividade(e);
					break;
				case 'informacoesAdicionais.estadosQuePossuiClientes':
					handleEstados(e);
					break;
				case 'informacoesAdicionais.formaComercializacaoErp':
					handleFormas(e);
					break;
			}

			if (formData[path1][path2].length < chNumber) {
				err[path1][path2] = true;
				document.getElementById(`error.${path1}.${path2}`).hidden = false;
			} else {
				err[path1][path2] = false;
				document.getElementById(`error.${path1}.${path2}`).hidden = true;
			}
		}
		setErrors(err);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		let err = errors;

		if (formData.informacoesAdicionais.linguagensDeProgramacao.length < 1) {
			err.informacoesAdicionais.linguagensDeProgramacao = true;
			document.getElementById(`error.informacoesAdicionais.linguagensDeProgramacao`).hidden = false;
		} else {
			err.informacoesAdicionais.linguagensDeProgramacao = false;
			document.getElementById(`error.informacoesAdicionais.linguagensDeProgramacao`).hidden = true;
		}

		if (formData.informacoesAdicionais.ramoDeAtividade.length < 1) {
			err.informacoesAdicionais.ramoDeAtividade = true;
			document.getElementById(`error.informacoesAdicionais.ramoDeAtividade`).hidden = false;
		} else {
			err.informacoesAdicionais.ramoDeAtividade = false;
			document.getElementById(`error.informacoesAdicionais.ramoDeAtividade`).hidden = true;
		}

		if (formData.informacoesAdicionais.estadosQuePossuiClientes.length < 1) {
			err.informacoesAdicionais.estadosQuePossuiClientes = true;
			document.getElementById(`error.informacoesAdicionais.estadosQuePossuiClientes`).hidden = false;
		} else {
			err.informacoesAdicionais.estadosQuePossuiClientes = false;
			document.getElementById(`error.informacoesAdicionais.estadosQuePossuiClientes`).hidden = true;
		}

		if (formData.informacoesAdicionais.formaComercializacaoErp.length < 1) {
			err.informacoesAdicionais.formaComercializacaoErp = true;
			document.getElementById(`error.informacoesAdicionais.formaComercializacaoErp`).hidden = false;
		} else {
			err.informacoesAdicionais.formaComercializacaoErp = false;
			document.getElementById(`error.informacoesAdicionais.formaComercializacaoErp`).hidden = true;
		}

		setErrors(err);

		let exists = Object.values(errors.informacoesAdicionais).includes(true);

		if (exists === false) {
			navigation.next();
		}
	};

	return (
		<Form onSubmit={handleSubmit}>
			<h1>
				Preencha os dados abaixo para entendermos mais sobre a sua organização.
			</h1>
			<div>
				<span className='label vertical'>
					<p>Linguagens de programação *</p>
				</span>
				<div className='boxes'>
					<span className='input'>
						<input
							type='checkbox'
							value='Delphi'
							name='informacoesAdicionais.linguagensDeProgramacao'
							onChange={validate}
							checked={languageChecked[0].isChecked}
						/>
						<label>Delphi</label>
						<input
							type='checkbox'
							value='Visual Basic'
							name='informacoesAdicionais.linguagensDeProgramacao'
							onChange={validate}
							checked={languageChecked[1].isChecked}
						/>
						<label>Visual Basic</label>
						<input
							type='checkbox'
							value='C#'
							name='informacoesAdicionais.linguagensDeProgramacao'
							onChange={validate}
							checked={languageChecked[2].isChecked}
						/>
						<label>C#</label>
						<input
							type='checkbox'
							value='PHP'
							name='informacoesAdicionais.linguagensDeProgramacao'
							onChange={validate}
							checked={languageChecked[3].isChecked}
						/>
						<label>PHP</label>
					</span>
					<span className='input'>
						<input
							type='checkbox'
							value='Java'
							name='informacoesAdicionais.linguagensDeProgramacao'
							onChange={validate}
							checked={languageChecked[4].isChecked}
						/>
						<label>Java</label>
						<input
							type='checkbox'
							value='Outras'
							name='informacoesAdicionais.linguagensDeProgramacao'
							onChange={validate}
							checked={languageChecked[5].isChecked}
						/>
						<label>Outras</label>
						<input
							type='checkbox'
							value='Nenhuma'
							name='informacoesAdicionais.linguagensDeProgramacao'
							onChange={(e) => handleLinguagens(e)}
							checked={languageChecked[6].isChecked}
						/>
						<label>Nenhuma</label>
					</span>
					<span className='input'>
						<input
							className='size1'
							id='outrasLinguagensInput'
							type='text'
							name='informacoesAdicionais.linguagensDeProgramacao'
							placeholder='Separe por vírgula as linguagens. Ex: Go, Lua, .NET'
							onChange={(e) => handleOutrasLinguagens(e)}
							disabled={disabledLanguageInput}
						/>
					</span>
				</div>
			</div>
			<span
				className='error'
				id='error.informacoesAdicionais.linguagensDeProgramacao'
				hidden={true}
			>
				Escolha pelo menos uma linguagem de programação!
			</span>
			<div>
				<span className='label vertical2'>
					<p>Ramo de atividade *</p>
				</span>
				<div className='boxes'>
					<span className='input'>
						<input
							type='checkbox'
							value='Varejo'
							name='informacoesAdicionais.ramoDeAtividade'
							onChange={validate}
							checked={ramoChecked[0].isChecked}
						/>
						<label>Varejo</label>
						<input
							type='checkbox'
							value='Indústria'
							name='informacoesAdicionais.ramoDeAtividade'
							onChange={validate}
							checked={ramoChecked[1].isChecked}
						/>
						<label>Indústria</label>
						<input
							type='checkbox'
							value='Comércio'
							name='informacoesAdicionais.ramoDeAtividade'
							onChange={validate}
							checked={ramoChecked[2].isChecked}
						/>
						<label>Comércio</label>
						<input
							type='checkbox'
							value='Transporte'
							name='informacoesAdicionais.ramoDeAtividade'
							onChange={validate}
							checked={ramoChecked[3].isChecked}
						/>
						<label>Transporte</label>
					</span>
					<span className='input'>
						<input
							type='checkbox'
							value='Serviço'
							name='informacoesAdicionais.ramoDeAtividade'
							onChange={validate}
							checked={ramoChecked[4].isChecked}
						/>
						<label>Serviço</label>
					</span>
				</div>
			</div>
			<span
				className='error'
				id='error.informacoesAdicionais.ramoDeAtividade'
				hidden={true}
			>
				Escolha pelo menos um ramo de atividade!
			</span>
			<div>
				<span className='label vertical3'>
					<p>Estados onde possui clientes *</p>
				</span>
				<div className='boxes'>
					<span className='input'>
						<input
							type='checkbox'
							value='Todos'
							name='informacoesAdicionais.estadosQuePossuiClientes'
							onChange={validate}
							checked={estadoChecked[0].isChecked}
						/>
						<label>Todos</label>
						<input
							type='checkbox'
							value='AC'
							name='informacoesAdicionais.estadosQuePossuiClientes'
							onChange={validate}
							checked={estadoChecked[1].isChecked}
						/>
						<label>AC</label>
						<input
							type='checkbox'
							value='AL'
							name='informacoesAdicionais.estadosQuePossuiClientes'
							onChange={validate}
							checked={estadoChecked[2].isChecked}
						/>
						<label>AL</label>
						<input
							type='checkbox'
							value='AM'
							name='informacoesAdicionais.estadosQuePossuiClientes'
							onChange={validate}
							checked={estadoChecked[3].isChecked}
						/>
						<label>AM</label>
					</span>
					<span className='input'>
						<input
							type='checkbox'
							value='AP'
							name='informacoesAdicionais.estadosQuePossuiClientes'
							onChange={validate}
							checked={estadoChecked[4].isChecked}
						/>
						<label>AP</label>
						<input
							type='checkbox'
							value='BA'
							name='informacoesAdicionais.estadosQuePossuiClientes'
							onChange={validate}
							checked={estadoChecked[5].isChecked}
						/>
						<label>BA</label>
						<input
							type='checkbox'
							value='CE'
							name='informacoesAdicionais.estadosQuePossuiClientes'
							onChange={validate}
							checked={estadoChecked[6].isChecked}
						/>
						<label>CE</label>
						<input
							type='checkbox'
							value='DF'
							name='informacoesAdicionais.estadosQuePossuiClientes'
							onChange={validate}
							checked={estadoChecked[7].isChecked}
						/>
						<label>DF</label>
					</span>
					<span className='input'>
						<input
							type='checkbox'
							value='ES'
							name='informacoesAdicionais.estadosQuePossuiClientes'
							onChange={validate}
							checked={estadoChecked[8].isChecked}
						/>
						<label>ES</label>
						<input
							type='checkbox'
							value='GO'
							name='informacoesAdicionais.estadosQuePossuiClientes'
							onChange={validate}
							checked={estadoChecked[9].isChecked}
						/>
						<label>GO</label>
						<input
							type='checkbox'
							value='MA'
							name='informacoesAdicionais.estadosQuePossuiClientes'
							onChange={validate}
							checked={estadoChecked[10].isChecked}
						/>
						<label>MA</label>
						<input
							type='checkbox'
							value='MG'
							name='informacoesAdicionais.estadosQuePossuiClientes'
							onChange={validate}
							checked={estadoChecked[11].isChecked}
						/>
						<label>MG</label>
					</span>
					<span className='input'>
						<input
							type='checkbox'
							value='MS'
							name='informacoesAdicionais.estadosQuePossuiClientes'
							onChange={validate}
							checked={estadoChecked[12].isChecked}
						/>
						<label>MS</label>
						<input
							type='checkbox'
							value='MT'
							name='informacoesAdicionais.estadosQuePossuiClientes'
							onChange={validate}
							checked={estadoChecked[13].isChecked}
						/>
						<label>MT</label>
						<input
							type='checkbox'
							value='PA'
							name='informacoesAdicionais.estadosQuePossuiClientes'
							onChange={validate}
							checked={estadoChecked[14].isChecked}
						/>
						<label>PA</label>
						<input
							type='checkbox'
							value='PB'
							name='informacoesAdicionais.estadosQuePossuiClientes'
							onChange={validate}
							checked={estadoChecked[15].isChecked}
						/>
						<label>PB</label>
					</span>
					<span className='input'>
						<input
							type='checkbox'
							value='PE'
							name='informacoesAdicionais.estadosQuePossuiClientes'
							onChange={validate}
							checked={estadoChecked[16].isChecked}
						/>
						<label>PE</label>
						<input
							type='checkbox'
							value='PI'
							name='informacoesAdicionais.estadosQuePossuiClientes'
							onChange={validate}
							checked={estadoChecked[17].isChecked}
						/>
						<label>PI</label>
						<input
							type='checkbox'
							value='PR'
							name='informacoesAdicionais.estadosQuePossuiClientes'
							onChange={validate}
							checked={estadoChecked[18].isChecked}
						/>
						<label>PR</label>
						<input
							type='checkbox'
							value='RJ'
							name='informacoesAdicionais.estadosQuePossuiClientes'
							onChange={validate}
							checked={estadoChecked[19].isChecked}
						/>
						<label>RJ</label>
					</span>
					<span className='input'>
						<input
							type='checkbox'
							value='RN'
							name='informacoesAdicionais.estadosQuePossuiClientes'
							onChange={validate}
							checked={estadoChecked[20].isChecked}
						/>
						<label>RN</label>
						<input
							type='checkbox'
							value='RO'
							name='informacoesAdicionais.estadosQuePossuiClientes'
							onChange={validate}
							checked={estadoChecked[21].isChecked}
						/>
						<label>RO</label>
						<input
							type='checkbox'
							value='RR'
							name='informacoesAdicionais.estadosQuePossuiClientes'
							onChange={validate}
							checked={estadoChecked[22].isChecked}
						/>
						<label>RR</label>
						<input
							type='checkbox'
							value='RS'
							name='informacoesAdicionais.estadosQuePossuiClientes'
							onChange={validate}
							checked={estadoChecked[23].isChecked}
						/>
						<label>RS</label>
					</span>
					<span className='input'>
						<input
							type='checkbox'
							value='SC'
							name='informacoesAdicionais.estadosQuePossuiClientes'
							onChange={validate}
							checked={estadoChecked[24].isChecked}
						/>
						<label>SC</label>
						<input
							type='checkbox'
							value='SE'
							name='informacoesAdicionais.estadosQuePossuiClientes'
							onChange={validate}
							checked={estadoChecked[25].isChecked}
						/>
						<label>SE</label>
						<input
							type='checkbox'
							value='SP'
							name='informacoesAdicionais.estadosQuePossuiClientes'
							onChange={validate}
							checked={estadoChecked[26].isChecked}
						/>
						<label>SP</label>
						<input
							type='checkbox'
							value='TO'
							name='informacoesAdicionais.estadosQuePossuiClientes'
							onChange={validate}
							checked={estadoChecked[27].isChecked}
						/>
						<label>TO</label>
					</span>
				</div>
			</div>
			<span
				className='error'
				id='error.informacoesAdicionais.estadosQuePossuiClientes'
				hidden={true}
			>
				Escolha pelo menos um estado!
			</span>
			<div>
				<span className='label vertical4'>
					<p>Formas comercialização ERP *</p>
				</span>
				<div className='boxes'>
					<span className='input'>
						<input
							type='checkbox'
							value='Locação'
							name='informacoesAdicionais.formaComercializacaoErp'
							onChange={validate}
							checked={formaChecked[0].isChecked}
						/>
						<label>Locação</label>
						<input
							type='checkbox'
							value='Venda'
							name='informacoesAdicionais.formaComercializacaoErp'
							onChange={validate}
							checked={formaChecked[1].isChecked}
						/>
						<label>Venda</label>
						<input
							type='checkbox'
							value='Uso interno'
							name='informacoesAdicionais.formaComercializacaoErp'
							onChange={validate}
							checked={formaChecked[2].isChecked}
						/>
						<label>Uso interno</label>
						<input
							type='checkbox'
							value='Outro'
							name='informacoesAdicionais.formaComercializacaoErp'
							onChange={validate}
							checked={formaChecked[3].isChecked}
						/>
						<label>Outro</label>
					</span>
					<span className='input'>
						<input
							type='checkbox'
							value='Nenhuma'
							name='informacoesAdicionais.formaComercializacaoErp'
							onChange={e => handleFormas(e)}
							checked={formaChecked[4].isChecked}
						/>
						<label>Nenhuma</label>
					</span>
					<span className='input'>
						<input
							className='size1'
							type='text'
							id='outrasFormasInput'
							placeholder='Outros'
							onChange={(e) => handleOutrasFormas(e)}
							disabled={disabledFormasInput}
						/>
					</span>
				</div>
			</div>
			<span
				className='error'
				id='error.informacoesAdicionais.formaComercializacaoErp'
				hidden={true}
			>
				Escolha pelo menos uma forma!
			</span>
			<div>
				<span className='label'>
					<p>Principais clientes</p>
				</span>
				<span className='input'>
					<input
						className='size1'
						id='clientesInput'
						type='text'
						onChange={(e) => handlePrincipaisClientes(e)}
					/>
				</span>
			</div>
			<div>
				<span className='label'>
					<p>Quantidade de clientes *</p>
				</span>
				<span className='input'>
					<input
						className='size4'
						type='number'
						name='informacoesAdicionais.quantidadeDeClientes'
						value={formData.informacoesAdicionais.quantidadeDeClientes}
						onChange={setForm}
						required
					/>
				</span>
			</div>
			<div>
				<span className='label'>
					<p>Número de funcionários</p>
				</span>
				<span className='input'>
					<input
						className='size4'
						type='number'
						name='informacoesAdicionais.numeroDeFuncionarios'
						value={formData.informacoesAdicionais.numeroDeFuncionarios}
						onChange={setForm}
					/>
				</span>
			</div>
			<div className='buttons'>
				<button onClick={() => navigation.previous()}>Voltar</button>
				<button type='submit'>Próxima</button>
			</div>
		</Form>
	);
};
