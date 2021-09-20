import React from "react";
import styled from "styled-components";
import "./about.scss";
import { Button } from "@material-ui/core";
import ProfilePic from "../../ProfilePic.JPG";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="left">
        <div className="inner">
          <div className="card">
            <p>
              Hello! My name is Rahul and I am currently an involved second year
              student studying computer science at Stony Brook University with
              an expected graduation date around December 2023. Ever since high
              school, I have loved programming and engaged in the field of
              software development, specifically creating fullstack web
              applications.
            </p>
            <p>
              I have experience with the software development cycle with my
              recent SDE internship experience @ SaveAway. In the future, I hope
              to become more involved in areas such as Machine Learning and
              Cloud Computing. Check out my projects down below and feel free to
              connect with me!
            </p>
          </div>
        </div>

        <div className="card2">
          <h3>Technical Skills</h3>
          <div className="buttons">
            <Button
              className="skill-button"
              variant="outlined"
              color="secondary"
            >
              Java
            </Button>
            <Button
              className="skill-button"
              variant="outlined"
              color="secondary"
            >
              JavaScript
            </Button>
            <Button
              className="skill-button"
              variant="outlined"
              color="secondary"
            >
              Python
            </Button>
            <Button
              className="skill-button"
              variant="outlined"
              color="secondary"
            >
              React.JS
            </Button>
            <Button
              className="skill-button"
              variant="outlined"
              color="secondary"
            >
              Github
            </Button>
            <Button
              className="skill-button"
              variant="outlined"
              color="secondary"
            >
              Spring-Boot
            </Button>

            <Button
              className="skill-button"
              variant="outlined"
              color="secondary"
            >
              SQL
            </Button>
            <Button
              className="skill-button"
              variant="outlined"
              color="secondary"
            >
              Node.JS
            </Button>
          </div>
        </div>
      </div>

      <div className="right">
        <img src={ProfilePic} alt="" />
      </div>
    </div>
  );
}
