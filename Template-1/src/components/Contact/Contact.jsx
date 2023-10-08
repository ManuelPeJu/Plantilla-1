import React from 'react';

const Contact = () => {
  return (
    <section className="bg-gray-100 py-16 flex justify-center items-center">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Contáctanos</h2>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
          {/* Información de contacto */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Correo Electrónico</h3>
            <p className="text-gray-600">info@tuempresa.com</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Teléfono</h3>
            <p className="text-gray-600">123-456-7890</p>
          </div>
          {/* Redes Sociales */}
          <div className="flex items-center space-x-4">
            <h3 className="text-xl font-semibold text-gray-800">Síguenos en:</h3>
            <a href="#" className="text-blue-500 hover:underline">Facebook</a>
            <a href="#" className="text-blue-500 hover:underline">Twitter</a>
            <a href="#" className="text-blue-500 hover:underline">Instagram</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
