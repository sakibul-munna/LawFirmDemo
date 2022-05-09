import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import services from "../data/services";
import ServiceCard from "../components/ServiceCard";
import Slider from "../components/Slider";

const HomeScreen = () => {
  return (
    <Container fluid className="gx-0">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#037ffc",
        }}
      >
        <h1 className="text"> Best Legal Consultancy </h1>
      </div>

      <div className="my-3">
        <Slider />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#037ffc",
        }}
      >
        <h1 className="text"> My Services </h1>
      </div>

      <Container className="my-3">
        <Row>
          {services.map((service) => (
            <Col className="my-4" sm={12} md={6} lg={4} xl={3}>
              <ServiceCard key={service.id} service={service} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default HomeScreen;
