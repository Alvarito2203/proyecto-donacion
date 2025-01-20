import React from 'react';
import '../styles/Navbar.css'; // Asegúrate de crear este archivo

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="..\assets\images\logo.png" alt="Where2Donate Logo" />
        <h1>Where2Donate</h1>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Inicio</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/suggestions">Sugerencias</a></li>
        <li><a href="/contact">Contacto</a></li>
        <li><a href="/donate">Donar</a></li>
      </ul>
      <div className="navbar-auth">
        <button className="btn-login">Iniciar Sesión</button>
        <button className="btn-register">Registrarse</button>
      </div>
    </nav>
  );
};
export default Navbar;
