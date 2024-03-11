// Função para fazer uma requisição POST para inserir um cliente no backend
async function inserirCliente(cliente) {
  try {
      const response = await fetch('http://localhost:3000/clientes', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(cliente)
      });
      return response.json();
  } catch (error) {
      console.error('Erro ao inserir cliente:', error);
      throw error;
  }
}

export { inserirCliente };
