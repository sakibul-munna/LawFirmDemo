import React, { useState, useRef } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import "./LoginScreen.css";
import { useAuth } from "../contexts/authContext";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logIn } = useAuth();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    await logIn(emailRef.current.value, passwordRef.current.value);
    navigate("/");
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: "80vh",
      }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card style={{ borderRadius: "20px", border: "2px solid #037ffc" }}>
          <Card.Body>
            <h2
              className="text-center mb-4"
              style={{ color: "#037ffc", fontFamily: "Arial" }}
            >
              Log In
            </h2>
            <hr className="hrline my-3" />
            <Form onSubmit={submitHandler}>
              <Form.Group id="email">
                <Form.Label style={{ color: "#037ffc", fontFamily: "Arial" }}>
                  <strong>Email</strong>
                </Form.Label>
                <Form.Control
                  value={email}
                  ref={emailRef}
                  type="email"
                  required
                  placeholder="Enter Email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="login-input-box"
                />
              </Form.Group>
              <Form.Group id="password" className="mt-3">
                <Form.Label style={{ color: "#037ffc", fontFamily: "Arial" }}>
                  <strong>Password</strong>
                </Form.Label>
                <Form.Control
                  value={password}
                  ref={passwordRef}
                  type="password"
                  required
                  placeholder="Enter Password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="login-input-box"
                />
              </Form.Group>
              <Button
                className="w-100 my-4 login-submit-button"
                type="submit"
                variant="primary"
              >
                Log In
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default LoginScreen;
