// src/App.tsx
import React from "react";

import "./App.css";

import NavBar from "./components/NavBar/NavBar";

import cvImage from "./components/CV/cv_image.jpg";

const App = () => (
  <NavBar activeComp="home">
    <div className="home">
      <div className="home-info">
        <img src={cvImage} className="home-image" />
        <div className="home-aboutme">
          <h1 className="home-name"><b>Kjartan Már Andersen</b></h1>
          <h4><b>About Me:</b></h4>
          <p>
            I am a passionate recent computer science graduate and experienced
            software developer, who specializes in web development in frameworks
            like React and .NET. I am also experienced in programming languages
            like JavaScript, C#, C, C++, SQL, Java, Python and more.
          </p>
        </div>
      </div>
    </div>
  </NavBar>
);

export default App;
