// src/components/Form.js
import React, { useEffect, useState } from 'react';

const Form = ({ isOpen, onClose }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
    }
  }, [isOpen]);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => {
      onClose();
    }, 300); // Duración de la animación de salida (ms)
  };

  if (!isOpen && !show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        className={`bg-white mx-4 rounded-2xl shadow-lg w-full max-w-md p-8 relative transform transition-all duration-300 ${
          show ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Contáctanos
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Nombre completo</label>
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full border rounded-xl p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <label className="block text-gray-700">Correo electrónico</label>
            <input
              type="email"
              placeholder="correo@ejemplo.com"
              className="w-full border rounded-xl p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <label className="block text-gray-700">Mensaje</label>
            <textarea
              rows="4"
              placeholder="Escribe tu mensaje..."
              className="w-full border rounded-xl p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition duration-300"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
