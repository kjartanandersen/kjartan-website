import React from "react";
import { Link } from "react-router-dom";

import ApprovedPageBase from "../components/ApprovedPageBase";
import myPhoto from "../../assets/images/approved/photo.jpg";

import "./Approved.css";

const sections = [
  { label: "Portfolio", to: "/portfolio" },
  { label: "Experience", to: "/experience" },
  { label: "Education", to: "/education" },
  { label: "Blog", to: "/blog" },
];

const Approved: React.FC = () => {
  return (
    <ApprovedPageBase>
      <div className="mainPage">
        <div className="content">
          <div className="leftSide">
            <h1>About Me</h1>
            <img alt="Me" src={myPhoto} />
            <p className="aboutText">
              I hold a BSc and an MSc in Computer Science from Reykjavík
              University, where I studied computer graphics, virtual
              environments and virtual agents. Outside of that I&apos;ve
              written a game engine from scratch in C++ and shipped games in
              Unity, working on gameplay systems, physics and audio.
            </p>
          </div>
          <div className="rightSide">
            {sections.map((section) => (
              <div className="rightSideRow" key={section.to}>
                <div className="bullet" />
                <Link to={section.to} className="rightSideLink">
                  {section.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ApprovedPageBase>
  );
};

export default Approved;
