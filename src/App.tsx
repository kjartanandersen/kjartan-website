// src/App.tsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";

import cvImage from "./images/CV/cv_image.jpg";
import hrefImage from "./images/Home/downIcon.png";

import "./App.css";
import Projects from "./components/Projects/Projects";
import CV from "./components/CV/CV";

const App = (): JSX.Element => {
  const projectRef = useRef(null);

  useEffect(() => {
    document.title = "Kjartan Már Andersen";
  }, []);

  const onClickhomeAboutHref = (gotoString: string) => {
    document.getElementById(gotoString)?.scrollIntoView();
  };

  return (
    <NavBar activeComp="home" gotoHrefFunc={onClickhomeAboutHref}>
      <div className="home">
        <div className="home-hero">
          <h1 data-testid="app-name">Kjartan Már Andersen</h1>
          <h4>Software Developer</h4>
        </div>
        <a
          id="home-about-href"
          onClick={() => {
            onClickhomeAboutHref("home-about-href");
          }}
          className="home-link-to-about-me"
        >
          <img src={hrefImage} />
        </a>

        <div className="home-content">
          <h4 className="home-about-text">
            <b>About Me</b>
          </h4>
          <p className="home-about-paragraph">
            I am a Software Developer, born and raised in Reykjavík, Iceland and
            currently living there, currently currently pursuing a master's
            degree in Computer Science at Reykjavík University.
          </p>
          <p className="home-about-paragraph">
            I am passionate about programming, and I always strive to make high
            quality, readable and well documented code. I can work with other
            people, I am very flexible, initiative, confident and very friendly.
          </p>
          <p className="home-about-paragraph">
            I am mostly interested in Game Development, Virtual Environments and
            Web Development, but I always love to stay up to date on the latest
            stuff related to the world of Computer Science.
          </p>
          <p className="home-about-paragraph">
            You can learn more about me by taking a look at my
            <a
              onClick={() => {
                onClickhomeAboutHref("cv-href");
              }}
              className="home-bubble-link"
            >
              <div>resume</div>
            </a>
            and you can also take a look at my personal
            <a
              onClick={() => {
                onClickhomeAboutHref("projects-href");
              }}
              className="home-bubble-link"
            >
              <div>projects.</div>
            </a>
          </p>
        </div>
        <div id="projects-href" className="href-anchor"></div>
        <Projects />
        <div id="cv-href" className="href-anchor"></div>
        <CV />
      </div>
    </NavBar>
  );
};

export default App;
