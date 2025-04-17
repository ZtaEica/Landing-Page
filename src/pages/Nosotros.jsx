import React from 'react';
import accesoImg from '../assets/garita.jpg';
import rondinesImg from '../assets/mystic.jpg';
import plazasImg from '../assets/plaza.jpg';
import garitaImg from '../assets/carrera.jpg';
import fondoImg from '../assets/fondo.jpg';
import personImg from '../assets/person.png';

const Nosotros = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      {/* Header con fondo y figura */}
      <header className="relative h-[45vh] md:h-[70vh] w-full">
        {/* Imagen de fondo */}
        <img
          src={fondoImg} // <- reemplaza con tu imagen
          alt="Camisa con logo"
          className="w-full h-full object-cover brightness-50"
        />

        {/* Imagen del guardia */}
        <img
          src={personImg} // <- reemplaza con tu imagen
          alt="Guardia"
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-72 md:h-96 object-contain z-10"
        />
      </header>

      {/* Contenido */}
      <main className="px-4 py-8 space-y-12 bg-[#f8f9fa] text-center">
        {/* Misión */}
        <section>
          <h2 className="text-2xl font-bold mb-2">Misión</h2>
          <p className="text-sm text-gray-800">
            Proteger, controlar y servir con responsabilidad, integridad y
            eficiencia.
          </p>
        </section>

        {/* Visión */}
        <section>
          <h2 className="text-2xl font-bold mb-2">Visión</h2>
          <p className="text-sm text-gray-800">
            Ser la empresa de seguridad líder en innovación y confianza a nivel
            nacional.
          </p>
        </section>

        {/* Valores */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Valores</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Compromiso', 'Disciplina', 'Lealtad', 'Respeto'].map((valor) => (
              <div
                key={valor}
                className="bg-gray-800 text-white px-4 py-2 rounded-xl text-sm hover:bg-gray-600 transition"
              >
                {valor}
              </div>
            ))}
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
    </div>
  );
};

export default Nosotros;
