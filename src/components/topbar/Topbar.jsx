import React from "react";
import "./topbar.scss";
import { Mail } from "@material-ui/icons";
import logo from "../../Rahul-logo.png";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <img className="logo-image" src={logo} alt=""></img>
          </a>

          <div className="itemContainer">
            <Mail className="icon" />
            <span>rahulraja.sbu@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
