import { Button, Container, ListGroup, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

import logoLight from "/images/shared/desktop/logo-light.png";
import facebook from "/images/shared/desktop/icon-facebook.svg";
import twitter from "/images/shared/desktop/icon-twitter.svg";
import instagram from "/images/shared/desktop/icon-instagram.svg";
import pinterest from "/images/shared/desktop/icon-pinterest.svg";
import youtube from "/images/shared/desktop/icon-youtube.svg";
import { useEffect, useState } from "react";
import useScrollToTop from "../utilities/useScrollToTop";

function AppFooter() {
  const location = useLocation();
  useScrollToTop();

  return (
    <footer className="mt-5">
      {location.pathname !== "/contact" && (
        <section
          className="contact-us w-85 text-white rounded-4 d-flex flex-column flex-lg-row justify-content-between align-items-center gap-3 z-2 position-relative"
          style={{ marginBottom: "-5%" }}
        >
          <div className="footer-contact">
            <h3 className=" display-5 fw-normal">
              Let's talk about your project
            </h3>

            <p className="fs-6 fw-normal">
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </div>

          <Button
            type="button"
            variant="light"
            className="text-dark py-3 p-3 px-md-5 text-nowrap"
            as={Link}
            to="contact"
          >
            GET IN TOUCH
          </Button>
        </section>
      )}
      <section className="footer-details bg-dark text-center z-1 position-relative">
        <Container fluid="md" className="p-0">
          <Nav className="footer-nav pb-4 d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
            <Nav.Item className="bottom-border">
              <Nav.Link as={Link} to="/" className="">
                <img
                  src={logoLight}
                  alt="Brand Logo"
                  style={{ width: "12.5rem" }}
                  className=""
                ></img>
              </Nav.Link>
            </Nav.Item>

            <div className="d-flex flex-column flex-md-row ">
              <Nav.Item>
                <Nav.Link as={Link} to="/" className="text-white">
                  OUR COMPANY
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link as={Link} to="locations" className="text-white">
                  LOCATIONS
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link as={Link} to="contact" className="text-white">
                  CONTACT
                </Nav.Link>
              </Nav.Item>
            </div>
          </Nav>

          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 text-primary mt-4 text-start">
            <address>
              <p className="fw-bold mb-0">Designo Central Office</p>
              <p className="mb-0">3886 Wellington Street</p>
              <p className="mb-0">Toronto, Ontario M9C 3J5</p>
            </address>

            <address>
              <p className="fw-bold mb-0">Contact Us (Central Office)</p>
              <p className="mb-0">P : +1 253-863-8967</p>
              <p className="mb-0">M : contact@designo.co</p>
            </address>

            <ListGroup horizontal className="">
              <ListGroup.Item action className="p-0 border-0 bg-dark pe-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={facebook} alt="facebook icon"></img>
                </a>
              </ListGroup.Item>

              <ListGroup.Item action className="p-0 border-0 bg-dark pe-3">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={twitter} alt="twitter icon"></img>
                </a>
              </ListGroup.Item>

              <ListGroup.Item action className="p-0 border-0 bg-dark pe-3">
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={youtube} alt="youtube icon"></img>
                </a>
              </ListGroup.Item>

              <ListGroup.Item action className="p-0 border-0 bg-dark pe-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagram} alt="instagram icon"></img>
                </a>
              </ListGroup.Item>

              <ListGroup.Item action className="p-0 border-0 bg-dark pe-3">
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={pinterest} alt="pinterest icon"></img>
                </a>
              </ListGroup.Item>
            </ListGroup>
          </div>

          <div className="text-white mt-5">
            <p>
              Designed by
              <a
                className="author"
                target="_blank"
                href="https://www.frontendmentor.io/"
              >
                Frontend Mentor
              </a>
            </p>

            <p>
              Coded by
              <a
                className="author"
                target="_blank"
                href="https://github.com/Mustafa-Alie"
              >
                {" "}
                Mustafa Ali
              </a>
            </p>
          </div>
        </Container>
      </section>
    </footer>
  );
}

export default AppFooter;
