import React from 'react';
import '../styles/Navbar.css'; // Asegúrate de crear este archivo

const Navbar = () => {
    

  return (
      <nav className="navbar">
          <div className="navbar-logo">
              <img src="/logo.png" alt="Where2Donate Logo" />
          </div>
          <ul className="navbar-links">
              <li>
                  <a
                      href="/"
                      className={location.pathname === "/" ? "navbar-active" : ""}
                  >
                      Inicio
                  </a>
              </li>
              <li>
                  <a
                      href="/blog"
                      className={location.pathname === "/blog" ? "navbar-active" : ""}
                  >
                      Blog
                  </a>
              </li>
              <li>
                  <a
                      href="/suggestions"
                      className={location.pathname === "/suggestions" ? "navbar-active" : ""}
                  >
                      Sugerencias
                  </a>
              </li>
              <li>
                  <a
                      href="/contact"
                      className={location.pathname === "/contact" ? "navbar-active" : ""}
                  >
                      Contacto
                  </a>
              </li>
              <li>
                  <a
                      href="/donate"
                      className={location.pathname === "/donate" ? "navbar-active" : ""}
                  >
                      Donar
                  </a>
              </li>
          </ul>
          <div className="navbar-auth">
              <button className="btn-login">Iniciar Sesión</button>
              <button className="btn-register">Registrarse</button>
          </div>
      </nav>
  );
};


export default Navbar;