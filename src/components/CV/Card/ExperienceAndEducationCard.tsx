import React from "react";

import ExperienceCard from "./ExperienceCard";
import EducationCard from "./EducationCard";
import { IExperienceAndEducationCardProps } from "../Model/Model";

import "./ExperienceAndEducationCardStyles.css";

const ExperienceAndEducationCard = ({
  WorkExperience,
  Education,
}: IExperienceAndEducationCardProps): JSX.Element => {
  const workExperienceElement: JSX.Element = (
    <div className="cv-work-experience">
      <h2>Work Experience</h2>
      {WorkExperience.map((exp) => {
        return (
          <React.Fragment key={exp.company_name}>
            <ExperienceCard WorkExperience={exp} />
            <hr />
          </React.Fragment>
        );
      })}
    </div>
  );

  const educationElement: JSX.Element = (
    <div className="cv-education">
      <h2>Education</h2>
      {Education.map((ed) => {
        return (
          <React.Fragment key={ed.name}>
            <EducationCard Education={ed} />
          </React.Fragment>
        );
      })}
    </div>
  );

  return (
    <div className="cv-work-and-ed">
      {workExperienceElement} {educationElement}
    </div>
  );
};

export default ExperienceAndEducationCard;
