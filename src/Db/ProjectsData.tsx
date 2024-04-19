import React from "react";
import { Props } from "../components/Projects/Model/Projects";

import coffeeQuestImage from "../images/Projects/coffeQuest.png";
import inABindImage from "../images/Projects/inabind.png";
import imSimImage from "../images/Projects/ImSimImage.png";

import { DiReact } from "react-icons/di";
import {
  SiTypescript,
  SiWebpack,
  SiBabel,
  SiHtml5,
  SiCss3,
  SiNetlify,
  SiCsharp,
  SiUnity,
} from "react-icons/si";

export const projectItems: Props[] = [
  {
    title: "CoffeeQuest",
    descrpition:
      "A video game me and other students worked on for a game development course in Reykjavík University",
    technology: [<SiUnity scale={1.5} />, <SiCsharp scale={1.5} />],
    image: coffeeQuestImage,
    link: "https://jonweekend.itch.io/coffee-quest",
  },
  {
    title: "In a Bind",
    descrpition:
      "A video game me and other students worked on for our Bachelor's Thesis at Reykjavík University",
    technology: [<SiUnity scale={1.5} />, <SiCsharp scale={1.5} />],
    image: inABindImage,
    link: "https://olafur97.itch.io/in-a-bind",
  },
  {
    title: "Immersive Sim",
    descrpition:
      "A short game I made for the Virtual Environments course at Reykjavík University",
    technology: [<SiUnity scale={1.5} />, <SiCsharp scale={1.5} />],
    image: imSimImage,
    link: "https://svidakjammi.itch.io/immersive-sim",
  },
];

// export const projectItems: Props[] = [
//   {
//     title: "My Website",
//     descrpition: "My personal website that you are currently on",
//     technology: ["react", "TypeScript", "Webpack", "Babel", "HTML", "CSS", "Netlify"],
//     image: mySiteImage,
//     link: "https://kjartanmar.netlify.app"
//   },
//   {
//     title: "CoffeeQuest",
//     descrpition: "A video game me and some students worked on for a game development course in Reykjavík University",
//     technology: ["Unity", "C#"],
//     image: coffeeQuestImage,
//     link: "https://jonweekend.itch.io/coffee-quest"
//   },
//   {
//     title: "In a Bind",
//     descrpition: "A video game me and some students worked on for our Bachelor's Thesis at Reykjavík University",
//     technology: ["Unity", "C#"],
//     image: inABindImage,
//     link: "https://olafur97.itch.io/in-a-bind"
//   },
//   {
//     title: "Todo",
//     descrpition: "A simple Todo app I made",
//     technology: ["React", "TypeScript", "Webpack", "Babel", "HTML", "CSS", "Netlify"],
//     image: todoImage,
//     link: "https://kjartanmar.netlify.app/todo"
//   }
// ];
