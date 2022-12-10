import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

import "./navbar.css";
import config from "../../config/navbar.config";

const AppNavbar = () => {
  const brand = Object.hasOwn(config.brand, "render")
    ? config.brand.render()
    : config.brand.name;

  const renderedLinks = config.links.map((link) => (
    <Nav.Link
      key={link.route}
      href={link.route}
      style={{ color: config.fontColor }}
    >
      {link.label}
    </Nav.Link>
  ));

  const toggleButton =
    Object.hasOwn(config, "toggleButton") &&
    Object.hasOwn(config.toggleButton, "render")
      ? config.toggleButton.render()
      : null;

  return (
    <Navbar
      expand={"lg"}
      className="mb-3"
      style={{ backgroundColor: config.backgroundColor }}
    >
      <Container fluid>
        <Navbar.Brand href="#" style={{ color: config.fontColor }}>
          {brand}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`}>
          {toggleButton}
        </Navbar.Toggle>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
          style={{ backgroundColor: config.backgroundColor }}
        >
          <Offcanvas.Header closeButton />
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
