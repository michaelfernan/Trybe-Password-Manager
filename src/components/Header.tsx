import React from 'react';

interface HeaderProps {
  hidePasswords: boolean;
  onToggleHidePasswords: () => void;
}

function Header({ hidePasswords, onToggleHidePasswords }: HeaderProps) {
  return (
    <header>
      <h1>Gerenciador de senhas</h1>
      <label>
        <input
          type="checkbox"
          checked={ hidePasswords }
          onChange={ onToggleHidePasswords }
        />
        Esconder senhas
      </label>
    </header>
  );
}

export default Header;
