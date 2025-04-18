import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo-remove.png';
import img1 from '../assets/guard.jpg';
import img2 from '../assets/guard1.jpg';
import img3 from '../assets/guard2.jpg';
import img4 from '../assets/guard3.jpg';
import img5 from '../assets/guard4.jpg';
import img6 from '../assets/guard6.jpg';

const Nosotros = () => {
  const collageImages = [img1, img6, img3, img4, img5];

  const services = [
    {
      title: 'Seguridad Física',
      desc: 'Guardias altamente capacitados para protección de propiedades.',
      icon: '🛡️',
      image: img2,
    },
    {
      title: 'Monitoreo 24/7',
      desc: 'Vigilancia en tiempo real con tecnología avanzada.',
      icon: '📹',
      image: img2,
    },
    {
      title: 'Control de Accesos',
      desc: 'Sistemas modernos de ingreso y registro digital.',
      icon: '🔐',
      image: img2,
    },
  ];

  return (
    <motion.div
      className="min-h-screen bg-white bg-[linear-gradient(0deg,_#e5e7eb_1px,_transparent_1px),_linear-gradient(90deg,_#e5e7eb_1px,_transparent_1px)] bg-[size:50px_50px]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="min-h-screen bg-white bg-[linear-gradient(0deg,_#e5e7eb_1px,_transparent_1px),_linear-gradient(90deg,_#e5e7eb_1px,_transparent_1px)] bg-[size:50px_50px]">
        {/* Misión, Visión, Valores con collage desordenado */}
        <section className="max-w-7xl mx-10 px-6 py-16 flex flex-col lg:flex-row items-center gap-6">
          {/* Texto */}
          <div className="lg:w-1/2 space-y-10">
            <div className="max-w-7xl mx-auto">
              <div className="inline-block transition-transform duration-300 hover:scale-110">
                <Link
                  to="/"
                  className="inline-block"
                >
                  <img
                    src={logo}
                    alt="Logo"
                    className="w-20 h-auto"
                  />
                </Link>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-2">Misión</h2>
              <p className="text-gray-700">
                Brindar soluciones seguras, confiables y humanas.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2">Visión</h2>
              <p className="text-gray-700">
                Ser líderes en innovación en el rubro de la seguridad.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2">Valores</h2>
              <p className="text-gray-700">
                Compromiso, respeto, integridad y profesionalismo.
              </p>
            </div>
          </div>

          {/* Collage de imágenes con estilo alterno */}
          <div className="lg:w-1/2 flex gap-4">
            {/* Columna izquierda */}
            <div className="flex flex-col gap-4">
              <img
                src={collageImages[0]}
                alt=""
                className="w-36 h-64 object-cover rounded-xl shadow-md"
              />
              <img
                src={collageImages[1]}
                alt=""
                className="w-36 h-64 object-cover rounded-xl shadow-md"
              />
            </div>
            {/* Columna central desplazada */}
            <div className="flex flex-col justify-center">
              <img
                src={collageImages[2]}
                alt=""
                className="w-40 h-72 object-cover rounded-xl shadow-lg mt-12"
              />
            </div>
            {/* Columna derecha */}
            <div className="flex flex-col gap-4">
              <img
                src={collageImages[3]}
                alt=""
                className="w-36 h-64 object-cover rounded-xl shadow-md"
              />
              <img
                src={collageImages[4]}
                alt=""
                className="w-36 h-64 object-cover rounded-xl shadow-md"
              />
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-10">
              Nuestros Servicios
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((s, i) => (
                <div
                  key={i}
                  className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group"
                >
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300 z-10" />
                  <img
                    src={s.image}
                    alt="background"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                  />
                  <div className="relative z-20 p-8 text-white">
                    <div className="text-5xl mb-4">{s.icon}</div>
                    <h3 className="text-2xl font-semibold mb-2">{s.title}</h3>
                    <p className="text-white/90">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <footer className="w-full bg-gray-900 text-center text-gray-300 text-sm py-6">
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
    </motion.div>
  );
};

export default Nosotros;
