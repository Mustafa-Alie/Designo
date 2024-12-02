import { Col, Container, Row } from "react-bootstrap";
import GoogleMaps from "../components/GoogleMaps";
import useScrollToTop from "../utilities/useScrollToTop";

function Locations() {
  useScrollToTop();

  return (
    <section className="p-0 p-md-5">
      <Container fluid="md" className="">
        <Row className="margin-bottom-medium">
          <Col md="5" className="p-3">
            <GoogleMaps coords={{ lat: 43.6484673, lng: -79.3822378 }} />
          </Col>

          <Col md="7" className="p-3">
            <div
              className="address-container rounded-4 d-flex flex-column justify-content-center p-4 ps-md-5"
              style={{ height: "20rem" }}
            >
              <h3 className="p-4 ps-md-5 display-6 fw-semibold text-warning">
                Canada
              </h3>

              <div className="px-4 ps-md-5 d-flex flex-column flex-md-row gap-md-5">
                <address>
                  <p className="fw-bold mb-0">Designo Central Office</p>
                  <p className="mb-0">3886 Wellington Street</p>
                  <p className="mb-0">Toronto, Ontario M9C 3J5</p>
                </address>

                <address>
                  <p className="fw-bold mb-0">Contact</p>
                  <p className="mb-0">P : +1 253-863-8967</p>
                  <p className="mb-0">M : contact@designo.co</p>
                </address>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="margin-bottom-medium">
          <Col md="7" className="p-3 order-2 order-md-1">
            <div
              className="address-container rounded-4 d-flex flex-column justify-content-center p-4 ps-md-5"
              style={{ height: "20rem" }}
            >
              <h3 className="p-4 ps-md-5 display-6 fw-semibold text-warning">
                Australia
              </h3>

              <div className="px-4 ps-md-5 d-flex flex-column flex-md-row gap-md-5">
                <address>
                  <p className="fw-bold mb-0">Designo AU Office</p>
                  <p className="mb-0">19 Balonne Street</p>
                  <p className="mb-0">New South Wales 2443</p>
                </address>

                <address>
                  <p className="fw-bold mb-0">Contact</p>
                  <p className="mb-0">P: (02) 6720 9092</p>
                  <p className="mb-0">M: contact@designo.au</p>
                </address>
              </div>
            </div>
          </Col>

          <Col md="5" className="p-3 order-1 order-md-2">
            <GoogleMaps coords={{ lat: -30.329384, lng: 149.788212 }} />
          </Col>
        </Row>

        <Row className="">
          <Col md="5" className="p-3">
            <GoogleMaps coords={{ lat: 51.732095, lng: 3.861195 }} />
          </Col>

          <Col md="7" className="p-3">
            <div
              className="address-container rounded-4 d-flex flex-column justify-content-center p-4 ps-md-5"
              style={{ height: "20rem" }}
            >
              <h3 className="p-4 ps-md-5 display-6 fw-semibold text-warning">
                United Kingdom
              </h3>

              <div className="px-4 ps-md-5 d-flex flex-column flex-md-row gap-md-5">
                <address>
                  <p className="fw-bold mb-0">Designo UK Office</p>
                  <p className="mb-0">13 Colorado Way</p>
                  <p className="mb-0">Rhyd-y-fro SA8 9GA</p>
                </address>

                <address>
                  <p className="fw-bold mb-0">Contact</p>
                  <p className="mb-0">P: 078 3115 1400</p>
                  <p className="mb-0">M: contact@designo.uk</p>
                </address>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Locations;
