import React from "react";

import ProjectItem from "./ProjectItem";
import NavBar from "../NavBar/NavBar";

import { Props } from "./Model/Projects";

import "./ProjectsStyles.css";

import mySiteImage from './Images/mysite.png';


const projectItems: Props[] = [
  {
    title: "My Website",
    descrpition: "My personal website that you are currently on",
    technology: ["React", "TypeScript", "Webpack", "Babel", "HTML", "CSS"],
    image: mySiteImage
  },
];

function Projects() {
  return (
    <NavBar activeComp="projects">
      <div className="projects">
        {projectItems.map((proItem) => {
          return (
            <ProjectItem
              title={proItem.title}
              descrpition={proItem.descrpition}
              technology={proItem.technology}
              image={proItem.image}
            ></ProjectItem>
          );
        })}
      </div>
    </NavBar>
  );
}

export default Projects;
