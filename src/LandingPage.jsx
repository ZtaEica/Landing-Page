import React from 'react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-between text-center p-4">
      {/* Header con logo */}
      <header className="mt-6">
        <img
          src="/logo.png" // Cambia esto por la ruta de tu logo
          alt="Logo de la empresa"
          className="w-40 h-40 mx-auto object-contain"
        />
      </header>

      {/* Enlaces de WhatsApp */}
      <section className="my-6 w-full max-w-md space-y-4">
        <a
          href="https://wa.me/50760000001"
          className="block bg-green-500 text-white py-3 rounded-xl shadow-lg hover:bg-green-600 transition"
        >
          Contactar Seguridad Garita
        </a>
        <a
          href="https://wa.me/50760000002"
          className="block bg-green-500 text-white py-3 rounded-xl shadow-lg hover:bg-green-600 transition"
        >
          Contactar Administración
        </a>
        <a
          href="https://wa.me/50760000003"
          className="block bg-green-500 text-white py-3 rounded-xl shadow-lg hover:bg-green-600 transition"
        >
          Contactar Soporte Técnico
        </a>
      </section>

      {/* Descripción de la empresa */}
      <section className="px-4 mb-6 max-w-md text-gray-700">
        <p className="text-base">
          En <strong>Protección y Control S.A.</strong> nos especializamos en la
          seguridad de residenciales y PH. Ofrecemos control de acceso,
          rondines, tecnología en garitas y atención personalizada 24/7.
        </p>
      </section>

      {/* Footer */}
      <footer className="text-sm text-gray-500 mb-6 space-y-2">
        <div className="flex justify-center gap-6 text-xl text-gray-600">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            📘
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            📸
          </a>
          <a href="mailto:contacto@proteccionycontrol.com">📧</a>
        </div>
        <p>📍 Ciudad de Panamá, Panamá</p>
        <p>&copy; 2025 Protección y Control S.A.</p>
      </footer>
    </div>
  );
}
