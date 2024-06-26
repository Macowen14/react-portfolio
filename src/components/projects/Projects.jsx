import React from "react";
import "./projects.scss";
import {
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardText,
  Button,
} from "react-bootstrap";
import projectImg from "../../assets/project.jpeg";
import projects from "../../data/projects.json";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="title">Projects</h2>
      <div className="cards">
        {projects.map((project, index) => (
          <Card style={{ width: "18rem" }} key={index}>
            <CardImg variant="top" src={projectImg} alt="image of project" />
            <CardBody>
              <CardTitle>{project.name}</CardTitle>
              <CardText>{project.description}</CardText>
              <div className="lang d-flex">
                {project.languages.map((lang, index) => (
                  <CardText key={index}>{lang}</CardText>
                ))}
              </div>

              <Button variant="primary" href={project.source}>
                Source code
              </Button>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
