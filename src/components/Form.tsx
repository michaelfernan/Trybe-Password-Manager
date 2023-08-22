import React, { useState } from 'react';
import Swal from 'sweetalert2';
// codigo realizado com auxilio de Michelle Fernandes
interface FormProps {
  onAddService: (service: Service) => void;
  onCancel: () => void;
}

interface Service {
  nomeServico: string;
  login: string;
  senha: string;
  url: string;
}

function Form({ onAddService, onCancel }: FormProps) {
  const [nomeServico, setNomeServico] = useState('');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [url, setUrl] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const isButtonDisabled = nomeServico === ''
    || login === ''
    || senha.length < 8
    || senha.length > 16
    || !/[0-9]/.test(senha)
    || !/[a-zA-Z]/.test(senha)
    || !/[!@#$%^&*]/.test(senha);

  const isMinLengthValid = senha.length >= 8;
  const isMaxLengthValid = senha.length <= 16;
  const isAlphaNumericValid = /[0-9]/.test(senha) && /[a-zA-Z]/.test(senha);
  const isSpecialCharValid = /[!@#$%^&*]/.test(senha);

  const getPasswordValidationClass = (isValid: boolean) => {
    return isValid ? 'valid-password-check' : 'invalid-password-check';
  };

  const handleFormSubmit = () => {
    const newService: Service = {
      nomeServico,
      login,
      senha,
      url,
    };

    onAddService(newService);
    Swal.fire({
      icon: 'success',
      title: 'Serviço cadastrado com sucesso',
      showConfirmButton: false,
      timer: 1500,
    });

    setNomeServico('');
    setLogin('');
    setSenha('');
    setUrl('');
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

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
        type={ isPasswordVisible ? 'text' : 'password' }
        id="senha"
        value={ senha }
        onChange={ (e) => setSenha(e.target.value) }
      />

      {isMinLengthValid ? (
        <p className={ getPasswordValidationClass(true) }>
          Possuir 8 ou mais caracteres
        </p>
      ) : (
        <p className={ getPasswordValidationClass(false) }>
          Possuir 8 ou mais caracteres
        </p>
      )}

      {isMaxLengthValid ? (
        <p className={ getPasswordValidationClass(true) }>
          Possuir até 16 caracteres
        </p>
      ) : (
        <p className={ getPasswordValidationClass(false) }>
          Possuir até 16 caracteres
        </p>
      )}

      {isAlphaNumericValid ? (
        <p className={ getPasswordValidationClass(true) }>
          Possuir letras e números
        </p>
      ) : (
        <p className={ getPasswordValidationClass(false) }>
          Possuir letras e números
        </p>
      )}

      {isSpecialCharValid ? (
        <p className={ getPasswordValidationClass(true) }>
          Possuir algum caractere especial
        </p>
      ) : (
        <p className={ getPasswordValidationClass(false) }>
          Possuir algum caractere especial
        </p>
      )}

      <label htmlFor="url">URL:</label>
      <input
        type="text"
        id="url"
        value={ url }
        onChange={ (e) => setUrl(e.target.value) }
      />

      <button disabled={ isButtonDisabled } onClick={ handleFormSubmit }>
        Cadastrar
      </button>
      <button onClick={ onCancel }>Cancelar</button>

      <button
        data-testid="show-hide-form-password"
        onClick={ togglePasswordVisibility }
      >
        Mostrar/Esconder Senha
      </button>
    </div>
  );
}

export default Form;
