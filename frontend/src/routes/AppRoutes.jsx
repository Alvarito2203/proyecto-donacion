import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header'; // Encabezado global
import Footer from '../components/Footer'; // Pie de página global
import Main from '../pages/Main'; // Página principal
import Blog from '../pages/Blog'; // Página del blog
import Donar from '../pages/Donar'; // Página para donaciones

const AppRoutes = () => {
  return (
    <Router>
      <Header /> {/* Header global */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/donar" element={<Donar />} />
        {/* Agrega más rutas según sea necesario */}
      </Routes>
      <Footer /> {/* Footer global */}
    </Router>
  );
};

export default AppRoutes;

