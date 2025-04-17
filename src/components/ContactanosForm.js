import React, { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = ({ isOpen, onClose }) => {
  const formRef = useRef();
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      setStatus(null); // Reiniciar estado cuando se abre
    }
  }, [isOpen]);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => {
      onClose();
    }, 300); // Duración de la animación de salida
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ird85m9',
        'template_4xcahmt',
        formRef.current,
        'QucZUwc5Na0lTaEt5'
      )
      .then(() => {
        setStatus('success');
        formRef.current.reset();

        setTimeout(() => {
          handleClose();
        }, 1500); // Mostrar confirmación y luego cerrar
      })
      .catch((error) => {
        setStatus('error');
        console.error(error);

        setTimeout(() => {
          setStatus(null);
        }, 2000); // Ocultar error tras 2s
      });
  };

  const formattedDate = new Date().toLocaleString('es-PA', {
    dateStyle: 'short',
    timeStyle: 'short',
  });

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

        {status && (
          <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center z-10 rounded-2xl">
            <div className={`flex flex-col items-center justify-center`}>
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center text-white text-4xl shadow-lg ${
                  status === 'success' ? 'bg-green-500' : 'bg-red-500'
                }`}
              >
                {status === 'success' ? '✔' : '✖'}
              </div>
              <p className="mt-4 text-lg font-semibold text-gray-700">
                {status === 'success' ? 'Mensaje enviado' : 'Error al enviar'}
              </p>
            </div>
          </div>
        )}

        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Contáctanos
        </h2>
        <form
          ref={formRef}
          className="space-y-4"
          onSubmit={sendEmail}
        >
          <div>
            <label className="block text-gray-700">Nombre completo</label>
            <input
              name="user_name"
              type="text"
              placeholder="Tu nombre"
              required
              className="w-full border rounded-xl p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <label className="block text-gray-700">Correo electrónico</label>
            <input
              name="user_email"
              type="email"
              placeholder="correo@ejemplo.com"
              required
              className="w-full border rounded-xl p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <label className="block text-gray-700">Mensaje</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Escribe tu mensaje..."
              required
              className="w-full border rounded-xl p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition duration-300"
          >
            Enviar mensaje
          </button>
          <input
            type="hidden"
            name="time"
            value={formattedDate}
          />
        </form>
      </div>
    </div>
  );
};

export default Form;
