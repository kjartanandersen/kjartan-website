import React from "react";

import { Props } from "./Model/Projects";

import "./ProjectItemStyles.css";

const ProjectItem: React.FC<Props> = (props: Props) => {
  return (
    <a className="project-item-link" href={props.link}>
      <div className="project-item">
        <img src={props.image}></img>
        <hr></hr>
        <h4>{props.title}</h4>
        <p>{props.descrpition}</p>
        <div className="project-item-tech">
          {props.technology.map((tech, index) => {
            return <p>{tech}</p>;
          })}
        </div>
      </div>
    </a>
  );
};

export default ProjectItem;
