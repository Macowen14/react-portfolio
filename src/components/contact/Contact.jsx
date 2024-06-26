import React from "react";
import { FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import "./contact.scss";
const Contact = () => {
  return (
    <footer id="contact">
      <div className="container text">
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className="links">
        <li className="link">
          <span className="icon">
            <MdEmail />
          </span>{" "}
          <a href="mailto:mwingamacowen@gmail.com">mwingamacowen@gmail.com</a>
        </li>
        <li className="link">
          <span className="icon">
            <FaLinkedin />
          </span>
          <a href="https://www.linkedin.com/macowen">linkedin/macowen</a>
        </li>
        <li className="link">
          <span className="icon">
            {" "}
            <FaGithub />
          </span>
          <a href="https://www.github.com/Macowen14">github.com/Macowen14</a>
        </li>
        <li className="link">
          <span className="icon">
            {" "}
            <FaInstagram />
          </span>
          <a href="https://www.instagram.com/macowenK">macowenK</a>
        </li>
        <li className="link">
          <span className="icon">
            {" "}
            <FaPhone />
          </span>
          +254 786 813159
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
