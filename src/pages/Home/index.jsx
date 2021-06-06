import { useEffect, useState } from 'react';
import { Container, Content, Form } from './styles';

import checkCep from 'cep-promise';

export const Home = () => {
    const [disabledSelect, setDisableSelect] = useState(true);
    const [disabledInput, setDisableInput] = useState(false);
    const [uf, setUf] = useState('AC');
    const [listUf, setListUf] = useState([]);
    const [city, setCity] = useState('');
    const [listCity, setListCity] = useState([]);
    const [cep, setCep] = useState({
        cep:  '',
        state:  '',
        city:  '',
        street:  '',
        neighborhood:  '',
    });
    const [companies, setCompanies] = useState(() => {
        const storagedCompanies = localStorage.getItem(
            '@companies'
        )
        if (storagedCompanies) {
            return JSON.parse(storagedCompanies);
        }
        return [{
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
                }
            },
            informacoesAdicionais: {

            },
            dadosRepresentanteLegal: {

            },
            dadosAdministrador: {

            },
            dadosNFeBoleto: {

            }
        }];
    });
  
    useEffect(() => {
      localStorage.setItem(
          '@companies',
          JSON.stringify(companies)
      )
    }, [companies]);

    useEffect(() => {
        loadUf();
    }, []);
  
    useEffect(() => {
        if (uf) {
            loadCity(uf);
            setDisableSelect(false);
        } else {
            setDisableSelect(true);
        }
    }, [uf]);

    const loadUf = async () => {
        await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
          .then(response => response.json())
          .then(data => {        
            data.sort((a, b) => a.nome.localeCompare(b.nome));
            setListUf([{}, ...data]);
           });   
    }

    const loadCity = async (id) => {
        await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}/municipios`)
          .then(response => response.json())
          .then(data => {        
            data.sort((a,b) => a.nome.localeCompare(b.nome));
            setListCity([{}, ...data]);
           });
    }

    const handleChangeCep = (e) => {
        const { value } = e.target;

        const typedCep = value?.replace(/[^0-9]/g, '');

        if (typedCep?.length !== 8) {
            return;
        }

        checkCep(typedCep)
            .then((r) => setCep(r))
    }

    useEffect(() => {
        document.getElementById('inputEndereco').value = cep.street;
        document.getElementById('inputBairro').value = cep.neighborhood;
    }, [cep]) 

    useEffect(() => {
        setUf(cep.state);
    }, [cep])

    useEffect(() => {
        setCity(cep.city);
    }, [cep])

    const handleInscricaoEstadual = () => {
        setDisableInput(!disabledInput);
        if (document.getElementById('inputIe').value === 'Isento') {
            document.getElementById('inputIe').value = '';
        } else {
            document.getElementById('inputIe').value = 'Isento';  
        }
    }

    async function handleAddCompany(e) {
        e.preventDefault();

        const data = e.target;
        
        const companiesObj = {
            dadosDaOrganizacao: {
                pessoa: data.pessoa.value,
                razaoSocial: data.razaoSocial.value,
                nomeFantasia: data.nomeFantasia.value,
                cnpj: data.cnpj.value,
                inscricaoEstadual: data.inscricaoEstadual.value,
                telefone: data.telefone.value,
                tipoEmpresa: data.tipoEmpresa.value,
                address: {
                    cep: data.cep.value,
                    endereco: data.endereco.value,
                    numero: data.numero.value,
                    complemento: data.complemento.value,
                    bairro: data.bairro.value,
                    estado: data.estado.value,
                    cidade: data.cidade.value,
                }
            }
            
        }; 

        setCompanies([...companies, companiesObj]);
    }

    console.log(companies);

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
                <Form onSubmit={handleAddCompany}>
                    <div>
                        <span className='label'>
                            <p>Pessoa</p>
                        </span>
                        <span className='input'>
                            <input type="radio" name="pessoa" defaultValue='Jurídica' defaultChecked />
                            <label htmlFor="Jurídica">Jurídica</label>
                        </span>
                    </div>
                    <div>
                        <span className='label'>
                            <p>Razão social *</p>
                        </span>
                        <span className='input'>
                            <input className='size1' type="text" name="razaoSocial" />
                        </span>
                    </div>
                    <div>
                        <span className='label'>
                            <p>Nome fantasia *</p>
                        </span>
                        <span className='input'>
                            <input className='size1' type="text" name="nomeFantasia" />
                        </span>
                    </div>
                    <div>
                        <span className='label'>
                            <p>CNPJ *</p>
                        </span>
                        <span className='input'>
                            <input className='size2' type="text" name="cnpj" />
                        </span>
                    </div>
                    <div>
                        <span className='label vertical'>
                            <p>Inscrição Estadual *</p>
                        </span>
                        <span>
                            <span className='input'>
                                <input className='size2' id='inputIe' type="text" name="inscricaoEstadual" disabled={disabledInput} />
                            </span>
                            <span className='input'>
                                <input type="checkbox" onChange={handleInscricaoEstadual}/>
                                <label>Isento</label>
                            </span>
                        </span>
                    </div>
                    <div>
                        <span className='label'>
                            <p>Telefone *</p>
                        </span>
                        <span className='input'>
                            <input className='size2' type="text" name="telefone" />
                        </span>
                    </div>
                    <div>
                        <span className='label vertical2'>
                            <p>Tipo empresa</p>
                        </span>
                        <span>
                            <span className='input'>
                                <input type="radio" name="tipoEmpresa" defaultValue='Empresa de software' defaultChecked />
                                <label htmlFor="Empresa de software">Empresa de software</label>
                            </span>
                            <span className='input'>
                                <input type="radio" name="tipoEmpresa" defaultValue='Integrador / representante de software' />
                                <label htmlFor="Integrador / representante de software">Integrador / representante de software</label>
                            </span>
                            <span className='input'>
                                <input type="radio" name="tipoEmpresa" defaultValue='Empresa de outro ramo' />
                                <label htmlFor="Empresa de outro ramo">Empresa de outro ramo</label>
                            </span>
                        </span>
                    </div>
                    <div>
                        <span className='label'>
                            <p>CEP *</p>
                        </span>
                        <span className='input'>
                            <input className='size2' type="text" name="cep" onBlur={handleChangeCep} />
                        </span>
                    </div>
                    <div>
                        <span className='label'>
                            <p>Endereço *</p>
                        </span>
                        <span className='input'>
                            <input className='size3' id='inputEndereco' type="text" name="endereco" defaultValue={cep.street}/>
                        </span>
                    </div>
                    <div>
                        <span className='label'>
                            <p>Número *</p>
                        </span>
                        <span className='input'>
                            <input className='size4' type="text" name="numero" />
                        </span>
                    </div>
                    <div>
                        <span className='label'>
                            <p>Complemento</p>
                        </span>
                        <span className='input'>
                            <input className='size3' type="text" name="complemento" />
                        </span>
                    </div>
                    <div>
                        <span className='label'>
                            <p>Bairro *</p>
                        </span>
                        <span className='input'>
                            <input className='size3' id='inputBairro' type="text" name="bairro" defaultValue={cep.neighborhood}/>
                        </span>
                    </div>
                    <div>
                        <span className='label'>
                            <p>Estado *</p>
                        </span>
                        <span className='input'>
                            <select className='size4' name="estado" value={uf} onChange={e => setUf(e.target.value)}>
                                {listUf.map((a, index) => ( 
                                    <option key={index} value={a.sigla}>{a.sigla}</option>
                                ))}
                            </select>
                        </span>
                    </div>
                    <div>
                        <span className='label'>
                            <p>Cidade *</p>
                        </span>
                        <span className='input'>
                            <select className='size3' name="cidade" value={city} onChange={e => setCity(e.target.value)} disabled={disabledSelect}>
                                {(uf !== '') &&
                                    listCity.map((a, index) => ( 
                                        <option key={index} value={a.nome}>{a.nome}</option>
                                    )
                                )}
                            </select>
                        </span>
                    </div>
                    <div className='submit'>
                        <button type="submit">Próxima</button>
                    </div>
                </Form>
            </Content>
        </Container>
    )
}