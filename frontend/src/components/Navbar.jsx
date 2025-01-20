import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="navbar">
        <h1>Donaciones</h1>
        <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/sugerencias">Sugerencias</Link></li>
            <li><Link to="/donar">Donar</Link></li>
        </ul>
    </nav>
);

export default Navbar;
