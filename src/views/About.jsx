import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Yliana from "../assets/Yliana.webp";
import style from "../static/styles/about.module.scss"
import Snippet from "../components/shared/Snippet";

const About = () => {
  return (
    <Container className="mt-5 mb-5">
      <Snippet pageName="Sobre Mi" />
      <Row>
        {/* Columna de la foto */}
        <Col lg={3} className="text-center order-lg-1 order-1">
          <Image
            src={Yliana}
            alt="Yliana Zeballos"
            roundedCircle
            fluid
            style={{
              width: "220px",
              height: "300px",
              objectFit: "cover",
              objectPosition: "center top",
            }}
          />
        </Col>

        {/* Columna de la biografía */}
        <Col lg={9} className="order-lg-2 order-2">
          <Row className={`${style.rowStyle}`}></Row>
          <h1 className="p-2">Te comparto un poco de mi viaje en esta vida</h1>
          <p>
            Nací el 19 de marzo de 1975, inmersa en la rica cultura y el
            espíritu comunitario de Lavalleja. Desde mis primeros pasos en la
            Escuela, siempre supe que mi futuro estaría íntimamente ligado a la
            educación y al bienestar de los demás. Mis años formativos en el
            Liceo Público N°1 Eduardo Fabini profundizaron mi compromiso con el
            aprendizaje y el crecimiento personal.
          </p>

          <p>
            La Universidad de la República fue el escenario donde mi pasión por
            la psicología se materializó en una Licenciatura en Psicología en el
            año 2000. No me detuve allí; continué mi formación académica hasta
            alcanzar una Maestría en Derechos de Infancia y Políticas Públicas
            en 2015, especializándome en áreas que considero fundamentales para
            el desarrollo de nuestra sociedad.
          </p>

          <p>
            Durante años, he combinado mi carrera docente en la Facultad de
            Psicología con mi rol de agente de cambio en el Centro Despertar. Mi
            trabajo ahí no solo fue como psicóloga sino también como
            coordinadora, donde pude aplicar mi experiencia personal y
            profesional en la equinoterapia, ayudando a las personas con
            discapacidad a alcanzar nuevas alturas de independencia y
            autoestima.
          </p>

          <p>
            Mi vocación de servicio no se ha limitado al ámbito educativo. Me he
            sumergido en la política con el firme propósito de defender y
            promover los derechos humanos. Como Edila Departamental de Lavalleja
            y miembro activo de distintos comités y asociaciones, he trabajado
            incansablemente para que cada voz en nuestra comunidad sea escuchada
            y valorada.
          </p>

          <p>
            Desde mi presidencia en la Comisión Pro Universidad de Lavalleja, he
            abogado por una mayor accesibilidad y calidad educativa en nuestra
            región. La fundación de PAR Lavalleja ha sido un hito en mi
            trayectoria, demostrando mi compromiso con el progreso y la
            inclusión social.
          </p>

          <p>
            Hoy, me presento ante ustedes con el mismo ímpetu y dedicación de
            siempre, llevando conmigo no solo un título de Magister, sino
            también la experiencia de una vida dedicada al servicio de la
            comunidad. Con visión y esperanza, aspiro a seguir contribuyendo al
            tejido social de Lavalleja, fomentando una educación inclusiva y una
            sociedad más justa.
          </p>

          <p>
            Mi nombre es Yliana Zeballos Fernández, y estoy aquí para servirles,
            para construir juntos un futuro donde cada uno de nosotros pueda
            desarrollar su máximo potencial. Porque cuando nos unimos por una
            causa común, no hay límites para lo que podemos lograr. Acompáñenme
            en este viaje hacia un Lavalleja lleno de oportunidades para todos.
          </p>
          <Row className={`${style.rowStyle}`}></Row>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
