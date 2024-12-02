import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import heroPhone from "/images/home/desktop/image-hero-phone.png";
import WebDesignLarge from "/images/home/desktop/image-web-design-large.jpg";
import WebDesignSmall from "/images/home/tablet/image-web-design.jpg";

import appDesignLarge from "/images/home/desktop/image-app-design.jpg";
import appDesignSmall from "/images/home/tablet/image-app-design.jpg";

import graphicDesignLarge from "/images/home/desktop/image-graphic-design.jpg";
import graphicDesignSmall from "/images/home/tablet/image-graphic-design.jpg";

import rightArrow from "/images/shared/desktop/icon-right-arrow.svg";

import illustrationFriendly from "/images/home/desktop/illustration-friendly.svg";
import illustrationPassionate from "/images/home/desktop/illustration-passionate.svg";
import illustrationResourceful from "/images/home/desktop/illustration-resourceful.svg";

function OurCompany() {
  return (
    <section>
      <Container fluid="md">
        <Row className="hero-container bg-warning px-3 px-sm-5  pt-3 mt-5 mx-auto rounded-5 overflow-hidden gy-5 gx-md-5">
          <Col
            md="7"
            className=" text-white d-flex flex-column justify-content-center align-items-start gap-3"
          >
            <h2 className="display-6 fw-semibold">
              Award-winning custom designs and digital branding solutions
            </h2>

            <p>
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </p>

            <Button as={Link} to="about" className="btn-white py-3 px-5 mt-3">
              LEARN MORE
            </Button>
          </Col>
          <Col md="5" className="hero-img d-flex justify-content-center">
            <img src={heroPhone} alt="phone image" className="phone-img"></img>
          </Col>
        </Row>

        <Row className="mt-5 gx-3 gy-3">
          <Col md="6" className="d-flex justify-content-center">
            <Link
              to="design/web-design"
              className="design-container d-flex ms-md-auto position-relative"
            >
              <picture className="web-img  position-relative rounded-5 overflow-hidden">
                <source
                  media="(max-width:767px)"
                  srcSet={WebDesignSmall}
                ></source>

                <source
                  media="(min-width:768px)"
                  srcSet={WebDesignLarge}
                ></source>

                <img
                  src={WebDesignLarge}
                  alt="dark laptop image"
                  className="w-100 rounded-5 position-relative"
                ></img>
              </picture>

              <div className="position-absolute top-50 start-50 translate-middle text-white text-nowrap z-2">
                <h3 className="display-6 fw-semibold">WEB DESIGN</h3>
                <p className="fs-5 d-flex">
                  VIEW PROJECTS
                  <span className="ms-3 d-flex align-items-center">
                    <img src={rightArrow} alt="right arrow"></img>
                  </span>
                </p>
              </div>
            </Link>
          </Col>

          <Col
            md="6"
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <Link
              to="design/app-design"
              className="design-container d-flex mb-3 me-md-auto position-relative"
            >
              <picture className="web-img  position-relative rounded-5 overflow-hidden">
                <source
                  media="(max-width:767px)"
                  srcSet={appDesignSmall}
                ></source>
                <source
                  media="(min-width:768px)"
                  srcSet={appDesignLarge}
                ></source>
                <img
                  src={appDesignLarge}
                  alt="dark laptop image"
                  className="img-fluid rounded-5 position-relative"
                ></img>
              </picture>

              <div className="position-absolute top-50 start-50 translate-middle text-white text-nowrap z-2">
                <h3 className="display-6 fw-semibold">APP DESIGN</h3>
                <p className="fs-5 d-flex">
                  VIEW PROJECTS
                  <span className="ms-3 d-flex align-items-center">
                    <img src={rightArrow} alt="right arrow"></img>
                  </span>
                </p>
              </div>
            </Link>

            <Link
              to="design/graphic-design"
              className="design-container d-flex me-md-auto position-relative"
            >
              <picture className="web-img  position-relative rounded-5 overflow-hidden">
                <source
                  media="(max-width:767px)"
                  srcSet={graphicDesignSmall}
                ></source>
                <source
                  media="(min-width:768px)"
                  srcSet={graphicDesignLarge}
                ></source>
                <img
                  src={graphicDesignLarge}
                  alt="dark laptop image"
                  className="img-fluid rounded-5 position-relative"
                ></img>
              </picture>

              <div className="position-absolute top-50 start-50 translate-middle text-white text-nowrap z-2">
                <h3 className="display-6 fw-semibold text-nowrap">
                  GRAPHIC DESIGN
                </h3>
                <p className="fs-5 d-flex">
                  <span>VIEW PROJECTS</span>
                  <span className="ms-3 d-flex align-items-center">
                    <img src={rightArrow} alt="right arrow"></img>
                  </span>
                </p>
              </div>
            </Link>
          </Col>
        </Row>

        <Row className="mt-5 pt-5 justify-content-between g-5 px-5">
          <Col
            md="3"
            className="d-flex flex-column gap-3 align-items-center text-center"
          >
            <div className="illustration-container">
              <img
                src={illustrationPassionate}
                alt="passionate man working"
                className="img-fluid"
              ></img>
            </div>

            <h4>PASSIONATE</h4>
            <p>
              Each project starts with an in-depth brand research to ensure we
              only create products that serve a purpose. We merge art, design,
              and technology into exciting new solutions.
            </p>
          </Col>

          <Col
            md="3"
            className="d-flex flex-column gap-3 align-items-center text-center"
          >
            <div className="illustration-container">
              <img
                src={illustrationResourceful}
                alt="resourcefull woman working"
                className="img-fluid"
              ></img>
            </div>

            <h4>RESOURCEFUL</h4>
            <p>
              Everything that we do has a strategic purpose. We use an agile
              approach in all of our projects and value customer collaboration.
              It guarantees superior results that fulfill our clients' needs.
            </p>
          </Col>

          <Col
            md="3"
            className="d-flex flex-column gap-3 align-items-center text-center"
          >
            <div className="illustration-container">
              <img
                src={illustrationFriendly}
                alt="resourcefull woman working"
                className="img-fluid"
              ></img>
            </div>

            <h4>FRIENDLY</h4>
            <p>
              We are a group of enthusiastic folks who know how to put people
              first. Our success depends on our customers, and we strive to give
              them the best experience a company can provide.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default OurCompany;
