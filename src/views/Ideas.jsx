import React from "react";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Snippet from "../components/shared/Snippet";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey);
  return (
    <button
      type="button"
      className="accordion-button"
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

const Ideas = () => {
  return (
    <Container className="p-5">
      <Snippet pageName="Ideas" />
      <Row className="mt-3 mb-3">
        <Col>
          <h1 className="mb-2">Nuestras Ideas Base</h1>
          <p>
            Imaginen que estamos en la plaza principal de cualquier localidad de
            nuestro hermoso Lavalleja, bajo la sombra de un árbol, compartiendo
            historias y sueños. Así es como quiero que sientan estas palabras,
            como una charla entre amigos, donde les cuento mis ideas y
            aspiraciones para nuestro querido departamento:
          </p>
        </Col>
      </Row>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <CustomToggle eventKey="0">
              Empleo y Desarrollo Tecnológico
            </CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <p>
                En los últimos años, aunque ha tenido altibajos, Lavalleja viene
                presentado en promedio un nivel de desempleo superior al 10%, lo
                cual es alarmante y tiene muchas consecuencias. Una de ellas es
                ver a nuestros jóvenes y adultos tener que dejar Lavalleja en
                busca de trabajo. Para cambiar esta realidad, propongo la
                creación de un comité departamental de empleo que me asesore en
                mi tarea legislativa, para potenciar a nuestro departamento.
                Este grupo, formado por líderes empresariales, representantes
                sindicales y expertos de instituciones educativas, se encargará
                de identificar y elaborar ideas para fortalecer las áreas de
                nuestra economía que más lo necesiten. Queremos atraer
                inversiones y aprovechar las tecnologías emergentes para crear
                empleos innovadores, sé que desde la diputación se puede lograr
                mucho más a lo que estamos acostumbrados hasta ahora. Además,
                impulsaremos programas de formación y capacitación, alineados
                con las políticas nacionales, para que nuestros ciudadanos estén
                preparados para estos nuevos desafíos.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <CustomToggle eventKey="1">Salud Mental y Bienestar</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <p>
                La salud mental es una prioridad. No podemos ignorar el
                creciente problema de la depresión y el suicidio en Lavalleja.
                Por eso, vamos a desarrollar un plan departamental integral
                desde el parlamento en contacto con las más altas autoridades
                del gobierno nacional y local, trabajando mano a mano con
                expertos en salud, sociólogos y especialistas en bienestar
                mental. Estableceremos centros de apoyo y programas de
                prevención para asegurar que cada ciudadano tenga el respaldo y
                la ayuda que necesita.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <CustomToggle eventKey="2">Apertura al Mundo</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <p>
                Nuestro departamento tiene un potencial inmenso, no solo aquí en
                Uruguay, sino también en el escenario internacional. Durante los
                sucesivos gobiernos frenteamplistas a nivel nacional, Lavalleja
                se vio benficiada con una afluencia de turistas importante,
                producto de las políticas nacionales de promoción turísticas
                enfocadas también a nuestro departamento. Sin embargo, en los
                últimos años, estas iniciativas se han dejado de lado,
                privándonos de la chance de crecer y aprender del mundo. Mi
                compromiso es retomar y potenciar estas relaciones
                internacionales desde el parlamento. Crearemos un consejo
                consultivo con cónsules honorarios de diferentes países,
                establecidos aquí en Lavalleja. Su experiencia y conocimiento
                nos ayudarán a fortalecer nuestros lazos con el mundo, abriendo
                puertas a nuevas oportunidades para todos nosotros. Pero eso no
                es todo. El turismo es una de las joyas de Lavalleja. Desde mi
                rol de diputada quiero llevar esto un paso más allá.
                Exploraremos nuevas formas de turismo, nuevas experiencias que
                atraigan a visitantes de todas partes, mostrándoles la magia y
                belleza de Lavalleja, trabajando con el gobierno nacional para
                lograrlo. Y pronto, les contaré más sobre estas emocionantes
                propuestas. Porque Lavalleja merece mucho más. Es un lugar con
                una rica historia, cultura y potencial que merece ser compartido
                y celebrado en todo el mundo.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <CustomToggle eventKey="3">
              Educación y Oportunidades para la Juventud
            </CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <p>
                En estos últimos años, he visto con tristeza cómo muchos de
                nuestros jóvenes han tenido que dejar nuestro departamento en
                busca de mejores oportunidades. Esta migración ha dejado un
                vacío en Lavalleja, y si no actuamos pronto, podría afectar
                nuestras oportunidades de crecimiento económico y laboral en el
                futuro. Por eso, quiero retomar y fortalecer las iniciativas
                educativas que se desarrollaron en administraciones nacionales
                anteriores. Durante ese tiempo, trabajamos arduamente desde mi
                rol como integrante de la Comisión Pro Universidad en Lavalleja
                y logramos entre todos y todas la instalación del Centro
                Universitario Regional Este de la UDELAR en Lavalleja. Esta fue
                una demanda que esperamos por mucho tiempo, y me enorgullece
                decir que fuimos pioneros en lograrlo. Además, me llena de
                alegría ver la presencia de la Universidad Tecnológica del
                Uruguay en nuestro departamento, con su Instituto Tecnológico
                Regional Este. Por todo esto, les prometo que si me eligen
                diputada, no solo seguiremos impulsando la educación de calidad
                en Lavalleja desde el parlamento, sino que también trabajaremos
                en políticas de inserción laboral que se alineen con las
                carreras que se ofrezcan aquí. Porque no basta con educar,
                también debemos asegurarnos de que haya empleos de calidad
                esperando a nuestros jóvenes cuando terminen sus estudios. Y
                para ello, buscaremos crear una bolsa de trabajo digital
                departamental, atrayendo inversiones y garantizando que la
                educación y el empleo vayan de la mano.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <CustomToggle eventKey="4">
              El Lavalleja que Vos Querés
            </CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              <p>
                Sé que cada uno de ustedes tiene sueños, esperanzas y visiones
                para nuestro querido departamento. Y quiero escucharlos a todos.
                Porque un cargo de diputada no debería ser solo una persona o un
                equipo, es la suma de todas las voces y corazones de la gente
                del departamento al que se representa en esa banca. Por eso, mi
                quinto y más importante compromiso es establecer una diputación
                de diálogo. Una visión sobre la diputación donde cada ciudadano
                tenga un espacio para expresar sus ideas, preocupaciones y
                propuestas. Porque Lavalleja somos todos, y todos merecemos ser
                escuchados. Voy a implementar una campaña activa de escucha
                ciudadana, donde realizaremos encuentros, foros y talleres en
                cada rincón de Lavalleja. Quiero que juntos, como una gran
                familia, construyamos el futuro de nuestro departamento. Que
                cada propuesta, ya sea sobre cultura, música, medio ambiente,
                bienestar animal, igualdad de género o cualquier otro tema, sea
                considerada y valorada. Además, trabajaremos en políticas de
                buen gobierno, transparencia y eficiencia, mostrando en esta
                misma página web las cosas que vamos haciendo. Porque ustedes
                merecen saber en qué se invierte cada peso y cómo se toman las
                decisiones. Y no solo eso, queremos que sean partícipes activos
                en esas decisiones, a través de iniciativas de gobierno abierto
                y participación ciudadana. Porque el Lavalleja que todos
                queremos se construye con diálogo, con respeto y, sobre todo,
                con amor por nuestra tierra y nuestra gente
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Container>
  );
};

export default Ideas;
