import React from 'react';

function ClienteDetailsModal({ cliente, onClose }) {
  return (
    <div className="modal">
      <div className="card w-50">
        <span className="close" onClick={onClose}>&times;</span>
        <div className="card-body">
          <h3 className="card-title">{cliente.nome}</h3>
          <p className="card-text"><strong>Email:</strong> {cliente.email}</p>
          <p className="card-text"><strong>Telefone:</strong> {cliente.telefone}</p>
          <p className="card-text"><strong>Coordenada X:</strong> {cliente.coordenada_x}</p>
          <p className="card-text"><strong>Coordenada Y:</strong> {cliente.coordenada_y}</p>
        </div>
      </div>
    </div>
  );
}

export default ClienteDetailsModal;
