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

  return (
    <div>
      <h1>Gerenciador de senhas</h1>
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
                {service.senha}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
