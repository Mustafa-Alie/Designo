import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import aboutHeroLarge from "/images/about/desktop/image-about-hero.jpg";
import aboutHeroSmall from "/images/about/tablet/image-about-hero.jpg";

import aboutWorldClassLarge from "/images/about/desktop/image-world-class-talent.jpg";
import aboutWorldClassSmall from "/images/about/tablet/image-world-class-talent.jpg";

import canada from "/images/shared/desktop/illustration-canada.svg";
import australia from "/images/shared/desktop/illustration-australia.svg";
import UK from "/images/shared/desktop/illustration-united-kingdom.svg";

import realDealLarge from "/images/about/desktop/image-real-deal.jpg";
import realDealSmall from "/images/about/tablet/image-real-deal.jpg";

import useScrollToTop from "../utilities/useScrollToTop";

function About() {
  useScrollToTop();

  return (
    <section>
      <Container fluid="md">
        <Row className="margin-bottom-large g-0  rounded-4 overflow-hidden mx-5 mt-5">
          <Col
            xs={{ order: 2 }}
            md={{ span: 7, order: 1 }}
            className="circle-bg text-white text-center text-md-start bg-warning p-4 px-md-5 d-flex flex-column justify-content-center"
          >
            <h2 className="display-6 fw-semibold">About Us</h2>

            <p>
              Founded in 2010, we are a creative agency that produces lasting
              results for our clients. We’ve partnered with many startups,
              corporations, and nonprofits alike to craft designs that make real
              impact. We’re always looking forward to creating brands, products,
              and digital experiences that connect with our clients’ audiences.
            </p>
          </Col>

          <Col
            xs={{ order: 1 }}
            md={{ span: 5, order: 2 }}
            className="  overflow-hidden"
          >
            <picture className="">
              <source
                media="(max-width:767px)"
                srcSet={aboutHeroSmall}
              ></source>

              <source
                media="(min-width:768px)"
                srcSet={aboutHeroLarge}
              ></source>

              <img
                src={aboutHeroLarge}
                alt="group working together"
                className="about-hero-img w-100"
              ></img>
            </picture>
          </Col>
        </Row>

        <Row className="g-0 m-5  rounded-4 overflow-hidden">
          <Col md="5" className="">
            <picture>
              <source
                media="(max-width:767px)"
                srcSet={aboutWorldClassSmall}
              ></source>

              <source
                media="(min-width:768px)"
                srcSet={aboutWorldClassLarge}
              ></source>

              <img
                src={aboutWorldClassLarge}
                alt="group working together"
                className="about-hero-img w-100 "
              ></img>
            </picture>
          </Col>

          <Col className="world-class  text-center text-md-start p-4 px-md-5 d-flex flex-column justify-content-center">
            <h2 className="display-6 fw-semibold text-warning">
              World-class talent
            </h2>

            <p>
              We are a crew of strategists, problem-solvers, and technologists.
              Every design is thoughtfully crafted from concept to launch,
              ensuring success in its given market. We are constantly updating
              our skills in a myriad of platforms. Our team is
              multi-disciplinary and we are not merely interested in form —
              content and meaning are just as important. We give great
              importance to craftsmanship, service, and prompt delivery. Clients
              have always been impressed with our high-quality outcomes that
              encapsulates their brand’s story and mission.
            </p>
          </Col>
        </Row>

        <Row className="margin-bottom-large mt-5 pt-5 justify-content-between g-5 px-5">
          <Col
            md="3"
            className="d-flex flex-column gap-3 align-items-center text-center"
          >
            <div className="illustration-container">
              <img
                src={canada}
                alt="Buildings in Canada"
                className="img-fluid"
              ></img>
            </div>

            <h4 className="location-title">CANADA</h4>

            <Button
              as={Link}
              to="/locations"
              variant="warning"
              size="lg"
              className="text-white"
            >
              SEE LOCATION
            </Button>
          </Col>

          <Col
            md="3"
            className="d-flex flex-column gap-3 align-items-center text-center"
          >
            <div className="illustration-container">
              <img
                src={australia}
                alt="Sydny Opera"
                className="img-fluid"
              ></img>
            </div>

            <h4 className="location-title">AUSTRALIA</h4>

            <Button
              as={Link}
              to="/locations"
              variant="warning"
              size="lg"
              className="text-white"
            >
              SEE LOCATION
            </Button>
          </Col>

          <Col
            md="3"
            className="d-flex flex-column gap-3 align-items-center text-center"
          >
            <div className="illustration-container">
              <img
                src={UK}
                alt="London bridge icon"
                className="img-fluid"
              ></img>
            </div>

            <h4 className="location-title">UNITED KINGDOM</h4>

            <Button
              as={Link}
              to="/locations"
              variant="warning"
              size="lg"
              className="text-white"
            >
              SEE LOCATION
            </Button>
          </Col>
        </Row>

        <Row className="margin-bottom-large g-0  rounded-4 overflow-hidden mx-5">
          <Col
            xs={{ order: 2 }}
            md={{ span: 7, order: 1 }}
            className="world-class text-center text-md-start p-4 px-md-5 d-flex flex-column justify-content-center"
          >
            <h2 className="display-6 fw-semibold text-warning">
              The real deal
            </h2>

            <p>
              As strategic partners in our clients’ businesses, we are ready to
              take on any challenge as our own. Solving real problems require
              empathy and collaboration, and we strive to bring a fresh
              perspective to every opportunity. We make design and technology
              more accessible and give you tools to measure success. We are
              visual storytellers in appealing and captivating ways. By
              combining business and marketing strategies, we inspire audiences
              to take action and drive real results.
            </p>
          </Col>

          <Col
            xs={{ order: 1 }}
            md={{ span: 5, order: 2 }}
            className="  overflow-hidden"
          >
            <picture className="">
              <source media="(max-width:767px)" srcSet={realDealSmall}></source>

              <source media="(min-width:768px)" srcSet={realDealLarge}></source>

              <img
                src={realDealLarge}
                alt="group working together"
                className="about-hero-img w-100 "
              ></img>
            </picture>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
