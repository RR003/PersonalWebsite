import React from "react";
import { useEffect, useRef } from "react";
import "./intro.scss";
import { Button } from "@material-ui/core";
import { init } from "ityped";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      strings: ["Developer", "Student", "Creator"],
    });
  }, []);

  const openPdf = () => {
    console.log("hello");
    window.open("/assets/resume.pdf");
  };

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer"></div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm </h2>
          <h1>Rahul Raja</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>

          <h4>
            I am currently a 2nd year student majoring in CS @ Stony Brook
            Univeristy. I have a great understanding of full stack applications
            in both Java and Javascript. I also have a keen interest in Machine
            and Deep Learning, especially research involving computer vision.
            Feel free to contact and connect on my socials and browse through my
            portfolio.
          </h4>

          <div className="logos">
            <img
              src="/assets/linkedin.png"
              alt=""
              className="logo"
              onClick={() =>
                window.open("https://www.linkedin.com/in/rahul-raja-977b32203/")
              }
            />
            <img
              src="/assets/twitter.png"
              alt=""
              className="logo"
              onClick={() => window.open("https://twitter.com/RahulRaja003")}
            />
            <img
              src="/assets/github.png"
              alt=""
              className="logo"
              onclick={() => window.open("https://github.com/RR003")}
            />
          </div>

          <Button
            className="button"
            variant="contained"
            color="primary"
            onClick={openPdf}
          >
            View Resume
          </Button>
        </div>
      </div>
    </div>
  );
}
