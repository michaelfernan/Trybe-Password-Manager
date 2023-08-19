import React, { useState } from 'react';
import Form from './components/Form';

function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleToggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleFormCancel = () => {
    setIsFormVisible(false);
  };

  return (
    <div>
      <h1>Gerenciador de senhas</h1>
      {isFormVisible ? (
        <Form onCancel={ handleFormCancel } />
      ) : (
        <button onClick={ handleToggleForm }>Cadastrar nova senha</button>
      )}
    </div>
  );
}

export default App;
