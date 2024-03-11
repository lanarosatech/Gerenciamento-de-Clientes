# Sistema de Gerenciamento de Clientes

Este projeto consiste em um sistema de gerenciamento de clientes para uma empresa de limpeza de residências, desenvolvido utilizando Node.js para o backend e React para o frontend.

## Sumário

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-Requisitos](#pré-requisitos)
- [Configuração do Projeto](#configuração-do-projeto)
- [Backend](#backend-1)
- [Frontend](#frontend-1)
- [Cálculo de Rotas](#cálculo-de-rotas)

## Tecnologias Utilizadas

- **Node.js** e **Express** para o backend.
- **React** para o frontend.
- **PostgreSQL** para armazenamento de dados.
- **CORS** para permitir a comunicação entre o frontend e o backend.

## Pré-Requisitos

- Node.js (versão 14.x ou superior)
- npm (incluso com Node.js)
- PostgreSQL (versão 12.x ou superior)

## Configuração do Projeto

## Backend

### Endpoints

#### Listar Todos os Clientes

- **Endpoint**: `GET /clientes`
- **Descrição**: Retorna uma lista de todos os clientes cadastrados no banco de dados.
- **Resposta de Sucesso**: Um array de objetos de clientes, cada um contendo `id`, `nome`, `email`, `telefone`, `coordenada_x`, e `coordenada_y`.

#### Cadastrar Novo Cliente

- **Endpoint**: `POST /clientes`
- **Descrição**: Cadastra um novo cliente com os dados fornecidos no corpo da requisição.
- **Corpo da Requisição**: Objeto JSON contendo `nome`, `email`, `telefone`, `coordenada_x`, e `coordenada_y`.
- **Resposta de Sucesso**: Mensagem indicando que o cliente foi cadastrado com sucesso.

#### Calcular Rota de Atendimento

- **Endpoint**: `POST /calcular-rota`
- **Descrição**: Calcula a rota de atendimento mais eficiente entre os clientes especificados. Utiliza a heurística de Vizinho Mais Próximo para estimar uma rota aproximada baseada nas coordenadas geográficas dos clientes.
- **Corpo da Requisição**: Objeto JSON contendo um array de objetos de clientes para os quais a rota deve ser calculada.
- **Resposta de Sucesso**: Array de objetos de clientes ordenados pela rota calculada, incluindo as coordenadas de cada cliente.

### Configuração do Banco de Dados

O backend utiliza PostgreSQL para armazenamento de dados. É necessário configurar as credenciais do banco de dados no arquivo de configuração ou variáveis de ambiente antes de iniciar o servidor.

### Como Executar

1. Certifique-se de que o Node.js e o PostgreSQL estão instalados e configurados em seu sistema.
2. Clone o repositório e navegue até a pasta do backend.
3. Instale as dependências com `npm install`.
4. Configure as credenciais do banco de dados PostgreSQL conforme necessário.
5. Inicie o servidor com `npm start`. O servidor estará disponível em `http://localhost:3000`.

O backend oferece funcionalidades cruciais para o gerenciamento de clientes, incluindo cadastro, listagem e otimização de rotas de atendimento. Esta API RESTful facilita a integração com qualquer frontend que consuma seus serviços.

## Frontend

### Navegação

- **Barra de Navegação**: Uma barra de navegação no topo permite aos usuários acessar diferentes seções do site, incluindo a Página Inicial, Nossos Serviços e Contato.

### Gerenciamento de Clientes

- **Cadastro de Clientes**: Os usuários podem cadastrar novos clientes no sistema. Um botão na interface principal abre um modal onde informações como nome, e-mail, telefone e localização podem ser inseridas.

- **Lista de Clientes**: Uma lista de todos os clientes cadastrados pode ser visualizada. Outro botão na interface principal dá acesso a uma visão detalhada dos clientes, incluindo suas informações básicas.

- **Seleção de Clientes para Rota de Atendimento**: O sistema permite que os usuários selecionem clientes específicos para gerar uma rota de atendimento otimizada. Esta funcionalidade visa facilitar o planejamento de visitas ou serviços a serem realizados, maximizando a eficiência das rotas.

### Interface

- **Design Responsivo**: A interface é projetada para ser responsiva, garantindo uma boa usabilidade tanto em dispositivos móveis quanto em desktops.

- **Feedback Visual**: Os botões e componentes interativos proporcionam feedback visual ao serem acionados, melhorando a experiência do usuário.


### Execução

Para iniciar a aplicação frontend, execute `npm start` na pasta do frontend. A aplicação estará acessível em `http://localhost:3000`.
