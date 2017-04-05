import React from "react";
import { Link } from "react-router";

const About = (props) => (
  <div>
    <h1>About component</h1>
    <div>{props.children}</div>
    <Link to="/">App</Link>

  </div>

);
export default About;