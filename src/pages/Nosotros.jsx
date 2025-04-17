import React from 'react';
import accesoImg from '../assets/garita.jpg';
import rondinesImg from '../assets/mystic.jpg';
import plazasImg from '../assets/plaza.jpg';
import garitaImg from '../assets/carrera.jpg';
import fondoImg from '../assets/fondo.jpg';
import personImg from '../assets/person.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Nosotros = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      {/* Header con fondo y figura */}
      <header className="relative h-[60vh] md:h-[70vh] w-full">
        {/* Imagen de fondo */}
        <img
          src={fondoImg} // <- reemplaza con tu imagen
          alt="Camisa con logo"
          className="w-full h-full object-cover object-center brightness-50"
        />

        {/* Imagen del guardia 
        <img
          src={personImg} // <- reemplaza con tu imagen
          alt="Guardia"
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-72 md:h-96 object-contain z-10"
        />*/}
      </header>

      {/* Contenido */}
      <main className="px-4 py-8 space-y-12 bg-[#f8f9fa] text-center">
        {/* Misión */}
        <section className="flex flex-col md:flex-row gap-8 text-center">
          {/* Misión + Visión */}
          <div className="flex-1 space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Misión</h2>
              <p className="text-sm text-gray-800">
                Proteger, controlar y servir con responsabilidad, integridad y
                eficiencia.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Visión</h2>
              <p className="text-sm text-gray-800">
                Ser la empresa de seguridad líder en innovación y confianza a
                nivel nacional.
              </p>
            </div>
          </div>

          {/* Valores */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">Valores</h2>
            <div className="grid grid-cols-2 gap-4">
              {['Compromiso', 'Disciplina', 'Lealtad', 'Respeto'].map(
                (valor) => (
                  <div
                    key={valor}
                    className="bg-gray-800 text-white px-4 py-2 rounded-xl text-sm hover:bg-gray-600 transition"
                  >
                    {valor}
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Nuestros Servicios</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: 'Control de Acceso', img: accesoImg },
              { title: 'Rondines', img: rondinesImg },
              { title: 'Seguridad en Plazas', img: plazasImg },
              { title: 'Garitas Residenciales', img: garitaImg },
            ].map((servicio) => (
              <div
                key={servicio.title}
                className="relative rounded-lg overflow-hidden group"
              >
                <img
                  src={servicio.img}
                  alt={servicio.title}
                  className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-60 transition">
                  <span className="text-sm text-white font-semibold">
                    {servicio.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="w-full text-center bg-gray-900 text-gray-300 text-sm py-6">
        <div className="flex justify-center gap-6 text-xl mb-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="mailto:ventas@seguridadproteccionycontrol.com"
            className="hover:text-orange-500"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
        <p>
          {' '}
          <FontAwesomeIcon icon={faLocationDot} /> Ciudad de Panamá, Panamá
        </p>
        <p>&copy; 2025 Protección y Control S.A.</p>
      </footer>
    </div>
  );
};

export default Nosotros;
