import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VisualizarRota from './VisualizarRota';

function SelecionarClientes({ setShowSelecionarClientes }) {
  const [clientes, setClientes] = useState([]);
  const [clientesSelecionados, setClientesSelecionados] = useState([]);
  const [rota, setRota] = useState(null); // Armazena os dados da rota calculada

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await axios.get('http://localhost:3000/clientes');
        setClientes(response.data);
      } catch (error) {
        console.error('Erro ao buscar clientes:', error);
      }
    };

    fetchClientes();
  }, []);

  const handleSelecionarCliente = (clienteId) => {
    const novaLista = clientesSelecionados.includes(clienteId) ?
      clientesSelecionados.filter(id => id !== clienteId) :
      [...clientesSelecionados, clienteId];
    setClientesSelecionados(novaLista);
  };

  const handleCalcularRota = async () => {
    try {
      // Primeiro, mapeia os clientesSelecionados para os objetos de cliente completos
      const clientesParaCalcular = clientes.filter(cliente => clientesSelecionados.includes(cliente.id));
      const response = await axios.post('http://localhost:3000/calcular-rota', { clientes: clientesParaCalcular });
      setRota(response.data); // Supondo que a resposta da API seja os dados da rota
    } catch (error) {
      console.error('Erro ao calcular a rota:', error);
      return null;
    }
  };


  // Definição da função handleSubmit
  const handleSubmit = async (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário
    await handleCalcularRota(); // Chama a função para calcular a rota
  };


  return (
    <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-center">Selecione os clientes:</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setShowSelecionarClientes(false)}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="container-fluid">
              <div className="list-group">
                {clientes.map(cliente => (
                  <button
                    key={cliente.id}
                    type="button"
                    className={`list-group-item list-group-item-action ${clientesSelecionados.includes(cliente.id) ? 'active' : ''}`}
                    onClick={() => handleSelecionarCliente(cliente.id)}>
                    {cliente.nome}
                  </button>
                ))}
              </div>
              <button className="btn btn-primary mt-3" onClick={handleCalcularRota}>Calcular Rota</button>
            </div>
          </div>
          {rota && <div className="modal-body text-center">
            <VisualizarRota rota={rota} />
          </div>
          }
        </div>
      </div>
    </div>
  );
}

export default SelecionarClientes;
