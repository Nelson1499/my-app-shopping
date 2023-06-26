import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InstagramIcon from "@mui/icons-material/Instagram";

const Contact = () => {
  return (
    <div className="my-10 p-2 container border-yellow-500 border-4 rounded text-white font-semibold text-left">
      <h5>
        ¡Gracias por tu interés en nuestra tienda! Estamos aquí para ayudarte en
        todo lo que necesites. Si tienes alguna pregunta, consulta o necesitas
        más información sobre nuestros productos o servicios, no dudes en
        ponerte en contacto con nosotros. Estaremos encantados de asistirte.
      </h5>

      <h6>Puedes contactarnos de las siguientes formas:</h6>

      <ul>
        <li>
          <EmailIcon /> Correo Electrónico: Envíanos un mensaje a
          contacto@tu-tienda.com y te responderemos lo antes posible.
        </li>
        <li>
          <LocalPhoneIcon /> Teléfono: Si prefieres hablar directamente con
          nosotros, llámanos al +1-123-456-7890. Nuestro equipo estará encantado
          de atenderte durante nuestro horario de atención al cliente, de lunes
          a viernes, de 9:00 a.m. a 5:00 p.m. (hora local).
        </li>
      </ul>

      <div>
        <h6>
          También puedes seguirnos en nuestras redes sociales para mantenerte
          actualizado sobre nuestras últimas novedades, promociones y eventos:
        </h6>

        <div>
          <ul>
            <a
              href="https://www.instagram.com/nelsong999/"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline remove:hover:text-blue-700 remove:font-bold"
            >
              <li className="text-white">
                <InstagramIcon /> Instagram: Ir al Instagram
              </li>
            </a>
          </ul>
        </div>

        <p>
          ¡Esperamos con ansias escuchar de ti! Estamos comprometidos en
          brindarte la mejor experiencia de compra y atención al cliente. Tu
          satisfacción es nuestra prioridad.
        </p>
      </div>

      <div>Saludos cordiales, El equipo de Shopping</div>
    </div>
  );
};

export default Contact;
