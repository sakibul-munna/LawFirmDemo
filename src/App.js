import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import BlogScreen from "./screens/BlogScreen";
import AboutScreen from "./screens/AboutScreen";
import LoginScreen from "./screens/LoginScreen";
import CheckOutScreen from "./screens/CheckOutScreen";
import PrivateRoute from "./PrivateRoute";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Container fluid className="gx-0">
      <Header />
      <main>
        <Routes>
          <Route path="/" exact element={<HomeScreen />} />
          <Route path="/blogs" exact element={<BlogScreen />} />
          <Route path="/about" exact element={<AboutScreen />} />
          <Route path="/login" exact element={<LoginScreen />} />
          <Route exact path="/checkout" element={<PrivateRoute />}>
            <Route exact path="/checkout" element={<CheckOutScreen />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </Container>
  );
}

export default App;
