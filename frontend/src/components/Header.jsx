import React from 'react';
import '../styles/Header.css'; // Estilos del Header

const Header = () => {
    return (
      <header className="header">
        <div className="header-content">
          <h1>Bienvenido a Where2Donate</h1>
          <p>Encuentra cómo contribuir y hacer una diferencia en tu comunidad.</p>
          <button className="btn-donate">¡Comienza a Donar!</button>
        </div>
      </header>
    );
  };
  

export default Header;
