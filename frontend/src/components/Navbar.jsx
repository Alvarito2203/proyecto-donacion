import React from 'react';
import '../styles/Navbar.css'; // Asegúrate de crear este archivo

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/assets/logo.png" alt="Where2Donate Logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Inicio</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#suggestions">Sugerencias</a></li>
        <li><a href="#contact">Contacto</a></li>
        <li><a href="#donate">Donar</a></li>
      </ul>
      <div className="navbar-auth">
        <button className="auth-button">Iniciar Sesión</button>
        <button className="auth-button">Registrarse</button>
      </div>
    </nav>
  );
};

export default Navbar;
