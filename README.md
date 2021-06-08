# Ficha Cadastral Tecnospeed

Projeto desenvolvido por Danilo Ribeiro para teste de conhecimento técnico realizado pela empresa Tecnospeed.

Consiste de um formulário de múltiplas etapas desenvolvido utilizando [Create React App](https://github.com/facebook/create-react-app) para a realização de um cadastro de uma empresa.

Nele, diversos campos são marcados como obrigatórios e são exibidas mensagens caso o usuário não os preencha.

Os dados inseridos são verificados quanto à sua quantidade de caracteres e sua validade (no caso de CEP, CPF e CNPJ).

As senhas também são verificadas por meio de sua complexidade. É necessário preencher igualmente os campos "Senha" e "Confirme a senha", o que não era obrigatório no formulário original da Tecnospeed pois, mesmo inserindo senhas diferentes, o sistema permitia avançar.

Ao fim do preenchimento, é exibida uma tela de confirmação, onde os dados digitados podem ser conferidos antes de serem enviados.

Após isso, basta clicar no botão "Enviar" para finalizar.

Com isso, os dados são armazenados no local storage do navegador e podem ser conferidos abrindo sua aba "Console".

O projeto foi hospedado na Vercel e pode ser conferido clicando [aqui](https://ficha-cadastral-react.vercel.app/).

</br>

#

## Execução
</br>


Para executar esse projeto, basta cloná-lo para sua máquina e rodar um dos scripts abaixo para instalar todas as dependências do projeto:

### `yarn` ou `npm install`
</br>

Após isso, basta executar um dos seguintes script para abri-lo em seu computador:

### `yarn start` ou `npm start`
</br>

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

## React Hooks
</br>

Para o desenvolvimento deste projeto, foram utilizados alguns React Hooks, necessários para executar algumas funções da aplicação.

Eles podem ser conferidos à seguir:

[useState](https://pt-br.reactjs.org/docs/hooks-state.html): Utilizado para criação de variáveis state.

[useEffect](https://pt-br.reactjs.org/docs/hooks-effect.html): Permite executar efeitos colaterais em componentes funcionais.

[createContext / useContext](https://pt-br.reactjs.org/docs/context.html): Disponibiliza uma forma de passar dados entre a árvore de componentes sem precisar passar props manualmente em cada nível.

</br>

#

## Licença
</br>

[MIT License](https://opensource.org/licenses/MIT)


