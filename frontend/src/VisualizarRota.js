import React from 'react';

function VisualizarRota({ rota }) {
  return (
    <div>
      <h5 className="modal-title">Rota Calculada</h5>
      <ol>
        {rota.map((cliente, index) => (
          <li key={index}>
            {cliente.nome} - Coordenadas: ({cliente.coordenada_x}, {cliente.coordenada_y})
          </li>
        ))}
      </ol>
    </div>
  );
}

export default VisualizarRota;
