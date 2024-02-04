import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, NavItem } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import logo from "../../assets/YlianaLogo.png";
import styles from "../../static/styles/navbar.module.scss";

const NavHeader = () => {
  return (
    <Navbar bg="nav" expand="lg" variant="light" className={styles.navbarLight}>
      <Container
        className={`d-flex justify-content-between align-items-center ${styles.navContainer}`}
      >
        <LinkContainer to="/">
          <Navbar.Brand className={`me-auto ms-lg-0`}>
            <img
              className={`mx-3 ${styles.logoEffect}`}
              src={logo}
              alt="Con Yliana Podemos Más!"
              width="80"
              height="80"
            />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <FaBars className={styles.textWhite} />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={`m-auto ${styles.nav}`}>
            <LinkContainer to="/" className="text-center" activeClassName="">
              <Nav.Link
                className={`me-3 ${styles.mainFont} ${styles.navFontEffect}`}
              >
                Inicio
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about" className="text-center">
              <Nav.Link
                className={`me-3 ${styles.mainFont} ${styles.navFontEffect}`}
              >
                Sobre Mi
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/ideas" className="text-center">
              <Nav.Link
                className={`me-3 ${styles.mainFont} ${styles.navFontEffect}`}
              >
                Ideas
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact" className="text-center">
              <Nav.Link
                className={`me-3 ${styles.mainFont} ${styles.navFontEffect}`}
              >
                Contacto
              </Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav className={`flex-row ${styles.socialNav}`}>
            <Nav.Link href="https://twitter.com" target="_blank" className={`me-2 ${styles.navIconEffect}`}>
              <FaXTwitter />
            </Nav.Link>
            <Nav.Link href="https://facebook.com" target="_blank" className={`me-2 ${styles.navIconEffect}`}>
              <FaFacebookF />
            </Nav.Link>
            <Nav.Link href="https://instagram.com" target="_blank" className={`me-2 ${styles.navIconEffect}`}>
              <FaInstagram />
            </Nav.Link>
            <Nav.Link href="https://youtube.com" target="_blank" className={`me-2 ${styles.navIconEffect}`}>
              <FaYoutube />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavHeader;
