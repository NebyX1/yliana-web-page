import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "../../static/styles/mainheader.module.scss";
import YlianaHeaderImage from "../../assets/Yliana-Header.webp";

const MainHeader = () => {
  return (
    <div className={styles.mainHeader}>
      <Image src={YlianaHeaderImage} fluid />
      <div className={styles.headerContent}>
        <Container fluid>
          <Row>
            <Col></Col>
            <Col className={` text-white ${styles.typo}`}>
              <h2>
                El cambio que Lavalleja precisa
              </h2>
              <h2>lo hacés vos!</h2>
              <h4>
                Junto a <span className={`${styles.colorRed}`}>Yl</span>
                <span className={`${styles.colorBlue}`}>ia</span>
                <span className={`${styles.colorWhite}`}>na</span> podemos lograrlo!
              </h4>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MainHeader;
