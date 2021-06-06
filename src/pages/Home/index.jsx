import { Container, Content } from './styles';

import { MultiStepForm } from '../../components/MultiStepForm'

export const Home = () => {
    // const [companies, setCompanies] = useState(() => {
    //     const storagedCompanies = localStorage.getItem(
    //         '@companies'
    //     )
    //     if (storagedCompanies) {
    //         return JSON.parse(storagedCompanies);
    //     }
    //     return [{
    //         dadosDaOrganizacao: {
    //             pessoa: '',
    //             razaoSocial: '',
    //             nomeFantasia: '',
    //             cnpj: '',
    //             inscricaoEstadual: '',
    //             telefone: '',
    //             tipoEmpresa: '',
    //             address: {
    //                 cep: '',
    //                 endereco: '',
    //                 numero: '',
    //                 complemento: '',
    //                 bairro: '',
    //                 estado: '',
    //                 cidade: '',
    //             }
    //         },
    //         informacoesAdicionais: {

    //         },
    //         dadosRepresentanteLegal: {

    //         },
    //         dadosAdministrador: {

    //         },
    //         dadosNFeBoleto: {

    //         }
    //     }];
    // });
  
    // useEffect(() => {
    //   localStorage.setItem(
    //       '@companies',
    //       JSON.stringify(companies)
    //   )
    // }, [companies]);

    // async function handleAddCompany(e) {
    //     e.preventDefault();

    //     const data = e.target;
        
    //     const companiesObj = {
    //         dadosDaOrganizacao: {
    //             pessoa: data.pessoa.value,
    //             razaoSocial: data.razaoSocial.value,
    //             nomeFantasia: data.nomeFantasia.value,
    //             cnpj: data.cnpj.value,
    //             inscricaoEstadual: data.inscricaoEstadual.value,
    //             telefone: data.telefone.value,
    //             tipoEmpresa: data.tipoEmpresa.value,
    //             address: {
    //                 cep: data.cep.value,
    //                 endereco: data.endereco.value,
    //                 numero: data.numero.value,
    //                 complemento: data.complemento.value,
    //                 bairro: data.bairro.value,
    //                 estado: data.estado.value,
    //                 cidade: data.cidade.value,
    //             }
    //         }
            
    //     }; 

    //     setCompanies([...companies, companiesObj]);
    // }

    return (
        <Container>
            <h1>Ficha cadastral</h1>
            <Content>
                <div className="progress">
                    <p>0%</p>
                </div>
                <div className="steps">
                    <div>
                        <img src="/icons/menu.png" alt="Dados da organização" />
                        <span>Dados da organização</span> 
                    </div>
                    <div>
                        <img src="/icons/company.png" alt="Informações adicionais da organização" />
                        <span>Informações adicionais da organização</span>
                    </div>
                    <div>
                        <img src="/icons/user.png" alt="Dados do representante legal" />
                        <span>Dados do representante legal</span>
                    </div>
                    <div>
                        <img src="/icons/monitor.png" alt="Dados do administrador e do responsável técnico" />
                        <span>Dados do administrador e do responsável técnico</span>
                    </div>
                    <div>
                        <img src="/icons/money.png" alt="Dados para envio da nota fiscal e boleto" />
                        <span>Dados para envio da nota fiscal e boleto</span>
                    </div>
                </div>
                <MultiStepForm />
            </Content>
        </Container>
    )
}