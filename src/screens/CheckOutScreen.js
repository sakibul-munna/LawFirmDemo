import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const CheckOutScreen = () => {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className="text"> Hello, Welcome to the checkout page. </h1>
      </div>
      <div className="my-3">
        <Form>
          <Form.Group className="mb-3" controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="name" placeholder="Enter Your First Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="firstName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="name" placeholder="Enter Your Last Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="firstName">
            <Form.Label>Address</Form.Label>
            <Form.Control type="address" placeholder="12/B Dhanmondi Dhaka" />
          </Form.Group>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button variant="success" type="submit">
              Information Submit
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default CheckOutScreen;
