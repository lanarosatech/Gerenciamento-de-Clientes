import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Importe o axios para fazer requisições HTTP

function ListaClientes({ setShowListaClientes }) {
  const [clientes, setClientes] = useState([]);
  const [filtro, setFiltro] = useState('');
  const [selectedClient, setSelectedClient] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleFiltroChange = (e) => {
    setFiltro(e.target.value);
  };

  const handleClientClick = (cliente) => {
    setSelectedClient(cliente);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedClient(null);
    setShowModal(false);
  };

  useEffect(() => {
    // Função para buscar os clientes do backend
    const fetchClientes = async () => {
      try {
        const response = await axios.get('http://localhost:3000/clientes');
        setClientes(response.data);
      } catch (error) {
        console.error('Erro ao buscar clientes:', error);
      }
    };

    // Chamada da função para buscar os clientes quando o componente é montado
    fetchClientes();
  }, []);

  return (
    <div>
      <br />
      <br />
      <h4>Busque o cliente desejado pelo nome:</h4>
      <input
        type="text"
        value={filtro}
        onChange={handleFiltroChange}
        placeholder="Digite o nome..."
        className="form-control"
      />
      <h4>Clique no nome desejado para mais informações!</h4>
      <div style={{ maxHeight: '300px', overflowY: 'auto' }}> {/* Adicionando a rolagem à lista */}
        <ul className="lista-clientes">
          {clientes
            .filter(cliente => cliente.nome.toLowerCase().includes(filtro.toLowerCase()))
            .map(cliente => (
              <li key={cliente.email} onClick={() => handleClientClick(cliente)} className="list-group-item">
                {cliente.nome}
              </li>
            ))}
        </ul>
      </div>
      {selectedClient && (
        <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Informações do Cliente</h5>
              </div>
              <div className="modal-body">
                <div className="dados">
                  <label htmlFor="nome" className="form-label">Nome:</label>
                  <input type="text" id="nome" name="nome" value={selectedClient.nome} className="form-control" readOnly />
                </div>
                <div className="dados">
                  <label htmlFor="email" className="form-label">Email:</label>
                  <input type="email" id="email" name="email" value={selectedClient.email} className="form-control" readOnly />
                </div>
                <div className="dados">
                  <label htmlFor="telefone" className="form-label">Telefone:</label>
                  <input type="tel" id="telefone" name="telefone" value={selectedClient.telefone} className="form-control" readOnly />
                </div>
                <div className="dados">
                  <label htmlFor="coordenada_x" className="form-label">Coordenada X:</label>
                  <input type="text" id="coordenada_x" name="coordenada_x" value={selectedClient.coordenada_x} className="form-control" readOnly />
                </div>
                <div className="dados">
                  <label htmlFor="coordenada_y" className="form-label">Coordenada Y:</label>
                  <input type="text" id="coordenada_y" name="coordenada_y" value={selectedClient.coordenada_y} className="form-control" readOnly />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Fechar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListaClientes;
