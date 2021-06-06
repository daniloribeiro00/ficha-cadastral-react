import React, { useEffect, useState } from 'react';

import { Form } from './styles';

export const Step2 = ({ formData, setForm, navigation }) => {
	return (
		<Form>
            <h1>Preencha os dados abaixo para entendermos mais sobre a sua organização.</h1>
			<div>
				<span className='label vertical'>
					<p>Linguagens de programação *</p>
				</span>
                <div className='boxes'>
                    <span className='input'>
                        <input
                            type='checkbox'
                            value='Delphi'
                            // onChange={handleInscricaoEstadual}
                        />
                        <label>Delphi</label>
                        <input
                            type='checkbox'
                            value='Visual Basic'
                            // onChange={handleInscricaoEstadual}
                        />
                        <label>Visual Basic</label>
                        <input
                            type='checkbox'
                            value='C#'
                            // onChange={handleInscricaoEstadual}
                        />
                        <label>C#</label>
                        <input
                            type='checkbox'
                            value='PHP'
                            // onChange={handleInscricaoEstadual}
                        />
                        <label>PHP</label>
                    </span>
                    <span className='input'>
                        <input
                            type='checkbox'
                            value='Java'
                            // onChange={handleInscricaoEstadual}
                        />
                        <label>Java</label>
                        <input
                            type='checkbox'
                            value='Outras'
                            // onChange={handleInscricaoEstadual}
                        />
                        <label>Outras</label>
                        <input
                            type='checkbox'
                            value='Nenhuma'
                            // onChange={handleInscricaoEstadual}
                        />
                        <label>Nenhuma</label>
                    </span>
                    <span className='input'>
                        <input
                            className='size1'
                            type='text'
                            name='dadosDaOrganizacao.razaoSocial'
                            placeholder='Separe por vírgula as linguagens. Ex: Go, Lua, .NET'
                            value={formData.dadosDaOrganizacao.razaoSocial}
                            onChange={setForm}
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
                            // onChange={handleInscricaoEstadual}
                        />
                        <label>Varejo</label>
                        <input
                            type='checkbox'
                            value='Indústria'
                            // onChange={handleInscricaoEstadual}
                        />
                        <label>Indústria</label>
                        <input
                            type='checkbox'
                            value='Comércio'
                            // onChange={handleInscricaoEstadual}
                        />
                        <label>Comércio</label>
                        <input
                            type='checkbox'
                            value='Transporte'
                            // onChange={handleInscricaoEstadual}
                        />
                        <label>Transporte</label>
                    </span>
                    <span className='input'>
                        <input
                            type='checkbox'
                            value='Serviço'
                            // onChange={handleInscricaoEstadual}
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
                            // onChange={handleInscricaoEstadual}
                        />
                        <label>Todos</label>
                        <input
                            type='checkbox'
                            value='AC'
                            // onChange={handleInscricaoEstadual}
                        />
                        <label>AC</label>
                        <input
                            type='checkbox'
                            value='AL'
                            // onChange={handleInscricaoEstadual}
                        />
                        <label>AL</label>
                        <input
                            type='checkbox'
                            value='AM'
                            // onChange={handleInscricaoEstadual}
                        />
                        <label>AM</label>
                    </span>
                    <span className='input'>
                        <input
                            type='checkbox'
                            value='AP'
                            // onChange={handleInscricaoEstadual}
                        />
                        <label>AP</label>
                        <input
                            type='checkbox'
                            value='BA'
                            // onChange={handleInscricaoEstadual}
                        />
                        <label>BA</label>
                        <input
                            type='checkbox'
                            value='CE'
                            // onChange={handleInscricaoEstadual}
                        />
                        <label>CE</label>
                        <input
                            type='checkbox'
                            value='DF'
                            // onChange={handleInscricaoEstadual}
                        />
                        <label>DF</label>
                    </span>
                    <span className='input'>
                        <input
                            type='checkbox'
                            value='ES'
                            // onChange={handleInscricaoEstadual}
                        />
                        <label>ES</label>
                        <input
                            type='checkbox'
                            value='GO'
                            // onChange={handleInscricaoEstadual}
                        />
                        <label>GO</label>
                        <input
                            type='checkbox'
                            value='MA'
                            // onChange={handleInscricaoEstadual}
                        />
                        <label>MA</label>
                        <input
                            type='checkbox'
                            value='MG'
                            // onChange={handleInscricaoEstadual}
                        />
                        <label>MG</label>
                    </span>
                    <span className='input'>
                        <input
                            type='checkbox'
                            value='MS'
                            // onChange={handleInscricaoEstadual}
                        />
                        <label>MS</label>
                        <input
                            type='checkbox'
                            value='MT'
                            // onChange={handleInscricaoEstadual}
                        />
                        <label>MT</label>
                        <input
                            type='checkbox'
                            value='PA'
                            // onChange={handleInscricaoEstadual}
                        />
                        <label>PA</label>
                        <input
                            type='checkbox'
                            value='PB'
                            // onChange={handleInscricaoEstadual}
                        />
                        <label>PB</label>
                    </span>
                    <span className='input'>
                        <input
                            type='checkbox'
                            value='PE'
                            // onChange={handleInscricaoEstadual}
                        />
                        <label>PE</label>
                        <input
                            type='checkbox'
                            value='PI'
                            // onChange={handleInscricaoEstadual}
                        />
                        <label>PI</label>
                        <input
                            type='checkbox'
                            value='PR'
                            // onChange={handleInscricaoEstadual}
                        />
                        <label>PR</label>
                        <input
                            type='checkbox'
                            value='RJ'
                            // onChange={handleInscricaoEstadual}
                        />
                        <label>RJ</label>
                    </span>
                    <span className='input'>
                        <input
                            type='checkbox'
                            value='RN'
                            // onChange={handleInscricaoEstadual}
                        />
                        <label>RN</label>
                        <input
                            type='checkbox'
                            value='RO'
                            // onChange={handleInscricaoEstadual}
                        />
                        <label>RO</label>
                        <input
                            type='checkbox'
                            value='RR'
                            // onChange={handleInscricaoEstadual}
                        />
                        <label>RR</label>
                        <input
                            type='checkbox'
                            value='RS'
                            // onChange={handleInscricaoEstadual}
                        />
                        <label>RS</label>
                    </span>
                    <span className='input'>
                        <input
                            type='checkbox'
                            value='SC'
                            // onChange={handleInscricaoEstadual}
                        />
                        <label>SC</label>
                        <input
                            type='checkbox'
                            value='SE'
                            // onChange={handleInscricaoEstadual}
                        />
                        <label>SE</label>
                        <input
                            type='checkbox'
                            value='SP'
                            // onChange={handleInscricaoEstadual}
                        />
                        <label>SP</label>
                        <input
                            type='checkbox'
                            value='TO'
                            // onChange={handleInscricaoEstadual}
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
                            // onChange={handleInscricaoEstadual}
                        />
                        <label>Locação</label>
                        <input
                            type='checkbox'
                            value='Venda'
                            // onChange={handleInscricaoEstadual}
                        />
                        <label>Venda</label>
                        <input
                            type='checkbox'
                            value='Uso interno'
                            // onChange={handleInscricaoEstadual}
                        />
                        <label>Uso interno</label>
                        <input
                            type='checkbox'
                            value='Outro'
                            // onChange={handleInscricaoEstadual}
                        />
                        <label>Outro</label>
                    </span>
                    <span className='input'>
                        <input
                            type='checkbox'
                            value='Nenhuma'
                            // onChange={handleInscricaoEstadual}
                        />
                        <label>Nenhuma</label>
                    </span>
                    <span className='input'>
                        <input
                            className='size1'
                            type='text'
                            name='dadosDaOrganizacao.razaoSocial'
                            placeholder='Outro'
                            value={formData.dadosDaOrganizacao.razaoSocial}
                            onChange={setForm}
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
						name='dadosDaOrganizacao.razaoSocial'
						value={formData.dadosDaOrganizacao.razaoSocial}
						onChange={setForm}
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
						name='dadosDaOrganizacao.address.numero'
						value={formData.dadosDaOrganizacao.address.numero}
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
						name='dadosDaOrganizacao.address.numero'
						value={formData.dadosDaOrganizacao.address.numero}
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
