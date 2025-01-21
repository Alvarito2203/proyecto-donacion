import React from 'react';
import '../styles/Footer.css'; // Estilos del Footer

import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <h2>Where2Donate</h2>
          <p>Conectando donaciones con necesidades reales.</p>
        </div>

        <div className="footer-links">
          <ul>
            <li><a href="/about">¿Quiénes Somos?</a></li>
            <li><a href="/faq">Preguntas Frecuentes</a></li>
            <li><a href="/privacy">Política de Privacidad</a></li>
            <li><a href="/contact">Contacto</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Where2Donate. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
