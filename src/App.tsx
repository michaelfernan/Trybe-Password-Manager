import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import ServiceList from './components/ServiceList';

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

  const handleToggleHidePasswords = () => {
    setHidePasswords(!hidePasswords);
  };

  return (
    <div>
      <Header
        hidePasswords={ hidePasswords }
        onToggleHidePasswords={ handleToggleHidePasswords }
      />

      {isFormVisible ? (
        <Form onAddService={ handleAddService } onCancel={ handleFormCancel } />
      ) : (
        <button onClick={ handleToggleForm }>Cadastrar nova senha</button>
      )}

      {services.length === 0 ? (
        <p>Nenhuma senha cadastrada</p>
      ) : (
        <ServiceList
          services={ services }
          hidePasswords={ hidePasswords }
          onRemoveService={ handleRemoveService }
        />
      )}
    </div>
  );
}

export default App;
