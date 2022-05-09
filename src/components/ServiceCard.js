import React from "react";
import { Card, Button } from "react-bootstrap";

const ServiceCard = ({ service }) => {
  return (
    <Card className="service p-3 h-100">
      <Card.Img variant="top" src={service.image} />
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Card.Title>{service.title}</Card.Title>
          <Card.Text>
            <b>Price: </b> ${service.price}
          </Card.Text>
          <Card.Text>
            <b>Description: </b> {service.description}
          </Card.Text>
        </div>
        <div>
          <Button variant="primary">Proceed Checkout</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;
