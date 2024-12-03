import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import airfilter from "/images/app-design/desktop/image-airfilter.jpg";
import eyecam from "/images/app-design/desktop/image-eyecam.jpg";
import faceit from "/images/app-design/desktop/image-faceit.jpg";
import todo from "/images/app-design/desktop/image-todo.jpg";
import loopstudios from "/images/app-design/desktop/image-loopstudios.jpg";

import webDesignLarge from "/images/home/desktop/image-web-design-small.jpg";
import webDesignSmall from "/images/home/tablet/image-web-design.jpg";

import graphicDesignLarge from "/images/home/desktop/image-graphic-design.jpg";
import graphicDesignSmall from "/images/home/tablet/image-graphic-design.jpg";

import rightArrow from "/images/shared/desktop/icon-right-arrow.svg";

import useScrollToTop from "../utilities/useScrollToTop";

function AppDesign() {
  useScrollToTop();
  return (
    <section>
      <Container md="fluid">
        <Row className="margin-bottom-medium bg-warning mx-auto rounded-5 text-center text-white py-5 ">
          <Col className="d-flex flex-column justify-content-center align-items-center gap-3">
            <h2 className="display-6 fw-semibold ">App Design</h2>
            <p className="" style={{ maxWidth: "22rem" }}>
              Our mobile designs bring intuitive digital solutions to your
              customers right at their fingertips.
            </p>
          </Col>
        </Row>

        <Row className="margin-bottom-medium gx-md-5 gy-5">
          <Col
            as="a"
            href="#"
            md="4"
            className=" text-dark rounded-4 text-decoration-none overflow-hidden"
          >
            <div className="project-info rounded-4 overflow-hidden">
              <img
                src={airfilter}
                alt="image for shipping website"
                className="img-fluid"
              ></img>
              <div className=" text-center pt-4">
                <h4 className="location-title text-warning fs-3">AIRFILTER</h4>
                <p className="fs-6 mx-4 pb-4">
                  Solving the problem of poor indoor air quality by filtering
                  the air{" "}
                </p>
              </div>
            </div>
          </Col>

          <Col
            as="a"
            href="#"
            md="4"
            className=" text-dark rounded-4 text-decoration-none overflow-hidden"
          >
            <div className="project-info rounded-4 overflow-hidden">
              <img
                src={eyecam}
                alt="image for shipping website"
                className="img-fluid"
              ></img>
              <div className=" text-center pt-4">
                <h4 className="location-title text-warning fs-3">EYECAM</h4>
                <p className="fs-6 mx-4 pb-4">
                  Product that lets you edit your favorite photos and videos at
                  any time
                </p>
              </div>
            </div>
          </Col>

          <Col
            as="a"
            href="#"
            md="4"
            className=" text-dark rounded-4 text-decoration-none overflow-hidden"
          >
            <div className="project-info rounded-4 overflow-hidden">
              <img
                src={faceit}
                alt="image for shipping website"
                className="img-fluid"
              ></img>
              <div className=" text-center pt-4">
                <h4 className="location-title text-warning fs-3">FACEIT</h4>
                <p className="fs-6 mx-4 pb-4">
                  Get to meet your favorite internet superstar with the faceit
                  app
                </p>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="margin-bottom-medium gx-md-5 gy-5">
          <Col
            as="a"
            href="#"
            md="4"
            className=" text-dark rounded-4 text-decoration-none overflow-hidden"
          >
            <div className="project-info rounded-4 overflow-hidden">
              <img
                src={todo}
                alt="image for shipping website"
                className="img-fluid"
              ></img>
              <div className=" text-center pt-4">
                <h4 className="location-title text-warning fs-3">TODO</h4>
                <p className="fs-6 mx-4 pb-4">
                  A todo app that features cloud sync with light and dark mode
                </p>
              </div>
            </div>
          </Col>

          <Col
            as="a"
            href="#"
            md="4"
            className=" text-dark rounded-4 text-decoration-none overflow-hidden"
          >
            <div className="project-info rounded-4 overflow-hidden">
              <img
                src={loopstudios}
                alt="image for shipping website"
                className="img-fluid"
              ></img>
              <div className=" text-center pt-4">
                <h4 className="location-title text-warning fs-3">
                  LOOPSTUDIOS
                </h4>
                <p className="fs-6 mx-4 pb-4">
                  A VR experience app made for Loopstudios
                </p>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="margin-bottom-medium gx-3 gy-3">
          <Col
            md="6"
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <Link
              to="Designo/design/web-design"
              className="design-container d-flex mb-3 position-relative"
            >
              <picture className="web-img  position-relative rounded-5 overflow-hidden">
                <source
                  media="(max-width:767px)"
                  srcSet={webDesignSmall}
                ></source>
                <source
                  media="(min-width:768px)"
                  srcSet={webDesignLarge}
                ></source>
                <img
                  src={webDesignLarge}
                  alt="dark laptop image"
                  className="img-fluid rounded-5 position-relative"
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
            className="d-flex flex-column justify-content-start align-items-center"
          >
            <Link
              to="Designo/design/graphic-design"
              className="design-container d-flex position-relative overflow-hidden"
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
      </Container>
    </section>
  );
}

export default AppDesign;
