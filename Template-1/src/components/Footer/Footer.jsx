import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        {/* Sección de Contáctanos */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Contáctanos</h2>
          <div className="flex flex-col items-center space-y-2">
            <p><strong>Correo Electrónico:</strong> info@tuempresa.com</p>
            <p><strong>Teléfono:</strong> 123-456-7890</p>
            <p><strong>Síguenos en: </strong> 
              <a href='' className="text-blue-500 hover:underline mx-1"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-blue-500 hover:underline mx-1"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-blue-500 hover:underline mx-1"><i className="bi bi-twitter"></i></a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
