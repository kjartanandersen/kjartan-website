import React, { useEffect } from "react";

import ProjectItem from "./ProjectItem";

import { Props } from "./Model/Projects";

import { projectItems } from "../../Db/ProjectsData";

import "./ProjectsStyles.css";

const projectItemsData: Props[] = projectItems;

const Projects: React.FC = () => {
  useEffect(() => {
    document.title = "Projects";
  }, []);

  return (
    <div  className="projects">
      <h1>Projects</h1>
      <div className="projectItem">
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
    </div>
  );
}

export default Projects;
