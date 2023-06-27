import React from "react";

const AboutUs = () => {
  return (
    <div className="my-10 p-2 container border-yellow-500 border-4 rounded text-white font-semibold text-left">
      <h1>Acerca de nosotros</h1>
      <p>
        ¡Te damos la bienvenida a nuestra tienda en línea! Queremos aclarar que
        esta plataforma es únicamente una demostración y los productos que aquí
        encuentres no son reales. Hemos desarrollado este sitio utilizando la
        tecnología de React y hemos integrado datos ficticios provenientes de
        una API REST conocida como Fake Store API.
      </p>
      <p>
        Esta demostración ha sido creada por Avalos Nelson, un
        apasionado desarrollador que ha utilizado su experiencia para ofrecerte
        una experiencia interactiva y realista en esta tienda en línea
        demostrativa.
      </p>
      <p>
        Si tienes alguna pregunta o comentario sobre esta demostración o estás
        interesado en trabajar con Avalos Nelson en futuros
        proyectos, no dudes en ponerte en contacto a través de cualquiera de los
        siguientes medios:
      </p>
      <ul>
        <li>Correo Electrónico: avalosnelson9919@gmail.com</li>
        <li>Teléfono: +54 9 362 4026267</li>
        <a
          href="https://www.linkedin.com/in/nelson-avalos-b8827615b"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline text-white remove:hover:text-blue-700 remove:font-bold"
        >
          <li>LinkedIn: Presionar Aqui</li>
        </a>
      </ul>
      <p>
        Estaremos encantados de ayudarte y responder a cualquier consulta que
        tengas. ¡Gracias por visitar nuestra tienda en línea demostrativa!
      </p>
    </div>
  );
};

export default AboutUs;
