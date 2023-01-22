import React from "react";

import ProjectItem from "./ProjectItem";
import NavBar from "../NavBar/NavBar";

import { Props } from "./Model/Projects";

import { projectItems } from "../../Db/ProjectsData";

import "./ProjectsStyles.css";

const projectItemsData: Props[] = projectItems;

function Projects() {
  return (
    <NavBar activeComp="projects">
      <div className="projects">
        {projectItemsData.map((proItem) => {
          return (
            <ProjectItem
              title={proItem.title}
              descrpition={proItem.descrpition}
              technology={proItem.technology}
              image={proItem.image}
              link={proItem.link}
            ></ProjectItem>
          );
        })}
      </div>
    </NavBar>
  );
}

export default Projects;
