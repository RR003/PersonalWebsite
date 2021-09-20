import React from "react";
import { useEffect, useRef } from "react";
import "./intro.scss";
import { Button } from "@material-ui/core";
import { init } from "ityped";
import twitter from "../../twitter.png";
import github from "../../github.png";
import linkedin from "../../linkedin.png";
import resume from "../../resume.pdf";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      strings: ["Developer", "Student", "Creator", "Learner", "Engineer"],
    });
  }, []);

  const openPdf = () => {
    window.open(resume);
  };

  return (
    <div className="intro" id="intro">
      {/*<div className="left">
        <div className="imgContainer">
          <img src={profilePic} alt="" />
        </div>
  </div>*/}
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm </h2>
          <h1>Rahul Raja</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>

          <h4>
            I am a 2nd year student majoring in CS @ Stony Brook Univeristy. I
            have a great understanding of full stack applications in both Java
            and Javascript. I am currently seeking SWE or ML internship
            opportunities for the Summer of 2022 Feel free to contact and
            connect on my socials and browse through my portfolio!
          </h4>

          <div className="logos">
            <img
              src={linkedin}
              alt=""
              className="logo"
              onClick={() =>
                window.open("https://www.linkedin.com/in/rahul-raja-977b32203/")
              }
            />
            <img
              src={twitter}
              alt=""
              className="logo"
              onClick={() => window.open("https://twitter.com/RahulRaja003")}
            />
            <img
              src={github}
              alt=""
              className="logo"
              onClick={() => window.open("https://github.com/RR003")}
            />
          </div>

          <Button
            className="button"
            variant="contained"
            color="secondary"
            onClick={openPdf}
          >
            View Resume
          </Button>
        </div>
      </div>
    </div>
  );
}
