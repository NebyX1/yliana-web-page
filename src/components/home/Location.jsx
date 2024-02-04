import React, { useState } from "react";
import { Container, Row, Col, Button, Modal, Table } from "react-bootstrap";
import styles from "../../static/styles/location.module.scss";

const Location = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Container fluid className={`mt-2 ${styles.backgroundFilter}`}>
      <Container className="h-100">
        <Row className={`justify-content-center align-items-center h-100`}>
          <Col md={12} className="text-center text-white">
            <h1 className="font-main" style={{ fontSize: "6vh" }}>
              ¡Yliana en tu localidad!
            </h1>
            <Button
              variant="success"
              size="lg"
              className="rounded-pill"
              onClick={() => setModalShow(true)}
            >
              ¡Ver Agenda Barrial!
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Modal */}
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="agendaModalLabel"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="agendaModalLabel">Agenda Barrial</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 className="mb-2">Mirá donde estará Yliana próximamente:</h4>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Lugar</th>
                <th>Fecha</th>
                <th>Hora</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Barrio Estación</td>
                <td>XX/XX/XX</td>
                <td>XX:XX</td>
              </tr>
              <tr>
                <td>Solís de Matajo</td>
                <td>XX/XX/XX</td>
                <td>XX:XX</td>
              </tr>
              <tr>
                <td>José Pedro Varela</td>
                <td>XX/XX/XX</td>
                <td>XX:XX</td>
              </tr>
              <tr>
                <td>Barrio Filarmónica</td>
                <td>XX/XX/XX</td>
                <td>XX:XX</td>
              </tr>
            </tbody>
          </Table>
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

export default Location;
