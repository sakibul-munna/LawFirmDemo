import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import BlogScreen from "./screens/BlogScreen";
import AboutScreen from "./screens/AboutScreen";

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <AboutScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
