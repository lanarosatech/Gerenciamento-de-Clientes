const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const bodyParser = require('body-parser');
const calcularRota = require('./calcularRota');
const app = express();
const PORT = 3000;

// Configuração do banco de dados PostgreSQL
const pool = new Pool({
  user: 'teste',
  host: 'localhost',
  database: 'clientes',
  password: 'senha',
  port: 5432,
});

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// Rota para listar todos os clientes
app.get('/clientes', async (req, res) => {
  try {
    const query = 'SELECT * FROM clientes';
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao buscar clientes:', error);
    res.status(500).send('Erro ao buscar clientes');
  }
});

// Rota para cadastrar um novo cliente
app.post('/clientes', async (req, res) => {
  const { nome, email, telefone, coordenada_x, coordenada_y } = req.body;
  if (!nome || !email || !telefone || coordenada_x === undefined || coordenada_y === undefined) {
    return res.status(400).send('Todos os campos são obrigatórios.');
  }

  try {
    const query = 'INSERT INTO clientes (nome, email, telefone, coordenada_x, coordenada_y) VALUES ($1, $2, $3, $4, $5)';
    const values = [nome, email, telefone, coordenada_x, coordenada_y];
    await pool.query(query, values);
    res.status(201).send('Cliente cadastrado com sucesso!');
  } catch (error) {
    console.error('Erro ao cadastrar cliente:', error);
    res.status(500).send('Erro ao cadastrar cliente');
  }
});

// Define um endpoint POST para calcular rotas
app.post('/calcular-rota', (req, res) => {
  const { clientes } = req.body; // Supõe-se que o corpo da requisição contenha os clientes para os quais calcular a rota
  const rotaCalculada = calcularRota(clientes); // Usa a função importada de CalcularRota.js
  res.json(rotaCalculada); // Envia a rota calculada como resposta
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
