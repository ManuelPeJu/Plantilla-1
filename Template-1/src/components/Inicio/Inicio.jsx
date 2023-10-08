import React from 'react';

const Inicio = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Bienvenido a Nuestra Constructora</h2>
        <p className="text-gray-600 mb-8">
          Somos una empresa dedicada a la construcción de proyectos innovadores y de alta calidad. Con años de experiencia en el campo de la construcción, nos esforzamos por superar las expectativas de nuestros clientes en cada proyecto que emprendemos.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Nuestros Servicios</h3>
            <p className="text-gray-600">
              Ofrecemos una amplia gama de servicios de construcción, desde viviendas residenciales hasta proyectos comerciales. Nuestro equipo de expertos está listo para llevar a cabo cualquier tipo de proyecto.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Nuestra Misión</h3>
            <p className="text-gray-600">
              Nos dedicamos a construir sueños y transformar ideas en realidad. Nuestra misión es crear espacios funcionales, estéticos y seguros que mejoren la calidad de vida de las personas y contribuyan al desarrollo de la comunidad.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Contáctanos</h3>
            <p className="text-gray-600">
              ¿Tienes un proyecto en mente? ¡Estamos aquí para ayudarte! Ponte en contacto con nosotros para discutir tus ideas y necesidades de construcción. Estamos comprometidos a hacer tu visión realidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
