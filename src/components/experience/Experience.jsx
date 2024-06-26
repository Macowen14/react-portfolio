import React from "react";
import skills from "../../data/skills.json";
import "./experience.scss";

const Experience = () => {
  return (
    <section className="experience" id="skills">
      <h2 className="title">My Skills</h2>
      <p className="introduction">
        As an aspiring full stack developer, I have acquired a diverse set of
        skills that span both front-end and back-end development. Below is a
        summary of the key technologies and tools I am proficient in:
      </p>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <img src={skill.image} alt={skill.title} className="skill-image" />
            <h3>{skill.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
