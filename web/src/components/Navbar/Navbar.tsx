import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";

import CloseButton from "../CloseButton";
import useThemeContext from "../../hooks/use-theme-context";
import { config } from "../../config/navbar.config";

import "./navbar.css";

const AppNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useThemeContext();

  const brand = Object.hasOwn(config.brand, "render")
    ? config.brand.render()
    : config.brand.name;

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const renderedLinks = config.links.map((link) => (
    <Nav.Link
      as={NavLink}
      to={link.route}
      key={link.route}
      style={{ color: theme.fontColorPrimary }}
      onClick={handleMenuClose}
    >
      {link.label}
    </Nav.Link>
  ));

  const toggleButton = Object.hasOwn(config, "toggleButton")
    ? config.toggleButton()
    : null;

  return (
    <Navbar
      expand={"lg"}
      className="mb-3"
      style={{ backgroundColor: theme.colorPrimary }}
    >
      <Container fluid>
        <Navbar.Brand href="#" style={{ color: theme.fontColorPrimary }}>
          {brand}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand-lg`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {toggleButton}
        </Navbar.Toggle>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
          style={{ backgroundColor: theme.colorPrimary }}
          restoreFocus={false}
          show={menuOpen}
          onHide={() => setMenuOpen(false)}
        >
          <Offcanvas.Header>
            <CloseButton
              onClick={handleMenuClose}
              color={theme.fontColorPrimary}
            />
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {renderedLinks}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
