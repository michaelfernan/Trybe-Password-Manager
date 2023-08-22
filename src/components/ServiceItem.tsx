import React from 'react';
// codigo realizado com auxilio de Michelle Fernandes
interface Service {
  nomeServico: string;
  login: string;
  senha: string;
  url: string;
}

interface ServiceItemProps {
  service: Service;
  hidePasswords: boolean;
  onRemove: () => void;
}

function ServiceItem({ service, hidePasswords, onRemove }: ServiceItemProps) {
  return (
    <li>
      <a href={ service.url } target="_blank" rel="noopener noreferrer">
        {service.nomeServico}
      </a>
      <p>
        Login:
        {' '}
        <span>
          {service.login}
        </span>
      </p>
      <p>
        Senha:
        {' '}
        {hidePasswords ? '******' : service.senha}
      </p>
      <button data-testid="remove-btn" onClick={ onRemove }>Remover</button>
    </li>
  );
}

export default ServiceItem;
