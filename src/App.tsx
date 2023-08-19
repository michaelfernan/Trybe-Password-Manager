import React, { useState } from 'react';
import Form from './components/Form';

interface Service {
  nomeServico: string;
  login: string;
  senha: string;
  url: string;
}

function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [services, setServices] = useState<Service[]>([]);
  const [hidePasswords, setHidePasswords] = useState(false);

  const handleToggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleFormCancel = () => {
    setIsFormVisible(false);
  };

  const handleAddService = (service: Service) => {
    setServices([...services, service]);
    setIsFormVisible(false);
  };

  const handleRemoveService = (index: number) => {
    const updatedServices = [...services];
    updatedServices.splice(index, 1);
    setServices(updatedServices);
  };

  const handleHidePasswords = () => {
    setHidePasswords(!hidePasswords);
  };

  return (
    <div>
      <h1>Gerenciador de senhas</h1>
      <label>
        <input
          type="checkbox"
          checked={ hidePasswords }
          onChange={ handleHidePasswords }
        />
        Esconder senhas
      </label>

      {isFormVisible ? (
        <Form onAddService={ handleAddService } onCancel={ handleFormCancel } />
      ) : (
        <button onClick={ handleToggleForm }>Cadastrar nova senha</button>
      )}

      {services.length === 0 ? (
        <p>Nenhuma senha cadastrada</p>
      ) : (
        <ul>
          {services.map((service, index) => (
            <li key={ index }>
              <a href={ service.url } target="_blank" rel="noopener noreferrer">
                {service.nomeServico}
              </a>
              <p>
                Login:
                {' '}
                {service.login}
              </p>
              <p>
                Senha:
                {' '}
                {hidePasswords ? '******' : service.senha}
              </p>
              <button
                data-testid={ `remove-btn-${index}` }
                onClick={ () => handleRemoveService(index) }
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
