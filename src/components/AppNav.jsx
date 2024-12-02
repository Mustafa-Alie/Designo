import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

import logoDark from "/images/shared/desktop/logo-dark.png";
import TogglerHamburger from "/images/shared/mobile/icon-hamburger.svg";
import TogglerClose from "/images/shared/mobile/icon-close.svg";
import useScrollToTop from "../utilities/useScrollToTop";

function AppNav() {
  useScrollToTop();
  //handle navbar state externally to customize it
  const [expanded, setExpanded] = useState(false);

  return (
    <nav>
      <Navbar
        expand="md"
        bg="white"
        onToggle={() => {
          setExpanded(!expanded);
        }}
        className="p-0"
      >
        <Container fluid="md" className="p-0">
          <Navbar.Brand className="my-3">
            <NavLink>
              <img
                src={logoDark}
                alt="Brand Logo"
                style={{ width: "12.5rem" }}
              ></img>
            </NavLink>
          </Navbar.Brand>

          <Navbar.Toggle>
            {expanded ? (
              <img src={TogglerClose}></img>
            ) : (
              <img src={TogglerHamburger}></img>
            )}
          </Navbar.Toggle>

          <Navbar.Collapse id="mainNavbar">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/Designo" className="bg-md-white">
                OUR COMPANY
              </Nav.Link>

              <Nav.Link as={Link} to="about" className="bg-md-white">
                ABOUT
              </Nav.Link>

              <Nav.Link as={Link} to="contact" className="bg-md-white">
                CONTACT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/*     the Overlay      */}
      <div className={`nav-modal ${expanded ? "" : "d-none"}`}></div>
    </nav>
  );
}

export default AppNav;
