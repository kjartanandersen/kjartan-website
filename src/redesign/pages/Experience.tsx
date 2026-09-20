import React from "react";
import { Link } from "react-router-dom";

import ApprovedPageBase from "../components/ApprovedPageBase";
import { workExperiences } from "../data";

import "./ContentPage.css";

const Experience: React.FC = () => {
  return (
    <ApprovedPageBase pullUp={false}>
      <div className="contentPage">
        <div className="pageHeader">
          <h1>Experience</h1>
          <Link to="/approved" className="backLink">
            &lt; Back
          </Link>
        </div>

        <div className="entryList">
          {workExperiences.map((job) => (
            <div className="entry" key={`${job.company}-${job.dateFrom}`}>
              {job.image && <img src={job.image} alt={job.company} />}
              <div className="entryBody">
                <div className="entryTitleRow">
                  <h2 className="entryTitle">{job.company}</h2>
                  <span className="entryDate">
                    {job.dateFrom} – {job.dateTo}
                  </span>
                </div>
                <p className="entrySub">{job.occupation}</p>
                <p className="entryDesc">{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ApprovedPageBase>
  );
};

export default Experience;
