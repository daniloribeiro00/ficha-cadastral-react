import React, { useState } from 'react';


import { Form } from './styles';

export const Step2 = ({ formData, setForm, navigation }) => {
	const [disabledLanguageInput, setDisabledLanguageInput] = useState(true);
	const [disabledFormasInput, setDisabledFormasInput] = useState(true);
	const [languageChecked, setLanguageChecked] = useState([
		{
			value: 'Delphi',
			isChecked: false,
		},
		{
			value: 'Visual Basic',
			isChecked: false,
		},
		{
			value: 'C#',
			isChecked: false,
		},
		{
			value: 'PHP',
			isChecked: false,
		},
		{
			value: 'Java',
			isChecked: false,
		},
		{
			value: 'Outras',
			isChecked: false,
		},
		{
			value: 'Nenhuma',
			isChecked: false,
		},
	]);
	const [ramoChecked, setRamoChecked] = useState([
		{
			value: 'Varejo',
			isChecked: false,
		},
		{
			value: 'Indústria',
			isChecked: false,
		},
		{
			value: 'Comércio',
			isChecked: false,
		},
		{
			value: 'Transporte',
			isChecked: false,
		},
		{
			value: 'Serviço',
			isChecked: false,
		},
	]);
	const [estadoChecked, setEstadoChecked] = useState([
		{
			value: 'Todos',
			isChecked: false,
		},
		{
			value: 'AC',
			isChecked: false,
		},
		{
			value: 'AL',
			isChecked: false,
		},
		{
			value: 'AM',
			isChecked: false,
		},
		{
			value: 'AP',
			isChecked: false,
		},
		{
			value: 'BA',
			isChecked: false,
		},
		{
			value: 'CE',
			isChecked: false,
		},
		{
			value: 'DF',
			isChecked: false,
		},
		{
			value: 'ES',
			isChecked: false,
		},
		{
			value: 'GO',
			isChecked: false,
		},
		{
			value: 'MA',
			isChecked: false,
		},
		{
			value: 'MG',
			isChecked: false,
		},
		{
			value: 'MS',
			isChecked: false,
		},
		{
			value: 'MT',
			isChecked: false,
		},
		{
			value: 'PA',
			isChecked: false,
		},
		{
			value: 'PB',
			isChecked: false,
		},
		{
			value: 'PE',
			isChecked: false,
		},
		{
			value: 'PI',
			isChecked: false,
		},
		{
			value: 'PR',
			isChecked: false,
		},
		{
			value: 'RJ',
			isChecked: false,
		},
		{
			value: 'RN',
			isChecked: false,
		},
		{
			value: 'RO',
			isChecked: false,
		},
		{
			value: 'RR',
			isChecked: false,
		},
		{
			value: 'RS',
			isChecked: false,
		},
		{
			value: 'SC',
			isChecked: false,
		},
		{
			value: 'SE',
			isChecked: false,
		},
		{
			value: 'SP',
			isChecked: false,
		},
		{
			value: 'TO',
			isChecked: false,
		},
	]);
    const [formaChecked, setFormaChecked] = useState([
        {
			value: 'Locação',
			isChecked: false,
		},
		{
			value: 'Venda',
			isChecked: false,
		},
		{
			value: 'Uso interno',
			isChecked: false,
		},
		{
			value: 'Outro',
			isChecked: false,
		},
		{
			value: 'Nenhuma',
			isChecked: false,
		},
    ])

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
            if (formData.informacoesAdicionais.estadosQuePossuiClientes.length === 27 )  {
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
		const indexNenhuma = formaChecked.findIndex(
			(e) => e.value === 'Nenhuma'
		);
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
    }

	return (
		<Form>
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
							onChange={(e) => handleLinguagens(e)}
							checked={languageChecked[0].isChecked}
						/>
						<label>Delphi</label>
						<input
							type='checkbox'
							value='Visual Basic'
							onChange={(e) => handleLinguagens(e)}
							checked={languageChecked[1].isChecked}
						/>
						<label>Visual Basic</label>
						<input
							type='checkbox'
							value='C#'
							onChange={(e) => handleLinguagens(e)}
							checked={languageChecked[2].isChecked}
						/>
						<label>C#</label>
						<input
							type='checkbox'
							value='PHP'
							onChange={(e) => handleLinguagens(e)}
							checked={languageChecked[3].isChecked}
						/>
						<label>PHP</label>
					</span>
					<span className='input'>
						<input
							type='checkbox'
							value='Java'
							onChange={(e) => handleLinguagens(e)}
							checked={languageChecked[4].isChecked}
						/>
						<label>Java</label>
						<input
							type='checkbox'
							value='Outras'
							onChange={(e) => handleLinguagens(e)}
							checked={languageChecked[5].isChecked}
						/>
						<label>Outras</label>
						<input
							type='checkbox'
							value='Nenhuma'
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
			<div>
				<span className='label vertical2'>
					<p>Ramo de atividade *</p>
				</span>
				<div className='boxes'>
					<span className='input'>
						<input
							type='checkbox'
							value='Varejo'
							onChange={(e) => handleRamoDeAtividade(e)}
							checked={ramoChecked[0].isChecked}
						/>
						<label>Varejo</label>
						<input
							type='checkbox'
							value='Indústria'
							onChange={(e) => handleRamoDeAtividade(e)}
							checked={ramoChecked[1].isChecked}
						/>
						<label>Indústria</label>
						<input
							type='checkbox'
							value='Comércio'
							onChange={(e) => handleRamoDeAtividade(e)}
							checked={ramoChecked[2].isChecked}
						/>
						<label>Comércio</label>
						<input
							type='checkbox'
							value='Transporte'
							onChange={(e) => handleRamoDeAtividade(e)}
							checked={ramoChecked[3].isChecked}
						/>
						<label>Transporte</label>
					</span>
					<span className='input'>
						<input
							type='checkbox'
							value='Serviço'
							onChange={(e) => handleRamoDeAtividade(e)}
							checked={ramoChecked[4].isChecked}
						/>
						<label>Serviço</label>
					</span>
				</div>
			</div>
			<div>
				<span className='label vertical3'>
					<p>Estados onde possui clientes *</p>
				</span>
				<div className='boxes'>
					<span className='input'>
						<input
							type='checkbox'
							value='Todos'
							onChange={(e) => handleEstados(e)}
							checked={estadoChecked[0].isChecked}
						/>
						<label>Todos</label>
						<input
							type='checkbox'
							value='AC'
							onChange={(e) => handleEstados(e)}
							checked={estadoChecked[1].isChecked}
						/>
						<label>AC</label>
						<input
							type='checkbox'
							value='AL'
							onChange={(e) => handleEstados(e)}
							checked={estadoChecked[2].isChecked}
						/>
						<label>AL</label>
						<input
							type='checkbox'
							value='AM'
							onChange={(e) => handleEstados(e)}
							checked={estadoChecked[3].isChecked}
						/>
						<label>AM</label>
					</span>
					<span className='input'>
						<input
							type='checkbox'
							value='AP'
							onChange={(e) => handleEstados(e)}
							checked={estadoChecked[4].isChecked}
						/>
						<label>AP</label>
						<input
							type='checkbox'
							value='BA'
							onChange={(e) => handleEstados(e)}
							checked={estadoChecked[5].isChecked}
						/>
						<label>BA</label>
						<input
							type='checkbox'
							value='CE'
							onChange={(e) => handleEstados(e)}
							checked={estadoChecked[6].isChecked}
						/>
						<label>CE</label>
						<input
							type='checkbox'
							value='DF'
							onChange={(e) => handleEstados(e)}
							checked={estadoChecked[7].isChecked}
						/>
						<label>DF</label>
					</span>
					<span className='input'>
						<input
							type='checkbox'
							value='ES'
							onChange={(e) => handleEstados(e)}
							checked={estadoChecked[8].isChecked}
						/>
						<label>ES</label>
						<input
							type='checkbox'
							value='GO'
							onChange={(e) => handleEstados(e)}
							checked={estadoChecked[9].isChecked}
						/>
						<label>GO</label>
						<input
							type='checkbox'
							value='MA'
							onChange={(e) => handleEstados(e)}
							checked={estadoChecked[10].isChecked}
						/>
						<label>MA</label>
						<input
							type='checkbox'
							value='MG'
							onChange={(e) => handleEstados(e)}
							checked={estadoChecked[11].isChecked}
						/>
						<label>MG</label>
					</span>
					<span className='input'>
						<input
							type='checkbox'
							value='MS'
							onChange={(e) => handleEstados(e)}
							checked={estadoChecked[12].isChecked}
						/>
						<label>MS</label>
						<input
							type='checkbox'
							value='MT'
							onChange={(e) => handleEstados(e)}
							checked={estadoChecked[13].isChecked}
						/>
						<label>MT</label>
						<input
							type='checkbox'
							value='PA'
							onChange={(e) => handleEstados(e)}
							checked={estadoChecked[14].isChecked}
						/>
						<label>PA</label>
						<input
							type='checkbox'
							value='PB'
							onChange={(e) => handleEstados(e)}
							checked={estadoChecked[15].isChecked}
						/>
						<label>PB</label>
					</span>
					<span className='input'>
						<input
							type='checkbox'
							value='PE'
							onChange={(e) => handleEstados(e)}
							checked={estadoChecked[16].isChecked}
						/>
						<label>PE</label>
						<input
							type='checkbox'
							value='PI'
							onChange={(e) => handleEstados(e)}
							checked={estadoChecked[17].isChecked}
						/>
						<label>PI</label>
						<input
							type='checkbox'
							value='PR'
							onChange={(e) => handleEstados(e)}
							checked={estadoChecked[18].isChecked}
						/>
						<label>PR</label>
						<input
							type='checkbox'
							value='RJ'
							onChange={(e) => handleEstados(e)}
							checked={estadoChecked[19].isChecked}
						/>
						<label>RJ</label>
					</span>
					<span className='input'>
						<input
							type='checkbox'
							value='RN'
							onChange={(e) => handleEstados(e)}
							checked={estadoChecked[20].isChecked}
						/>
						<label>RN</label>
						<input
							type='checkbox'
							value='RO'
							onChange={(e) => handleEstados(e)}
							checked={estadoChecked[21].isChecked}
						/>
						<label>RO</label>
						<input
							type='checkbox'
							value='RR'
							onChange={(e) => handleEstados(e)}
							checked={estadoChecked[22].isChecked}
						/>
						<label>RR</label>
						<input
							type='checkbox'
							value='RS'
							onChange={(e) => handleEstados(e)}
							checked={estadoChecked[23].isChecked}
						/>
						<label>RS</label>
					</span>
					<span className='input'>
						<input
							type='checkbox'
							value='SC'
							onChange={(e) => handleEstados(e)}
							checked={estadoChecked[24].isChecked}
						/>
						<label>SC</label>
						<input
							type='checkbox'
							value='SE'
							onChange={(e) => handleEstados(e)}
							checked={estadoChecked[25].isChecked}
						/>
						<label>SE</label>
						<input
							type='checkbox'
							value='SP'
							onChange={(e) => handleEstados(e)}
							checked={estadoChecked[26].isChecked}
						/>
						<label>SP</label>
						<input
							type='checkbox'
							value='TO'
							onChange={(e) => handleEstados(e)}
							checked={estadoChecked[27].isChecked}
						/>
						<label>TO</label>
					</span>
				</div>
			</div>
			<div>
				<span className='label vertical4'>
					<p>Formas comercialização ERP *</p>
				</span>
				<div className='boxes'>
					<span className='input'>
						<input
							type='checkbox'
							value='Locação'
							onChange={(e) => handleFormas(e)}
							checked={formaChecked[0].isChecked}
						/>
						<label>Locação</label>
						<input
							type='checkbox'
							value='Venda'
							onChange={(e) => handleFormas(e)}
							checked={formaChecked[1].isChecked}
						/>
						<label>Venda</label>
						<input
							type='checkbox'
							value='Uso interno'
							onChange={(e) => handleFormas(e)}
							checked={formaChecked[2].isChecked}
						/>
						<label>Uso interno</label>
						<input
							type='checkbox'
							value='Outro'
							onChange={(e) => handleFormas(e)}
							checked={formaChecked[3].isChecked}
						/>
						<label>Outro</label>
					</span>
					<span className='input'>
						<input
							type='checkbox'
							value='Nenhuma'
							onChange={(e) => handleFormas(e)}
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
			<div>
				<span className='label'>
					<p>Principais clientes</p>
				</span>
				<span className='input'>
					<input
						className='size1'
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
				<button onClick={() => navigation.next()}>Próxima</button>
			</div>
		</Form>
	);
};
