import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../main"; // Página principal
import Blog from "./pages/Blog"; // Blog
import Donar from "./pages/Donar"; // Página de donaciones
import Header from "./components/Header"; // Header reutilizable
import Footer from "./components/Footer"; // Footer reutilizable

const App = () => {
  return (
    <Router>
      <Header /> {/* Encabezado común para todas las páginas */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/donar" element={<Donar />} />
      </Routes>
      <Footer /> {/* Pie de página común */}
    </Router>
  );
};

export default App;
