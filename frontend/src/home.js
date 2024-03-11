import React, { useState } from 'react';
import CadastroCliente from './CadastroCliente';
import ListaClientes from './ListaClientes';
import SelecionarClientes from './SelecionarClientes'; // Corrigido o import do componente SelecionarClientes

function Home() {
  const [showCadastro, setShowCadastro] = useState(false);
  const [showListaClientes, setShowListaClientes] = useState(false);
  const [showSelecionarClientes, setShowSelecionarClientes] = useState(false);

  const handleGerarRota = () => {
    setShowCadastro(false);
    setShowListaClientes(false);
    setShowSelecionarClientes(true);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="navbar navbar-expand-lg custom-bg">
          <div className="container">
            <img className="navbar-brand" src="https://images.vexels.com/media/users/3/207149/isolated/preview/df32f3f6641aa2f274a93b4575ccb13a-icone-de-pano-de-limpeza-de-maos.png" alt="" />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="#" className="nav-link">Página Inicial</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Nossos Serviços</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Contato</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <h1>Sistema de Gerenciamento de Clientes</h1>
      <div className="container-fluid d-flex justify-content-between">

        {/* Botão para abrir o modal de cadastro */}
        <div className="col d-flex flex-column justify-content-center align-items-center">
            <div className="custom-div flex-grow-1" style={{ backgroundColor: 'rgb(88, 166, 200)' }}>
              <button className="btn" onClick={() => {
                setShowCadastro(true);
                setShowListaClientes(false);
                setShowSelecionarClientes(false);
              }}>Cadastro de Clientes</button>
              {showCadastro && <CadastroCliente setShowCadastro={setShowCadastro} />}
            </div>
        </div>

        {/* Div 2 - Lista de Clientes */}
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <div className="custom-div flex-grow-1" style={{ backgroundColor: 'rgb(88, 166, 200)' }}>
            <button className="btn" onClick={() => {
              setShowListaClientes(true);
              setShowCadastro(false);
              setShowSelecionarClientes(false);
            }}>Lista de Clientes</button>
            {showListaClientes && <ListaClientes />}
          </div>
        </div>

        <div className="col d-flex flex-column justify-content-center align-items-center">
          <div className="custom-div flex-grow-1" style={{ backgroundColor: 'rgb(88, 166, 200)' }}>
            <button className="btn" onClick={handleGerarRota}>Gerar rota de atendimento</button>
          </div>
        </div>
        {/* Renderiza o componente SelecionarClientes se showSelecionarClientes for verdadeiro */}
        {showSelecionarClientes && <SelecionarClientes setShowSelecionarClientes={setShowSelecionarClientes} />}
      </div>

      <footer className="page-footer text-center">
        <div className="container text-center">
          <span className="text-muted">Desenvolvido por Lana Rosa</span>
        </div>
      </footer>
    </div>
  );
}

export default Home;
