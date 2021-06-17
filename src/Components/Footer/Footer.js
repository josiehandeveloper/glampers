import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div id="contact" className="footer__container">
      <div className="footer__wrap">
        <p className="footer__copyright">
          © 2021 Glampers - Not actually a business made for learning purposes
        </p>
        <a
          className="link"
          href="mailto:jsphnhan@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fas fa-envelope-square"></i>
        </a>
        <a
          className="link"
          href="https://github.com/josiehandeveloper"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          className="link"
          href="https://www.linkedin.com/in/josephine-han/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
