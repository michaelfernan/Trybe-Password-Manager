import React from 'react';
import ServiceItem from './ServiceItem';

interface Service {
  nomeServico: string;
  login: string;
  senha: string;
  url: string;
}

interface ServiceListProps {
  services: Service[];
  hidePasswords: boolean;
  onRemoveService: (index: number) => void;
}

function ServiceList({ services, hidePasswords, onRemoveService }: ServiceListProps) {
  return (
    <ul>
      {services.map((service, index) => (
        <ServiceItem
          key={ index }
          service={ service }
          hidePasswords={ hidePasswords }
          onRemove={ () => onRemoveService(index) }
        />
      ))}
    </ul>
  );
}

export default ServiceList;
