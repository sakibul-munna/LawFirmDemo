import React from "react";
import { Card, Button } from "react-bootstrap";

const ServiceCard = ({ service }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={service.image} />
      <Card.Body>
        <Card.Title>{service.title}</Card.Title>
        <Card.Text>
          <b>Price: </b> ${service.price}
        </Card.Text>
        <Card.Text>
          <b>Description: </b> {service.description}
        </Card.Text>
        <Button variant="primary">Proceed Checkout</Button>
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;
