import React from "react";
import "./hero.scss";
import HeroImg from "../../assets/about.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="content">
        <h1 className="title">Hi there I'm Macowen Keru</h1>
        <p className="description">
          I'm a passionate and dedicated software developer based in Kirinyaga,
          Kenya. Currently, I'm pursuing my Certificate in Software Development
          at the Inceptor Institute of Technology in Nairobi, where I am honing
          my skills in web development and design.
        </p>
        <a href="mailto:mwingamacowen@gmail.com" className="btn">
          Contact me
        </a>
      </div>
      <img src={HeroImg} alt="hero image" className="heroImg" />
    </section>
  );
};

export default Hero;
