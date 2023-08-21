import React from 'react';

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
        {service.login}
      </p>
      <p>
        Senha:
        {' '}
        {hidePasswords ? '******' : service.senha}
      </p>
      <button onClick={ onRemove }>Remover</button>
    </li>
  );
}

export default ServiceItem;
