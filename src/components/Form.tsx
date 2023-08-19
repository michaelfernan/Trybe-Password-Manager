import React, { useState } from 'react';

function Form({ onCancel }) {
  const [nomeServico, setNomeServico] = useState('');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [url, setUrl] = useState('');

  const isButtonDisabled = nomeServico === ''
    || login === ''
    || senha.length < 8
    || senha.length > 16
    || !/[0-9]/.test(senha)
    || !/[a-zA-Z]/.test(senha)
    || !/[!@#$%^&*]/.test(senha);

  return (
    <div>
      <label htmlFor="nomeServico">Nome do serviço:</label>
      <input
        type="text"
        id="nomeServico"
        value={ nomeServico }
        onChange={ (e) => setNomeServico(e.target.value) }
      />

      <label htmlFor="login">Login:</label>
      <input
        type="text"
        id="login"
        value={ login }
        onChange={ (e) => setLogin(e.target.value) }
      />

      <label htmlFor="senha">Senha:</label>
      <input
        type="password"
        id="senha"
        value={ senha }
        onChange={ (e) => setSenha(e.target.value) }
      />

      <label htmlFor="url">URL:</label>
      <input
        type="text"
        id="url"
        value={ url }
        onChange={ (e) => setUrl(e.target.value) }
      />

      <button disabled={ isButtonDisabled }>Cadastrar</button>
      <button onClick={ onCancel }>Cancelar</button>
    </div>
  );
}

export default Form;
