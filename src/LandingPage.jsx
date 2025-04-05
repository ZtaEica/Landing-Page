import React from 'react';

export default function LandingPage() {
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
          className="block bg-green-500 text-white py-3 rounded-xl shadow hover:bg-green-600 transition"
        >
          Operaciones
        </a>
        <a
          href="https://wa.me/50761503116"
          className="block bg-green-500 text-white py-3 rounded-xl shadow hover:bg-green-600 transition"
        >
          Administración
        </a>
        <a
          href="https://wa.me/50761507636"
          className="block bg-green-500 text-white py-3 rounded-xl shadow hover:bg-green-600 transition"
        >
          Supervisor
        </a>
      </section>

      {/* Descripción */}
      <section className="px-4 mb-6 max-w-md text-gray-800">
        <p className="text-base leading-relaxed">
          <strong>Protección y Control S.A.</strong> ofrece soluciones de
          seguridad física y tecnológica. Brindamos control de acceso, rondines,
          vigilancia en PH y residenciales, con personal capacitado y tecnología
          avanzada.
        </p>
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
            📘
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500"
          >
            📸
          </a>
          <a
            href="mailto:contacto@proteccionycontrol.com"
            className="hover:text-orange-500"
          >
            📧
          </a>
        </div>
        <p>📍 Ciudad de Panamá, Panamá</p>
        <p>&copy; 2025 Protección y Control S.A.</p>
      </footer>
    </div>
  );
}
