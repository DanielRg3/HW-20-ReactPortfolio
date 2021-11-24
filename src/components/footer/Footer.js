import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Daniel Ruiz Gutierrez</h1>
        <p>Based in Toluca, Estado de Mexico, Mexico</p>
      </div>
      <div className="footer-contact">
        <p>Email: <a href="mailto:danielruizgtz@gmail.com" class="footer-link">danielruizgtz@gmail.com</a></p>
        <p>Moblie: 52-811-553-8368</p>
        <br/>
        <h3>Contact me</h3>
        <p>And let's get down to work</p>
      </div>
      <div className="footer-sns">
        <div className="design-by">Direct access to my social media:</div>
        <div className="sns-links">
          <a href="https://www.linkedin.com/in/daniel-ruiz-gutierrez-5ab6ba213/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://github.com/DanielRg3" target="_blank" rel="noreferrer">
            <i className="fab fa-github github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
