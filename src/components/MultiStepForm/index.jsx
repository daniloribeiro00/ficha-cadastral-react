/* eslint-disable default-case */

import { useForm, useStep } from 'react-hooks-helper';

import { Step1 } from '../Steps/Step1';
import { Step2 } from '../Steps/Step2';
import { Step3 } from '../Steps/Step3';
import { Step4 } from '../Steps/Step4';
import { Step5 } from '../Steps/Step5';
import { Step6 } from '../Steps/Step6';

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
];

export const MultiStepForm = () => {
	const [formData, setForm] = useForm(defaultData);
	const { step, navigation } = useStep({
		steps,
		initialStep: 0,
	});

	const props = { formData, setForm, navigation };

	switch (step.id) {
		case 'step1':
			return <Step1 {...props} />;
		case 'step2':
			return <Step2 {...props} />;
		case 'step3':
			return <Step3 {...props} />;
		case 'step4':
			return <Step4 {...props} />;
		case 'step5':
			return <Step5 {...props} />;
		case 'step6':
			return <Step6 {...props} />;
	}
};
