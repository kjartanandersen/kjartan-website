import { Props } from "../components/Projects/Model/Projects";

import mySiteImage from '../images/Projects/mysite.png';
import coffeeQuestImage from '../images/Projects/coffeQuest.png';
import inABindImage from '../images/Projects/inabind.png';
import todoImage from '../images/Projects/todo.png';



export const projectItems: Props[] = [
  {
    title: "My Website",
    descrpition: "My personal website that you are currently on",
    technology: ["React", "TypeScript", "Webpack", "Babel", "HTML", "CSS", "Netlify"],
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
  },
  {
    title: "Todo",
    descrpition: "A simple Todo app I made",
    technology: ["React", "TypeScript", "Webpack", "Babel", "HTML", "CSS", "Netlify"],
    image: todoImage,
    link: "https://kjartanmar.netlify.app/todo"
  }
];
