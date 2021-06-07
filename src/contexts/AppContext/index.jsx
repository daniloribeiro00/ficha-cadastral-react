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
		initialStep: 0,
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
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
