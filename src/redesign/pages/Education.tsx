import React from "react";
import { Link } from "react-router-dom";

import ApprovedPageBase from "../components/ApprovedPageBase";
import { education } from "../data";

import "./ContentPage.css";

const Education: React.FC = () => {
  return (
    <ApprovedPageBase pullUp={false}>
      <div className="contentPage">
        <div className="pageHeader">
          <h1>Education</h1>
          <Link to="/approved" className="backLink">
            &lt; Back
          </Link>
        </div>

        <div className="entryList">
          {education.map((entry) => (
            <div className="entry" key={`${entry.name}-${entry.dateFrom}`}>
              {entry.image && <img src={entry.image} alt={entry.name} />}
              <div className="entryBody">
                <div className="entryTitleRow">
                  <h2 className="entryTitle">{entry.subject}</h2>
                  <span className="entryDate">
                    {entry.dateFrom} – {entry.dateTo}
                  </span>
                </div>
                <p className="entrySub">{entry.name}</p>
                {entry.description && (
                  <p className="entryDesc">{entry.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </ApprovedPageBase>
  );
};

export default Education;
