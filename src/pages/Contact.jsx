import { useRef, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import canada from "/images/shared/desktop/illustration-canada.svg";
import australia from "/images/shared/desktop/illustration-australia.svg";
import UK from "/images/shared/desktop/illustration-united-kingdom.svg";
import useScrollToTop from "../utilities/useScrollToTop";

function Contact() {
  useScrollToTop();

  const inputRef = useRef([]);
  const addRef = (el) => {
    if (el && !inputRef.current.includes(el)) {
      inputRef.current.push(el);
    }
  };

  //handle react-bootstrap form validation:
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    console.log(inputRef.current);
  };

  return (
    <section>
      <Container fluid="md" className="p-0">
        <Row className="margin-bottom-large bg-warning  g-0  rounded-4 overflow-hidden mx-md-5 mt-5">
          <Col
            md="6"
            className="text-white text-center text-md-start p-4 px-md-5 d-flex flex-column justify-content-center"
          >
            <h2 className="display-6 fw-semibold">Contact Us</h2>

            <p>
              Ready to take it to the next level? Let’s talk about your project
              or idea and find out how we can help your business grow. If you
              are looking for unique digital experiences that’s relatable to
              your users, drop us a line.
            </p>
          </Col>

          <Col md="6">
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              className="py-5 px-4 d-flex flex-column gap-5 justify-content-center "
            >
              <div className="position-relative">
                <Form.Control
                  ref={addRef}
                  required
                  size="lg"
                  type="text"
                  placeholder="Name"
                  className="input-field bg-warning text-white
                   border-top-0 border-start-0 border-end-0 border-bottom-1 rounded-0 border-white  
                  "
                />

                <Form.Control.Feedback
                  type="invalid"
                  className="m-0 p text-end pe-5"
                >
                  <p
                    className="error fst-italic text-white position-absolute"
                    style={{ right: "3rem", top: "10px" }}
                  >
                    Can't be empty
                  </p>
                </Form.Control.Feedback>
              </div>

              <div className="position-relative">
                <Form.Control
                  ref={addRef}
                  required
                  size="lg"
                  type="email"
                  placeholder="Email"
                  className="input-field bg-warning text-white
                   border-top-0 border-start-0 border-end-0 border-bottom-1 rounded-0 border-white  
                  "
                />

                <Form.Control.Feedback
                  type="invalid"
                  className="m-0  text-end pe-5"
                >
                  <p
                    className="error fst-italic text-white position-absolute"
                    style={{ right: "3rem", top: "10px" }}
                  >
                    {inputRef.current.at(0)?.value === ""
                      ? "Can't be empty"
                      : "invalid Email format"}
                  </p>
                </Form.Control.Feedback>
              </div>

              <div className="position-relative">
                <Form.Control
                  ref={addRef}
                  required
                  size="lg"
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  placeholder="Phone"
                  className="input-field bg-warning text-white
                   border-top-0 border-start-0 border-end-0 border-bottom-1 rounded-0 border-white  
                  "
                />

                <Form.Control.Feedback
                  type="invalid"
                  className="m-0  text-end pe-5"
                >
                  <p
                    className="error fst-italic text-white position-absolute"
                    style={{ right: "3rem", top: "10px" }}
                  >
                    {inputRef.current.at(1)?.value === ""
                      ? "Can't be empty"
                      : "invalid Phone format"}
                  </p>
                </Form.Control.Feedback>
              </div>

              <div className="position-relative">
                <Form.Control
                  as="textarea"
                  rows="3"
                  required
                  size="lg"
                  placeholder="Your Message"
                  className="input-field bg-warning text-white
                   border-top-0 border-start-0 border-end-0 border-bottom-1 rounded-0 border-white  
                  "
                />

                <Form.Control.Feedback
                  type="invalid"
                  className="m-0  text-end pe-5"
                >
                  <p
                    className="error fst-italic text-white position-absolute"
                    style={{ right: "3rem", top: "10px" }}
                  >
                    Can't be empty
                  </p>
                </Form.Control.Feedback>
              </div>

              <Button
                type="submit"
                variant="light"
                size="lg"
                className="form-btn text-dark align-self-end me-5"
              >
                SUBMIT
              </Button>
            </Form>
          </Col>
        </Row>

        <Row className="margin-bottom-large justify-content-between g-5 px-5">
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
              to="/Designo/locations"
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
              to="/Designo/locations"
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
              to="/Designo/locations"
              variant="warning"
              size="lg"
              className="text-white"
            >
              SEE LOCATION
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
