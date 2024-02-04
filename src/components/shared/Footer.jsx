import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa"; // Asegúrate de importar FaTwitter correctamente
import logo from "../../assets/YlianaLogo.png";
import styles from "../../static/styles/footer.module.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-nav text-center text-lg-start ${styles.footer}`}>
      <Container>
        {/* Logo */}
        <Row className={`text-center m-auto p-5 ${styles.footerRow}`}>
          <Link to="/">
            <img
              src={logo}
              alt="Con Yliana Podemos Más!"
              width="130"
              height="130"
              className={`mx-3 ${styles.logoEffect}`}
            />
          </Link>
        </Row>

        {/* Social Media Icons */}
        <Row
          className={`justify-content-center align-items-center p-3 ${styles.footerRow}`}
        >
          <Col xs="auto">
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter
                className={`mx-2 ${styles.footerIconEffect} display-6`}
              />
            </a>
          </Col>
          <Col xs="auto">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF
                className={`mx-2 ${styles.footerIconEffect} display-6`}
              />
            </a>
          </Col>
          <Col xs="auto">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                className={`mx-2 ${styles.footerIconEffect} display-6`}
              />
            </a>
          </Col>
          <Col xs="auto">
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube
                className={`mx-2 ${styles.footerIconEffect} display-6`}
              />
            </a>
          </Col>
        </Row>

        {/* Copyright */}
        <Row className={`text-center m-auto p-3 ${styles.footerRow}`}>
          <p>© Yliana Zeballos {currentYear}</p>
          <p>
            {" "}
            Made by:{" "}
            <a
              className={`${styles.nebyFont}`}
              href="https://github.com/NebyX1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Neby_X
            </a>
          </p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
