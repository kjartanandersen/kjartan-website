import advaniaImage from "../Db/Images/CV/advania.png";
import ruImage from "../Db/Images/CV/ru.jpg";
import tskImage from "../Db/Images/CV/taeknisk.png";

export type EducationEntry = {
  name: string;
  dateFrom: string;
  dateTo: string;
  subject: string;
  description: string;
  image?: string;
};

export type ExperienceEntry = {
  company: string;
  dateFrom: string;
  dateTo: string;
  occupation: string;
  description: string;
  image?: string;
};

export const education: EducationEntry[] = [
  {
    name: "Reykjavik University",
    dateFrom: "2023",
    dateTo: "2025",
    subject: "Computer Science (MSc)",
    description:
      "Studied computer graphics, virtual environments and virtual agents. My master's thesis built a system for socially believable virtual agents on top of the MetaHuman framework in Unreal Engine.",
    image: ruImage,
  },
  {
    name: "Reykjavik University",
    dateFrom: "2017",
    dateTo: "2021",
    subject: "Computer Science (BSc)",
    description:
      "Studied web development with React and web services with .NET and Express.js, and specialized in computer graphics and real-time rendering with OpenGL. My final project was a 3D physics puzzle game, built in Unity with C#, in which the player spawns ropes and attaches them to objects to move them around and solve puzzles.",
    image: ruImage,
  },
  {
    name: "Technical College",
    dateFrom: "2012",
    dateTo: "2017",
    subject: "Computer Studies",
    description:
      "Upper-secondary studies in computing, laying the foundation for programming and systems work.",
    image: tskImage,
  },
];

export const workExperiences: ExperienceEntry[] = [
  {
    company: "Reykjavik University",
    dateFrom: "2024",
    dateTo: "2025",
    occupation: "Teaching Assistant",
    description:
      "Assisted students in the Programming I and Operating Systems courses, explaining technical concepts clearly to students with different levels of experience and troubleshooting programming and computer-related problems during laboratory sessions.",
    image: ruImage,
  },
  {
    company: "Advania",
    dateFrom: "2021",
    dateTo: "2022",
    occupation: "Software Specialist, Full Time",
    description:
      "Part of the Oracle team at Advania, developing and maintaining business software using Oracle APEX, PL/SQL and SQL. Worked closely with colleagues and customers to resolve software issues and improve business applications, building strong analytical and troubleshooting skills in a professional IT environment.",
    image: advaniaImage,
  },
  {
    company: "Reykjavik University",
    dateFrom: "2020",
    dateTo: "2020",
    occupation: "Programming Assistant, Summer Job",
    description:
      "Assisted with a master's research project on autonomous UAV landing involving Raspberry Pi and Jetson Nano embedded systems. Configured network communication over USB and supported software testing on Linux-based hardware.",
    image: ruImage,
  },
  {
    company: "N1",
    dateFrom: "2017",
    dateTo: "2020",
    occupation: "Receptionist",
    description:
      "Delivered friendly and efficient customer service in a fast-paced retail environment. Helped maintain store presentation, restocked merchandise, and worked collaboratively with colleagues while managing multiple tasks during busy periods.",
  },
];
