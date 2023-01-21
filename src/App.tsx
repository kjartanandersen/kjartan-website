// src/App.tsx
import React from "react";

import { Link } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import cvImage from "./components/CV/cv_image.jpg";

const App: React.FC = () => {

  return (
    <div>
      <NavBar activeComp="home">
        <div className="home">
          <div className="home-hero">
            <h1>Kjartan Már Andersen</h1>
            <h4>Software Developer</h4>
          </div>
          <div className="home-content">
            <div className="home-info">
              <img src={cvImage} className="home-image" />
              <div className="home-aboutme">
                <h4 className="home-about-text">
                  <b>About Me</b>
                </h4>
                <p>
                I am a Software Developer, born and raised in Reykjavík, Iceland and currently living there, currently looking for work.
                </p>
                <p>
                  I am passionate about programming, and I always strive to make high quality, readable and well documented code. I can work with other people, I am very flexible, initiative, confident
                  and very friendly.
                </p>
                <p>
                I am mostly interested in Full-Stack Web Development and Game Development, but I always love to stay up to date on the latest stuff related 
                to the world of Computer Science. 
                </p>
              </div>
            </div>
            <div className="flex">
              
                <Link to='/cv' className="home-bubble-link"><div>My Resume </div></Link>
                <Link to='/projects' className="home-bubble-link"><div>Projects </div></Link>
              
            </div>
          </div>
        </div>
      </NavBar>
    </div>
  );
};

export default App;
