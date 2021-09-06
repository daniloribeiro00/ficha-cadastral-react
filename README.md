# Ficha Cadastral

Projeto desenvolvido para teste de conhecimento técnico realizado durante processo seletivo pela empresa [Tecnospeed](https://tecnospeed.com.br), e um clone do formulário existente até então de propriedade da mesma, a qual também é detentora de todos os direitos do nome "Tecnospeed" bem como sua respectiva logomarca, telefones e email de contato.

Consiste de um formulário de múltiplas etapas desenvolvido utilizando [Create React App](https://github.com/facebook/create-react-app) para a realização de um cadastro de uma empresa.

Nele, diversos campos são marcados como obrigatórios e são exibidas mensagens caso o usuário não os preencha.

Os dados inseridos são verificados quanto à sua quantidade de caracteres e sua validade (no caso de CEP, CPF e CNPJ).

As senhas também são verificadas por meio de sua complexidade. É necessário preencher igualmente os campos "Senha" e "Confirme a senha".

Ao fim do preenchimento, é exibida uma tela de confirmação, onde os dados digitados podem ser conferidos antes de serem enviados.

Após isso, basta clicar no botão "Enviar" para finalizar.

Com isso, os dados são armazenados no local storage do navegador e podem ser conferidos abrindo sua aba "Console".

O projeto foi hospedado na Vercel e pode ser conferido clicando [aqui](https://ficha-cadastral-react.vercel.app/).

</br>

#

## Execução
</br>


Para executar esse projeto, basta cloná-lo para sua máquina e rodar um dos scripts abaixo para instalar todas as dependências do projeto:

```
yarn

# ou

npm install
```


Após isso, basta executar um dos seguintes script para abri-lo em seu computador:

```
yarn start

# ou

npm run start
```

Observação 1: é necessário ter o [Node.js](https://nodejs.org/en/) instalado em sua máquina.

Observação 2: para utilizar scripts iniciados em "yarn" é necessário instalar o gerenciador de pacotes [Yarn](https://yarnpkg.com/).

</br>

#

## Bibliotecas e Dependências
</br>

Esse projeto conta com diversas bibliotecas e dependências que auxiliam no seu funcionamento.

Algumas delas podem ser conferidas à seguir:

[styled-components](https://styled-components.com/): Biblioteca que utiliza o conceito de CSS-in-JS, permitindo escrever códigos CSS dentro do Javascript

[cep-promise](https://github.com/BrasilAPI/cep-promise): Busca por CEP integrado diretamente aos serviços dos Correios, ViaCEP e WideNet.

[cpf-cnpj-validator](https://www.npmjs.com/package/cpf-cnpj-validator): Valida e formata strings de CPF ou CNPJ.

[date-fns](https://date-fns.org/): Biblioteca JavaScript para gerenciamento de datas.

[react-hooks-helper](https://www.npmjs.com/package/react-hooks-helper): Biblioteca de React Hooks personalizados.

[react-input-mask](https://www.npmjs.com/package/react-input-mask): Componente React para máscara de inputs.

[zxcvbn](https://github.com/dropbox/zxcvbn): Medidor de complexidade de senhas.

Para o preenchimento dos campos de estados e cidades no formulário, foi utilizada a [API do IBGE](https://servicodados.ibge.gov.br/api/docs).

</br>

#

## Licença
</br>

[MIT License](https://opensource.org/licenses/MIT)


