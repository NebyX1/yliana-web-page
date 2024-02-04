import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styles from '../../static/styles/ideasheader.module.scss';

const IdeasHeader = () => {
  const navigate = useNavigate();

  const navigateToIdeas = () => {
    navigate('/ideas');
  };

  return (
    <Container fluid className={`mt-2 ${styles.backgroundFilter}`}>
      <Container className="h-100">
        <Row className={`justify-content-center align-items-center h-100 mt-2`}>
          <Col md={12} className="text-center text-white content">
            <h1 className="font-main" style={{ fontSize: "6vh" }}>
            Conocé nuestras ideas / Contanos las tuyas!
            </h1>
            <Button
              variant="success"
              size="lg"
              className="rounded-pill"
              onClick={navigateToIdeas}
            >
              Conocer +
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default IdeasHeader;
