import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import express from "/images/web-design/desktop/image-express.jpg";
import transfer from "/images/web-design/desktop/image-transfer.jpg";
import photon from "/images/web-design/desktop/image-photon.jpg";
import builder from "/images/web-design/desktop/image-builder.jpg";
import blogr from "/images/web-design/desktop/image-blogr.jpg";
import camp from "/images/web-design/desktop/image-camp.jpg";

import appDesignLarge from "/images/home/desktop/image-app-design.jpg";
import appDesignSmall from "/images/home/tablet/image-app-design.jpg";

import graphicDesignLarge from "/images/home/desktop/image-graphic-design.jpg";
import graphicDesignSmall from "/images/home/tablet/image-graphic-design.jpg";

import rightArrow from "/images/shared/desktop/icon-right-arrow.svg";

import useScrollToTop from "../utilities/useScrollToTop";

function WebDesign() {
  useScrollToTop();
  return (
    <section>
      <Container md="fluid">
        <Row className="margin-bottom-medium bg-warning mx-auto rounded-5 text-center text-white py-5 ">
          <Col className="d-flex flex-column justify-content-center align-items-center gap-3">
            <h2 className="display-6 fw-semibold ">Web Design</h2>
            <p className="" style={{ maxWidth: "22rem" }}>
              We build websites that serve as powerful marketing tools and bring
              memorable brand experiences.
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
                src={express}
                alt="image for shipping website"
                className="img-fluid"
              ></img>
              <div className=" text-center pt-4">
                <h4 className="location-title text-warning fs-3">EXPRESS</h4>
                <p className="fs-6 mx-4 pb-4">
                  A multi-carrier shipping website for ecommerce businesses
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
                src={transfer}
                alt="image for shipping website"
                className="img-fluid"
              ></img>
              <div className=" text-center pt-4">
                <h4 className="location-title text-warning fs-3">TRANSFER</h4>
                <p className="fs-6 mx-4 pb-4">
                  Site for low-cost money transfers and sending money within
                  seconds
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
                src={photon}
                alt="image for shipping website"
                className="img-fluid"
              ></img>
              <div className=" text-center pt-4">
                <h4 className="location-title text-warning fs-3">PHOTON</h4>
                <p className="fs-6 mx-4 pb-4">
                  A state-of-the-art music player with high-resolution audio and
                  DSP effects
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
                src={builder}
                alt="image for shipping website"
                className="img-fluid"
              ></img>
              <div className=" text-center pt-4">
                <h4 className="location-title text-warning fs-3">BUILDER</h4>
                <p className="fs-6 mx-4 pb-4">
                  Connects users with local contractors based on their location{" "}
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
                src={blogr}
                alt="image for shipping website"
                className="img-fluid"
              ></img>
              <div className=" text-center pt-4">
                <h4 className="location-title text-warning fs-3">BLOGR</h4>
                <p className="fs-6 mx-4 pb-4">
                  Blogr is a platform for creating an online blog or publication
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
                src={camp}
                alt="image for shipping website"
                className="img-fluid"
              ></img>
              <div className=" text-center pt-4">
                <h4 className="location-title text-warning fs-3">CAMP</h4>
                <p className="fs-6 mx-4 pb-4">
                  Get expert training in coding, data, design, and digital
                  marketing
                </p>
              </div>
            </div>
          </Col>
        </Row>

        <Row className=" gx-3 gy-3">
          <Col
            md="6"
            className="d-flex flex-column justify-content-start align-items-center"
          >
            <Link
              to="Designo/design/app-design"
              className="design-container d-flex mb-3 position-relative"
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

export default WebDesign;
