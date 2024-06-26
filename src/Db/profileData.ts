import { ProfileProp } from "../_types/ProfileProps.d";

import advaniaImage from '../images/CV/advania.png';
import ruImage from '../images/CV/ru.jpg';
import tskImage from '../images/CV/taeknisk.png';
import cvImage from '../images/CV/cv_image.jpg';

export const profileData: ProfileProp = {
  id: "63a906353e282d9b9ab8965d",
  info: {
    name: "Kjartan Már Andersen",
    about_me:
      "I am a passionate recent computer science graduate and experienced software developer, who specializes in web development in frameworks like React and .NET. I am also experienced inprogramming languages like JavaScript, C#, C, C++, SQL, Java, Python and more",
    current_residence: "Reykjavik, Iceland",
    date_of_birth: new Date("1996-09-23T00:00:00.000000+00:00"),
    ssn: "2309962379",
    phone: "+354 820-9623",
    email: "kjartan1@live.com",
    image: cvImage,
  },

  hobbies: ["Video Games", "Movies", "Music", "Computers", "Football"],
  languages: [
    {
      name: "Icelandic",
      proficiency: "Mother Language",
    },
    {
      name: "English",
      proficiency: "Proficient",
    },
  ],
  skills: [
    {
      name: "Java",
      proficiency: "Excellent",
    },
    {
      name: "Python",
      proficiency: "Excellent",
    },
    {
      name: "C",
      proficiency: "Excellent",
    },
    {
      name: "C++",
      proficiency: "Excellent",
    },
    {
      name: "C#",
      proficiency: "Excellent",
    },
    {
      name: "JavaScript",
      proficiency: "Excellent",
    },
    {
      name: "NodeJS",
      proficiency: "Excellent",
    },
    {
      name: "React",
      proficiency: "Excellent",
    },
    {
      name: ".NET",
      proficiency: "Excellent",
    },
    {
      name: "SQL",
      proficiency: "Excellent",
    },
    {
      name: "Linux",
      proficiency: "Excellent",
    },
    {
      name: "Windows",
      proficiency: "Excellent",
    },
    {
      name: "OpenGL",
      proficiency: "Good",
    },
    {
      name: "Unity",
      proficiency: "Good",
    },
  ],
  references: [
    {
      name: "Eiríkur Sæmundsson",
      email: "eirikur.saemundsson@advania.is",
      phone: "",
    },
  ],
  education: [
    {
      name: "Reykjavik University",
      date_from: "2023",
      date_to: "2025",
      subject: "Computer Science (MSc)",
      description:
        "",
      image: ruImage,
    },
    {
      name: "Reykjavik University",
      date_from: "2017",
      date_to: "2021",
      subject: "Computer Science (BSc)",
      description:
        "My final project for my Bachelor’s was a video game that I made with 3 other students. It is a 3D physics puzzle game where the player uses a rope that he can spawn, and can attach it to objects and move them around using it. It was made in Unity using C# as a programming language.",
      image: ruImage,
    },

    {
      name: "Technical College",
      date_from: "2012",
      date_to: "2017",
      subject: "Computer Studies",
      description: "",
      image: tskImage,
    },
  ],
  work_experiences: [
    {
      company_name: "Advania",
      date_from: "2021",
      date_to: "2022",
      occupation: "Software Specialist, Full Time",
      description:
        "Worked as part of the Oracle team at Advania. I was tasked in developing and maintaining applications in Oracle APEX that customers would use for ledger reports. I also created and maintained packages in the database in PL/SQL that the applications would utilize. I also did some minor JavaScript on the applications.",
      image: advaniaImage,
    },

    {
      company_name: "Reykjavik University",
      date_from: "2020",
      date_to: "2020",
      occupation: "Programming Assistant, Summer Job",
      description:
        "Paid summer job where I was tasked in assisting a student developing his Master's thesis in autonomous UAV landing. I was tasked in setting up networks for the Raspberry Pi and Jetson Nano on the drone, and make network communications possible through USB.",
      image: ruImage,
    },
  ],
  links: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/kjartan-m%C3%A1r-andersen-894abb1a6/",
    },
    {
      name: "GitHub",
      url: "https://github.com/kjartanandersen",
    },
  ],
};

