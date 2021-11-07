import React from "react";
import ProjectCard from "../projectCard/project-card";
import { ProjectData } from "../../../data/projects";
import Separator from "../../common/separator/index";
import { Container, Subtitle } from "./styles";
function Projects() {
  const data = ProjectData;
  return (
    <Container>
      <Separator />
      <Subtitle>Projects</Subtitle>
      <div>
        {data.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </Container>
  );
}

export default Projects;
