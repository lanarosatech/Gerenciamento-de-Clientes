import React, { useState } from 'react';
import { inserirCliente } from './api'; // Importa a função inserirClientes do arquivo de utilitários

function CadastroCliente({ setShowCadastro }) {
  const [cliente, setCliente] = useState({
    nome: '',
    email: '',
    telefone: '',
    coordenada_x: '',
    coordenada_y: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente(prevCliente => ({
      ...prevCliente,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await inserirCliente(cliente); // Insere o cliente no banco de dadoss
      alert('Cliente cadastrado com sucesso!');
      setShowCadastro(false); // Fecha o modal após o cadastro
    } catch (error) {
      console.error('Erro ao cadastrar cliente:', error);
      alert('Erro ao cadastrar cliente. Verifique o console para mais informações.');
    }
  };

  return (
    <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="dados">
                <label htmlFor="nome" className="form-label">Nome:</label>
                <input type="text" id="nome" name="nome" value={cliente.nome} onChange={handleChange} className="form-control" />
              </div>
              <div className="dados">
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="email" id="email" name="email" value={cliente.email} onChange={handleChange} className="form-control" />
              </div>
              <div className="dados">
                <label htmlFor="telefone" className="form-label">Telefone:</label>
                <input type="tel" id="telefone" name="telefone" value={cliente.telefone} onChange={handleChange} className="form-control" />
              </div>
              <div className="dados">
                <label htmlFor="coordenada_x" className="form-label">Coordenada X:</label>
                <input type="text" id="coordenada_x" name="coordenada_x" value={cliente.coordenada_x} onChange={handleChange} className="form-control" />
              </div>
              <div className="dados">
                <label htmlFor="coordenada_y" className="form-label">Coordenada Y:</label>
                <input type="text" id="coordenada_y" name="coordenada_y" value={cliente.coordenada_y} onChange={handleChange} className="form-control" />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setShowCadastro(false)}>Fechar</button>
              <button type="submit" className="btn btn-primary">Cadastrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CadastroCliente;
