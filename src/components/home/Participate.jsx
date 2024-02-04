import React from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import styles from "../../static/styles/participate.module.scss";

const Participate = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Container fluid className={`mt-2 ${ styles.backgroundFilter}`}>
      <Container className="h-100">
        <Row className={`justify-content-center align-items-center h-100 mt-2`}>
          <Col md={12} className="text-center text-white content">
            <h1 className="font-main" style={{ fontSize: "6vh" }}>
              Lavalleja te necesita!
            </h1>
            <Button
              variant="success"
              size="lg"
              className="rounded-pill"
              onClick={() => setModalShow(true)}
            >
              ¡Participá!
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Modal */}
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            El Lavalleja del futuro lo construimos juntos!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col className="text-center">
                <h6>Mandanos un mensaje y nos ponemos en contacto contigo:</h6>
                <Button
                  variant="link"
                  href="https://wa.me/59844424873?text=Hola%20Yliana%20Diputada"
                  target="_blank"
                >
                  <img
                    src="https://img.icons8.com/color/96/000000/whatsapp.png"
                    style={{
                      borderRadius: "50%",
                      backgroundColor: "#25D366",
                      height: "100px",
                    }}
                    alt="WhatsApp"
                  />
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className="text-center mt-4">
                <h6>
                  O Visitanos en nuestra sede central o cualquier otro comité
                  del FA en tu localidad:
                </h6>
                <p className="bio-font" style={{ color: "#00337C" }}>
                  Washington 467 - Minas - Lavalleja - Uruguay
                  <br />
                  Sede Central: (+598) 4442 XXXX - Coordinación: (+598) 99 XXX
                  XXX
                </p>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalShow(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Participate;
