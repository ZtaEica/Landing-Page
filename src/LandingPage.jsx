import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
  faChevronRight,
  faEnvelope,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { ArrowRight } from 'lucide-react';
import Form from './components/ContactanosForm';

export default function LandingPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col items-center justify-between text-center p-0">
      {/* Header con fondo blanco y logo */}
      <header className="bg-white w-full py-6 shadow-md">
        <img
          src="/favicon.svg" // Cambia esto por la ruta de tu logo
          alt="Logo de la empresa"
          className="w-[50rem] h-32 mx-auto object-contain"
        />
      </header>

      {/* Enlaces de WhatsApp */}
      <section className="my-8 w-full max-w-md space-y-4 px-2">
        <a
          href="https://wa.me/50761503513"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex w-full items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-2 font-semibold text-gray-800 shadow-md transition-all duration-500 hover:shadow-xl hover:border-green-400 overflow-hidden"
        >
          <span className="absolute inset-0 z-0 -skew-x-14 -translate-x-full bg-gradient-to-r from-green-400 to-green-600 transition-transform duration-700 ease-out group-hover:translate-x-0 rounded-xl"></span>
          <span className="relative z-10 transition-all duration-300 group-hover:-translate-x-1 group-hover:text-white">
            WhatsApp de Operaciones
          </span>
          <span className="absolute right-4 z-10 translate-x-2 opacity-0 text-white transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
            <ArrowRight
              size={18}
              strokeWidth={2.5}
            />
          </span>
        </a>

        <a
          href="https://wa.me/50766152533"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex w-full items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-2 font-semibold text-gray-800 shadow-md transition-all duration-500 hover:shadow-xl hover:border-green-400 overflow-hidden"
        >
          <span className="absolute inset-0 z-0 -skew-x-14 -translate-x-full bg-gradient-to-r from-green-400 to-green-600 transition-transform duration-700 ease-out group-hover:translate-x-0 rounded-xl"></span>
          <span className="relative z-10 transition-all duration-300 group-hover:-translate-x-1 group-hover:text-white">
            WhatsApp de Administración
          </span>
          <span className="absolute right-4 z-10 translate-x-2 opacity-0 text-white transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
            <ArrowRight
              size={18}
              strokeWidth={2.5}
            />
          </span>
        </a>
        <a
          href="https://wa.me/50762335535"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex w-full items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-2 font-semibold text-gray-800 shadow-md transition-all duration-500 hover:shadow-xl hover:border-green-400 overflow-hidden"
        >
          <span className="absolute inset-0 z-0 -skew-x-14 -translate-x-full bg-gradient-to-r from-green-400 to-green-600 transition-transform duration-700 ease-out group-hover:translate-x-0 rounded-xl"></span>
          <span className="relative z-10 transition-all duration-300 group-hover:-translate-x-1 group-hover:text-white">
            WhatsApp de Operaciones
          </span>
          <span className="absolute right-4 z-10 translate-x-2 opacity-0 text-white transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
            <ArrowRight
              size={18}
              strokeWidth={2.5}
            />
          </span>
        </a>

        <button
          onClick={() => setIsFormOpen(true)}
          className="group relative inline-flex w-full items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-2 font-semibold text-gray-800 shadow-md transition-all duration-500 hover:shadow-xl hover:border-orange-400 overflow-hidden"
        >
          <span className="absolute inset-0 z-0 -skew-x-14 -translate-x-full bg-gradient-to-r from-orange-400 to-orange-600 transition-transform duration-700 ease-out group-hover:translate-x-0 rounded-xl"></span>
          <span className="relative z-10 transition-all duration-300 group-hover:-translate-x-1 group-hover:text-white">
            Contáctanos
          </span>
          <span className="absolute right-4 z-10 translate-x-2 opacity-0 text-white transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
            <ArrowRight
              size={18}
              strokeWidth={2.5}
            />
          </span>
        </button>
      </section>

      {/* Formulario modal */}
      <Form
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />

      {/* Descripción */}
      <section className="px-4 max-w-md space-y-4 text-gray-800">
        <p className="text-base leading-relaxed">
          <strong>Protección y Control S.A.</strong> ofrece soluciones de
          seguridad física y tecnológica. Brindamos control de acceso, rondines,
          vigilancia en PH y residenciales, con personal capacitado y tecnología
          avanzada.
        </p>
        <Link
          to="/nosotros"
          className="relative w-[200px] h-[50px] m-auto text-white text-[23px] tracking-[3px] font-semibold font-sans outline-none cursor-pointer overflow-hidden transition-all duration-500 shadow-sm hover:rotate-[-3deg] hover:scale-[1.1] hover:shadow-md flex items-center justify-center bg-gradient-to-l from-[#fb7519] to-[#e75d00]"
        >
          <div className="flex items-center gap-2">
            <p className="leading-none">Nosotros</p>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-base mt-[1px]"
            />
          </div>
          <span className="span1"></span>
          <span className="span2"></span>
          <span className="span3"></span>
          <span className="span4"></span>
        </Link>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-gray-300 text-sm py-6 mt-8">
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
}
