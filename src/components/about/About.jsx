import React from "react";
import "./about.scss";
import AboutImg from "../../assets/aboutImg.png";
import cursorIcon from "../../assets/cursorIcon.png";
import server from "../../assets/server.png";

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="title">About</h2>
      <div className="content">
        <img className="aboutImage" src={AboutImg} alt="about Image" />
        <ul className="aboutItems">
          <li className="aboutItem">
            <img className="aboutItemImage" src={cursorIcon} alt="cursor" />
            <div className="aboutItemText">
              <h3>Frontend Developer</h3>
              <p>
                I am an aspiring Frontend Developer with a strong passion for
                building user-friendly and interactive web applications. My
                focus is on creating intuitive and dynamic user experiences.
              </p>
            </div>
          </li>
          <li className="aboutItem">
            <img
              className="aboutItemImage img-fluid"
              src={server}
              alt="server"
            />
            <div className="aboutItemText ms-2">
              <h3>Backend Developer</h3>
              <p>
                I am knowledgeable in backend development and skilled at
                developing fast and optimized APIs. I enjoy working on
                server-side logic, database integration, and ensuring seamless
                communication between the frontend and backend.
              </p>
            </div>
          </li>
          <li className="aboutItem">
            <img className="aboutItemImage" src={cursorIcon} alt="cursor" />
            <div className="aboutItemText">
              <h3>Full Stack Developer</h3>
              <p>
                I am an aspiring Full Stack Developer with a passion for
                building complete web applications. My goal is to combine my
                frontend and backend skills to create cohesive and efficient web
                solutions.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
