import React from "react";
import { Link } from "react-router-dom";

import ApprovedPageBase from "../components/ApprovedPageBase";
import { projects } from "../../Db/data";

import "./ContentPage.css";

const Portfolio: React.FC = () => {
  return (
    <ApprovedPageBase pullUp={false}>
      <div className="contentPage">
        <div className="pageHeader">
          <h1>Portfolio</h1>
          <Link to="/approved" className="backLink">
            &lt; Back
          </Link>
        </div>

        <div className="entryList">
          {projects.map((project) => (
            <div className="entry" key={project.id}>
              <div className="entryBody">
                <div className="entryTitleRow">
                  <h2 className="entryTitle">{project.title}</h2>
                  <span className="entryDate">{project.year}</span>
                </div>
                <p className="entrySub">{project.context}</p>
                <p className="entryDesc">{project.description}</p>
                {project.role && (
                  <p className="entryDesc">
                    <strong>My role:</strong> {project.role}
                  </p>
                )}

                <div className="tagRow">
                  {project.techStack.map((tech) => (
                    <span className="tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="linkRow">
                  {project.links.map((link) => (
                    <a
                      className="entryLink"
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ApprovedPageBase>
  );
};

export default Portfolio;
