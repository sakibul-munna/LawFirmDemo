import React from "react";
import blogs from "../data/blogs";
import { Container } from "react-bootstrap";

const BlogScreen = () => {
  return (
    <Container fluid className="gx-0 my-3 py-3">
      {blogs.map((blog) => (
        <div>
          <h3>{blog.title}</h3>
          <b>Answer: </b>
          <p>{blog.description}</p>
        </div>
      ))}
    </Container>
  );
};

export default BlogScreen;
