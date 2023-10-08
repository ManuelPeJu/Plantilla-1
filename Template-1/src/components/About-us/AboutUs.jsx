import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-gray-200 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Nuestra Historia</h2>
        <p className="text-gray-600 mb-8">
          Desde nuestra fundación hasta el día de hoy, hemos estado comprometidos con la excelencia en la construcción y la satisfacción del cliente. Aquí está nuestra historia:
        </p>
        <div className="max-w-3xl mx-auto text-left">
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Fundación de la Empresa (Año)</h3>
            <p className="text-gray-600">
              Nuestra empresa fue fundada por [Nombre del Fundador] en [Año de Fundación]. Desde el principio, nos propusimos construir estructuras duraderas y hermosas que enriquecieran las comunidades locales.
            </p>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Expansión y Reconocimiento (Año)</h3>
            <p className="text-gray-600">
              En los años siguientes, nuestra dedicación a la calidad y la innovación nos llevó a una expansión significativa. Ganamos varios premios y reconocimientos por nuestros proyectos destacados en la industria de la construcción.
            </p>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Compromiso con la Comunidad (Año)</h3>
            <p className="text-gray-600">
              Nos hemos comprometido activamente con la comunidad, participando en proyectos benéficos y programas de responsabilidad social corporativa. Creemos en devolver a la comunidad que nos ha apoyado a lo largo de los años.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Presente y Futuro (Año Actual)</h3>
            <p className="text-gray-600">
              En el presente, seguimos liderando el camino en la industria de la construcción. Estamos emocionados por lo que depara el futuro y estamos comprometidos con nuestra misión de construir un futuro mejor para todos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
