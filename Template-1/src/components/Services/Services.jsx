import React from 'react';

const Services = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-gray-200 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Diseño Arquitectónico</h3>
            <p className="text-gray-600">
              Creamos diseños arquitectónicos innovadores y funcionales que cumplen con las necesidades y deseos de nuestros clientes.
            </p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Construcción Residencial</h3>
            <p className="text-gray-600">
              Construimos hogares de alta calidad con atención al detalle y artesanía excepcional para una vida moderna y cómoda.
            </p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Renovaciones y Remodelaciones</h3>
            <p className="text-gray-600">
              Transformamos espacios existentes en áreas funcionales y estéticamente atractivas a través de renovaciones y remodelaciones expertas.
            </p>
          </div>
          {/* Agrega más servicios según sea necesario */}
        </div>
      </div>
    </section>
  );
};

export default Services;
