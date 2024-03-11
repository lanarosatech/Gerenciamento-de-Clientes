## Tecnologias Utilizadas

### Backend

- **Node.js**: Ambiente de execução JavaScript server-side.
- **Express**: Framework web para Node.js, utilizado para facilitar a criação de endpoints da API.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional utilizado para armazenar informações dos clientes.
- **CORS**: Middleware do Express para habilitar CORS (Cross-Origin Resource Sharing), permitindo que o frontend acesse o backend de diferentes origens.

### Pré-Requisitos

Para executar o sistema, é necessário ter instalado:

- Node.js (versão recomendada: 14.x ou superior)
- npm (gerenciador de pacotes para JavaScript, normalmente vem com o Node.js)
- PostgreSQL (versão recomendada: 12.x ou superior)

### Configuração do Banco de Dados

Antes de iniciar o servidor pela primeira vez, é necessário configurar o banco de dados PostgreSQL. Siga os passos abaixo:

1. Crie um banco de dados chamado `clientes`.
2. Execute o script SQL localizado em `backend/scripts/db_init.sql` para criar as tabelas necessárias.
3. Atualize o arquivo de configuração `backend/config/database.js` com as credenciais do seu banco de dados PostgreSQL.

### Tratamento de Localização dos Clientes

O sistema utiliza coordenadas geográficas (latitude e longitude) para armazenar a localização dos clientes. Essas informações são utilizadas para calcular rotas e distâncias entre os clientes, facilitando a organização de visitas e a otimização de rotas para os funcionários.

### Cálculo de Rotas

O backend oferece um endpoint adicional para o cálculo de rotas entre clientes, utilizando o algoritmo do Caixeiro Viajante para encontrar a rota mais eficiente. Este recurso é útil para planejar visitas sequenciais a vários clientes, minimizando o tempo de deslocamento.

#### `POST /calcular-rota`

Recebe uma lista de clientes (identificados por suas IDs) e retorna a ordem otimizada de visita com base em suas localizações geográficas.

Exemplo de corpo da requisição:

```json
{
  "clientes": [1, 2, 3, 4]
}

Exemplo de resposta:

{
  "rota": [1, 4, 3, 2],
  "distanciaTotal": 22.5 // Distância total da rota em quilômetros
}
