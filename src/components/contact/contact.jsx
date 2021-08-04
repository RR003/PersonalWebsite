import React, { useState } from "react";
import "./contact.scss";
import emailjs from "emailjs-com";
import {} from "emailjs-com";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const [email, setEmail] = useState(false);
  const [info, setInfo] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(true);
    try {
      const templateParams = {
        email: email,
        message: info,
      };
      console.log("hello");
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
      setMessage("message sent successfully!");
      document.getElementById("send").disabled = true;
    } catch (error) {
      setMessage("Error sending email");
      console.log(error);
    }
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img
          src="https://raw.githubusercontent.com/safak/youtube/da700015c8a88050fad7b961e99a7039638ab3b2/public/assets/shake.svg"
          alt=""
        />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <textarea
            placeholder="Message"
            onChange={(e) => setInfo(e.target.value)}
          ></textarea>
          <button type="submit" id="send">
            Send
          </button>
          <span>{message}</span>
        </form>
      </div>
    </div>
  );
}
