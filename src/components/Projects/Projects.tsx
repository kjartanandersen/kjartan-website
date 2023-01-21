import React from "react";

import ProjectItem from "./ProjectItem";
import NavBar from "../NavBar/NavBar";

import { Props } from "./Model/Projects";

import "./ProjectsStyles.css";

import mySiteImage from './Images/mysite.png';
import coffeeQuestImage from './Images/coffeQuest.png';
import inABindImage from './Images/inabind.png';



const projectItems: Props[] = [
  {
    title: "My Website",
    descrpition: "My personal website that you are currently on",
    technology: ["React", "TypeScript", "Webpack", "Babel", "HTML", "CSS"],
    image: mySiteImage,
    link: "https://kjartanmar.netlify.app"
  },
  {
    title: "CoffeeQuest",
    descrpition: "A video game me and some students worked on for a game development course in Reykjavík University",
    technology: ["Unity", "C#"],
    image: coffeeQuestImage,
    link: "https://jonweekend.itch.io/coffee-quest"
  },
  {
    title: "In a Bind",
    descrpition: "A video game me and some students worked on for our Bachelor's Thesis at Reykjavík University",
    technology: ["Unity", "C#"],
    image: inABindImage,
    link: "https://olafur97.itch.io/in-a-bind"
  }
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
              link={proItem.link}
            ></ProjectItem>
          );
        })}
      </div>
    </NavBar>
  );
}

export default Projects;
