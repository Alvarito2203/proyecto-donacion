import React from 'react';
import '../styles/main.css'; // Cambia la ruta según corresponda
import Navbar from '../components/navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Main = () => {
    return (
      <>

      {/* Header */}
      <Header></Header>



        {/* Navbar */}
        <Navbar />
  
        {/* Sección principal */}
        <main className="main-content">
         
  
          {/* Opciones de donación */}
          <section className="donation-options">
            <h2>Maneras de Contribuir</h2>
            <div className="cards-container">
              <div className="donation-card">
                <img src="/assets/hair-donation.jpg" alt="Donar Pelo" />
                <h3>Donar Pelo</h3>
                <p>Ayuda a pacientes con tratamientos médicos.</p>
              </div>
              <div className="donation-card">
                <img src="/assets/blood-donation.jpg" alt="Donar Sangre" />
                <h3>Donar Sangre</h3>
                <p>Salva vidas en emergencias médicas.</p>
              </div>
              <div className="donation-card">
                <img src="/assets/toy-donation.jpg" alt="Donar Juguetes" />
                <h3>Donar Juguetes</h3>
                <p>Regala alegría a los niños necesitados.</p>
              </div>
              <div className="donation-card">
                <img src="/assets/book-donation.jpg" alt="Donar Libros" />
                <h3>Donar Libros</h3>
                <p>Promueve la educación y la cultura.</p>
              </div>
              <div className="donation-card">
                <img src="/assets/money-donation.jpg" alt="Donar Dinero" />
                <h3>Donar Dinero</h3>
                <p>Apoya proyectos humanitarios.</p>
              </div>
            </div>
          </section>
        </main>
  
        {/* Pie de página */}
        <Footer></Footer>
      
      </>
    );
  };
  

export default Main;
