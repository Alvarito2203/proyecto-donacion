import React from 'react';
import '../styles/Footer.css'; // Estilos del Footer

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/path-to-logo.png" alt="Where2Donate Logo" />
            <h2>Where2Donate</h2>
          </div>
          <ul className="footer-links">
            <li><a href="/about">¿Quiénes Somos?</a></li>
            <li><a href="/faq">Preguntas Frecuentes</a></li>
            <li><a href="/privacy">Política de Privacidad</a></li>
            <li><a href="/contact">Contacto</a></li>
          </ul>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Where2Donate. Todos los derechos reservados.</p>
        </div>
      </footer>
   
  );
};

export default Footer;
