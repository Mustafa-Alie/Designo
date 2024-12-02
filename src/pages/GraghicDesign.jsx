import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import appDesignLarge from "/images/home/desktop/image-app-design.jpg";
import appDesignSmall from "/images/home/tablet/image-app-design.jpg";

import webDesignLarge from "/images/home/desktop/image-web-design-small.jpg";
import webDesignSmall from "/images/home/tablet/image-web-design.jpg";

import rightArrow from "/images/shared/desktop/icon-right-arrow.svg";

import change from "/images/graphic-design/desktop/image-change.jpg";
import boxed from "/images/graphic-design/desktop/image-boxed-water.jpg";
import science from "/images/graphic-design/desktop/image-science.jpg";

import useScrollToTop from "../utilities/useScrollToTop";

function GraghicDesign() {
  useScrollToTop();
  return (
    <section>
      <Container md="fluid">
        <Row className="margin-bottom-medium bg-warning mx-auto rounded-5 text-center text-white py-5 ">
          <Col className="d-flex flex-column justify-content-center align-items-center gap-3">
            <h2 className="display-6 fw-semibold ">Graphic Design</h2>
            <p className="" style={{ maxWidth: "22rem" }}>
              We deliver eye-catching branding materials that are tailored to
              meet your business objectives.
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
                src={change}
                alt="image for shipping website"
                className="img-fluid"
              ></img>
              <div className=" text-center pt-4">
                <h4 className="location-title text-warning fs-3">TIM BROWN</h4>
                <p className="fs-6 mx-4 pb-4">
                  A book cover designed for Tim Brown’s new release, ‘Change’
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
                src={boxed}
                alt="image for shipping website"
                className="img-fluid"
              ></img>
              <div className=" text-center pt-4">
                <h4 className="location-title text-warning fs-3">
                  BOXED WATER
                </h4>
                <p className="fs-6 mx-4 pb-4">
                  A simple packaging concept made for Boxed Water
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
                src={science}
                alt="image for shipping website"
                className="img-fluid"
              ></img>
              <div className=" text-center pt-4">
                <h4 className="location-title text-warning fs-3">SCIENCE!</h4>
                <p className="fs-6 mx-4 pb-4">
                  A poster made in collaboration with the Federal Art Project
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
              to="/design/web-design"
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
              to="/design/app-design"
              className="design-container d-flex position-relative overflow-hidden"
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
                <h3 className="display-6 fw-semibold text-nowrap">
                  APP DESIGN
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

export default GraghicDesign;
