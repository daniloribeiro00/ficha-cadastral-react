import { createContext, useEffect, useState } from 'react';

import { useForm, useStep } from 'react-hooks-helper';

export const GlobalContext = createContext();

const defaultData = {
	dadosDaOrganizacao: {
		pessoa: '',
		razaoSocial: '',
		nomeFantasia: '',
		cnpj: '',
		inscricaoEstadual: '',
		telefone: '',
		tipoEmpresa: '',
		address: {
			cep: '',
			endereco: '',
			numero: '',
			complemento: '',
			bairro: '',
			estado: '',
			cidade: '',
		},
	},
	informacoesAdicionais: {
		linguagensDeProgramacao: [],
		outrasLinguagens: [],
		ramoDeAtividade: [],
		estadosQuePossuiClientes: [],
		formaComercializacaoErp: [],
		outrasFormas: [],
		principaisClientes: '',
		quantidadeDeClientes: '',
		numeroDeFuncionarios: '',
	},
	dadosRepresentanteLegal: {
		nomeCompleto: '',
		cpf: '',
		email: '',
		dataNascimento: '',
		telefone: '',
	},
	dadosAdministrador: {
		administrador: {
			nomeCompleto: '',
			email: '',
			senha: '',
			telefone: '',
		},
		tecnico: {
			nomeCompleto: '',
			email: '',
			senha: '',
			telefone: '',
		},
	},
	dadosNFeBoleto: {
		diaVencimento: '',
		responsavelFinanceiro: {
			nomeCompleto: '',
			email: '',
			senha: '',
			telefone: '',
		},
	},
};

const steps = [
	{ id: 'step1' },
	{ id: 'step2' },
	{ id: 'step3' },
	{ id: 'step4' },
	{ id: 'step5' },
	{ id: 'step6' },
	{ id: 'step7' },
];

export const AppContext = ({ children }) => {
	const [formData, setForm] = useForm(defaultData);
	const { step, navigation } = useStep({
		steps,
		initialStep: 3,
	});

	const [companies, setCompanies] = useState(() => {
		const storagedCompanies = localStorage.getItem('@companies');
		if (storagedCompanies) {
			return JSON.parse(storagedCompanies);
		}
		return [];
	});

	useEffect(() => {
		localStorage.setItem('@companies', JSON.stringify(companies));
	}, [companies]);

	const [errors, setErrors] = useState({
		dadosDaOrganizacao: {
			razaoSocial: false,
			nomeFantasia: false,
			cnpj: false,
			inscricaoEstadual: false,
			telefone: false,
			tipoEmpresa: false,
			address: {
				cep: false,
				endereco: false,
				numero: false,
				bairro: false,
			},
		},
		informacoesAdicionais: {
			linguagensDeProgramacao: false,
			ramoDeAtividade: false,
			estadosQuePossuiClientes: false,
			formaComercializacaoErp: false,
			quantidadeDeClientes: false,
		},
		dadosRepresentanteLegal: {
			nomeCompleto: false,
			cpf: false,
			email: false,
			dataNascimento: false,
			telefone: false,
		},
		dadosAdministrador: {
			administrador: {
				nomeCompleto: false,
				email: false,
				senha: false,
				telefone: false,
			},
			tecnico: {
				nomeCompleto: false,
				email: false,
				senha: false,
				telefone: false,
			},
		},
		dadosNFeBoleto: {
			diaVencimento: false,
			responsavelFinanceiro: {
				nomeCompleto: false,
				email: false,
				senha: false,
				telefone: false,
			},
		},
	});

	// Step 1
	const [disabledSelectCidade, setDisabledSelectCidade] = useState(true);
	const [disabledInputInscricaoEstadual, setDisabledInputInscricaoEstadual] =
		useState(false);
	const [listUf, setListUf] = useState([]);
	const [listCity, setListCity] = useState([]);
	const [cep, setCep] = useState({
		cep: '',
		state: '',
		city: '',
		street: '',
		neighborhood: '',
	});

	const loadUf = () => {
		fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
			.then((response) => response.json())
			.then((data) => {
				data.sort((a, b) => a.nome.localeCompare(b.nome));
				setListUf([{}, ...data]);
			});
	};

	useEffect(() => {
		loadUf();
	}, []);

	const loadCity = async (id) => {
		await fetch(
			`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}/municipios`
		)
			.then((response) => response.json())
			.then((data) => {
				data.sort((a, b) => a.nome.localeCompare(b.nome));
				setListCity([{}, ...data]);
			});
	};

	useEffect(() => {
		if (formData.dadosDaOrganizacao.address.estado) {
			loadCity(formData.dadosDaOrganizacao.address.estado);
			setDisabledSelectCidade(false);
		} else {
			setDisabledSelectCidade(true);
		}
	}, [formData.dadosDaOrganizacao.address.estado]);

	// Step 2
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
	]);

	// Step 4
	const [disabledTecnicoInput, setDisabledTecnicoInput] = useState(false);

	// Step 5
	const [disabledFinanceiroInput, setDisabledFinanceiroInput] = useState(false);

	return (
		<GlobalContext.Provider
			value={{
				companies,
				setCompanies,
				formData,
				setForm,
				step,
				navigation,
				disabledSelectCidade,
				setDisabledSelectCidade,
				disabledInputInscricaoEstadual,
				setDisabledInputInscricaoEstadual,
				listUf,
				setListUf,
				listCity,
				setListCity,
				cep,
				setCep,
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
				disabledTecnicoInput,
				setDisabledTecnicoInput,
				disabledFinanceiroInput,
				setDisabledFinanceiroInput,
				errors,
				setErrors,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
