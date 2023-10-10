import React, { useState } from 'react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 fixed w-full z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href='#Home' className="text-white text-xl font-bold px-3">
            Logo
          </a>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#Home" className="text-white hover:text-gray-300">Inicio</a>
          <a href="#About" className="text-white hover:text-gray-300">Acerca de</a>
          <a href="#Services" className="text-white hover:text-gray-300">Servicios</a>
          <a href="#Contact" className="text-white hover:text-gray-300">Contacto</a>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleNavbar}
            className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="#fff"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-700 py-3">
          <a href="#Home" className="block text-white py-2 px-4 hover:bg-gray-600">Inicio</a>
          <a href="#About" className="block text-white py-2 px-4 hover:bg-gray-600">Acerca de</a>
          <a href="#Services" className="block text-white py-2 px-4 hover:bg-gray-600">Servicios</a>
          <a href="#Contact" className="block text-white py-2 px-4 hover:bg-gray-600">Contacto</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
