import React from 'react';

import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

import { Form } from './styles';

export const Step6 = ({ formData, setForm, navigation }) => {
	return (
		<Form>
			<h1>Confirme seus dados.</h1>
			<div className='data'>
				<div className='info'>
					<h2>Dados da organização.</h2>
					<div>
						<span className='label'>
							<p>Pessoa</p>
						</span>
						<span className='value'>
							<p>{formData.dadosDaOrganizacao.pessoa}</p>
						</span>
					</div>
					<div>
						<span className='label'>
							<p>Razão Social</p>
						</span>
						<span className='value'>
							<p>{formData.dadosDaOrganizacao.razaoSocial}</p>
						</span>
					</div>
					<div>
						<span className='label'>
							<p>Nome fantasia</p>
						</span>
						<span className='value'>
							<p>{formData.dadosDaOrganizacao.nomeFantasia}</p>
						</span>
					</div>
					<div>
						<span className='label'>
							<p>CNPJ</p>
						</span>
						<span className='value'>
							<p>{formData.dadosDaOrganizacao.cnpj}</p>
						</span>
					</div>
					<div>
						<span className='label'>
							<p>Inscrição Estadual</p>
						</span>
						<span className='value'>
							<p>{formData.dadosDaOrganizacao.inscricaoEstadual}</p>
						</span>
					</div>
					<div>
						<span className='label'>
							<p>Telefone</p>
						</span>
						<span className='value'>
							<p>{formData.dadosDaOrganizacao.telefone}</p>
						</span>
					</div>
					<div>
						<span className='label'>
							<p>Endereço</p>
						</span>
						<span className='value'>
							<p>{formData.dadosDaOrganizacao.address.endereco}</p>
						</span>
					</div>
					<div>
						<span className='label'>
							<p>Número</p>
						</span>
						<span className='value'>
							<p>{formData.dadosDaOrganizacao.address.numero}</p>
						</span>
					</div>
					<div>
						<span className='label'>
							<p>Complemento</p>
						</span>
						<span className='value'>
							<p>{formData.dadosDaOrganizacao.address.complemento}</p>
						</span>
					</div>
					<div>
						<span className='label'>
							<p>Bairro</p>
						</span>
						<span className='value'>
							<p>{formData.dadosDaOrganizacao.address.bairro}</p>
						</span>
					</div>
					<div>
						<span className='label'>
							<p>CEP</p>
						</span>
						<span className='value'>
							<p>{formData.dadosDaOrganizacao.address.cep}</p>
						</span>
					</div>
					<div>
						<span className='label'>
							<p>UF</p>
						</span>
						<span className='value'>
							<p>{formData.dadosDaOrganizacao.address.estado}</p>
						</span>
					</div>
					<div>
						<span className='label'>
							<p>Cidade</p>
						</span>
						<span className='value'>
							<p>{formData.dadosDaOrganizacao.address.cidade}</p>
						</span>
					</div>
				</div>
				<div className='info'>
					<h2>Dados adicionais da organização.</h2>
					<div className='wrap'>
						<span className='label'>
							<p>Linguagens</p>
						</span>
						<span className='value'>
							{formData.informacoesAdicionais.linguagensDeProgramacao.map(
								(e, i) => {
									if (
										i !==
										formData.informacoesAdicionais.linguagensDeProgramacao
											.length -
											1
									) {
										e = e.padEnd(e.length + 1, ', ');
									}
									return <p key={i}>{e}&nbsp;</p>;
								}
							)}
						</span>
					</div>
					{formData.informacoesAdicionais.outrasLinguagens.length > 0 && (
						<div className='wrap'>
							<span className='label'>
								<p>Outras</p>
							</span>
							<span className='value'>
								{formData.informacoesAdicionais.outrasLinguagens.map((e, i) => {
									if (
										i !==
										formData.informacoesAdicionais.outrasLinguagens.length - 1
									) {
										e = e.padEnd(e.length + 1, ', ');
									}
									return <p key={i}>{e}&nbsp;</p>;
								})}
							</span>
						</div>
					)}
					<div className='wrap'>
						<span className='label'>
							<p>Ramo de atividade</p>
						</span>
						<span className='value'>
							{formData.informacoesAdicionais.ramoDeAtividade.map((e, i) => {
								if (
									i !==
									formData.informacoesAdicionais.ramoDeAtividade.length - 1
								) {
									e = e.padEnd(e.length + 1, ', ');
								}
								return <p key={i}>{e}&nbsp;</p>;
							})}
						</span>
					</div>
					<div className='wrap'>
						<span className='label'>
							<p>Onde possui clientes</p>
						</span>
						<span className='value'>
							{formData.informacoesAdicionais.estadosQuePossuiClientes.map((e, i) => {
								if (
									i !==
									formData.informacoesAdicionais.estadosQuePossuiClientes.length - 1
								) {
									e = e.padEnd(e.length + 1, ', ');
								}
								return <p key={i}>{e}&nbsp;</p>;
							})}
						</span>
					</div>
					<div className='wrap'>
						<span className='label'>
							<p>Formas de comercial...</p>
						</span>
						<span className='value'>
						{formData.informacoesAdicionais.formaComercializacaoErp.map((e, i) => {
								if (
									i !==
									formData.informacoesAdicionais.formaComercializacaoErp.length - 1
								) {
									e = e.padEnd(e.length + 1, ', ');
								}
								return <p key={i}>{e}&nbsp;</p>;
							})}
						</span>
					</div>
					{formData.informacoesAdicionais.outrasFormas.length > 0 && (
						<div className='wrap'>
							<span className='label'>
								<p>Outros</p>
							</span>
							<span className='value'>
								{formData.informacoesAdicionais.outrasFormas.map((e, i) => {
									if (
										i !==
										formData.informacoesAdicionais.outrasFormas.length - 1
									) {
										e = e.padEnd(e.length + 1, ', ');
									}
									return <p key={i}>{e}&nbsp;</p>;
								})}
							</span>
						</div>
					)}
					<div>
						<span className='label'>
							<p>Principais clientes</p>
						</span>
						<span className='value'>
							<p>{formData.informacoesAdicionais.principaisClientes}</p>
						</span>
					</div>
					<div>
						<span className='label'>
							<p>Qtde de clientes</p>
						</span>
						<span className='value'>
							<p>{formData.informacoesAdicionais.quantidadeDeClientes}</p>
						</span>
					</div>
					<div>
						<span className='label'>
							<p>Qtde de funcionários</p>
						</span>
						<span className='value'>
							<p>{formData.informacoesAdicionais.numeroDeFuncionarios}</p>
						</span>
					</div>
				</div>
			</div>
			<div className='data'>
				<div className='info'>
					<h2>Dados do representante legal.</h2>
					<div>
						<span className='label'>
							<p>Nome completo</p>
						</span>
						<span className='value'>
							<p>{formData.dadosRepresentanteLegal.nomeCompleto}</p>
						</span>
					</div>
					<div>
						<span className='label'>
							<p>CPF</p>
						</span>
						<span className='value'>
							<p>{formData.dadosRepresentanteLegal.cpf}</p>
						</span>
					</div>
					<div>
						<span className='label'>
							<p>Email</p>
						</span>
						<span className='value'>
							<p>{formData.dadosRepresentanteLegal.email}</p>
						</span>
					</div>
					<div>
						<span className='label'>
							<p>Data de nascimento</p>
						</span>
						<span className='value'>
							<p>{format(parseISO(formData.dadosRepresentanteLegal.dataNascimento), 'd/MM/yyyy', { locale: ptBR })
							}</p>
						</span>
					</div>
					<div>
						<span className='label'>
							<p>Telefone</p>
						</span>
						<span className='value'>
							<p>{formData.dadosRepresentanteLegal.telefone}</p>
						</span>
					</div>
				</div>
				<div className='info'>
					<h2>Dados do responsável financeiro.</h2>
					<div>
						<span className='label'>
							<p>Dia do vencimento</p>
						</span>
						<span className='value'>
							<p>{formData.dadosNFeBoleto.diaVencimento}</p>
						</span>
					</div>
					<div>
						<span className='label'>
							<p>Nome completo</p>
						</span>
						<span className='value'>
							<p>{formData.dadosNFeBoleto.responsavelFinanceiro.nomeCompleto}</p>
						</span>
					</div>
					<div>
						<span className='label'>
							<p>Email</p>
						</span>
						<span className='value'>
							<p>{formData.dadosNFeBoleto.responsavelFinanceiro.email}</p>
						</span>
					</div>
					<div>
						<span className='label'>
							<p>Telefone</p>
						</span>
						<span className='value'>
							<p>{formData.dadosNFeBoleto.responsavelFinanceiro.telefone}</p>
						</span>
					</div>
				</div>
			</div>
			<div>
				<div className='info'>
					<h2>Dados do administrador.</h2>
					<div>
						<span className='label'>
							<p>Nome completo</p>
						</span>
						<span className='value'>
							<p>{formData.dadosAdministrador.administrador.nomeCompleto}</p>
						</span>
					</div>
					<div>
						<span className='label'>
							<p>Email</p>
						</span>
						<span className='value'>
							<p>{formData.dadosAdministrador.administrador.email}</p>
						</span>
					</div>
					<div>
						<span className='label'>
							<p>Telefone</p>
						</span>
						<span className='value'>
							<p>{formData.dadosAdministrador.administrador.telefone}</p>
						</span>
					</div>
				</div>
				<div className='info'>
					<h2>Dados do técnico responsável.</h2>
					<div>
						<span className='label'>
							<p>Nome completo</p>
						</span>
						<span className='value'>
							<p>{formData.dadosAdministrador.tecnico.nomeCompleto}</p>
						</span>
					</div>
					<div>
						<span className='label'>
							<p>Email</p>
						</span>
						<span className='value'>
							<p>{formData.dadosAdministrador.tecnico.email}</p>
						</span>
					</div>
					<div>
						<span className='label'>
							<p>Telefone</p>
						</span>
						<span className='value'>
							<p>{formData.dadosAdministrador.tecnico.telefone}</p>
						</span>
					</div>
				</div>
			</div>
			<div className='buttons'>
				<button onClick={() => navigation.previous()}>Voltar</button>
				<button onClick={() => navigation.next()}>Enviar</button>
			</div>
		</Form>
	);
};
