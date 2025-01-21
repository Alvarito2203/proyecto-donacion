import React from 'react';
import '../styles/Header.css'; // Estilos del Header

const Header = () => {
  return (
      <header className="header">
          <div className="header-content">
              <h1>
                  Bienvenido a <span className="highlight">Where2Donate</span>
              </h1>
              <p>
                  Contribuye, marca la diferencia y haz un impacto positivo en tu comunidad.
              </p>
              <button className="btn-donate">¡Comienza a Donar!</button>
          </div>
      </header>
  );
};


export default Header;
