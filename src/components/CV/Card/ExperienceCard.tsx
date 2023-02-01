import React from "react";

import { IExperienceCardProps } from "../Model/Model";

import './ExperienceCardStyles.css';

const ExperienceCard = ({
  WorkExperience
}: IExperienceCardProps): JSX.Element => {

  const workExperienceElements: JSX.Element = (
    <div className="work-experience-card">
      <div>
      <h4>{WorkExperience.company_name}</h4>
      <img src={WorkExperience.image} alt={WorkExperience.company_name}></img>

      </div>
      <h5>{WorkExperience.occupation}</h5>
      <p><b>({WorkExperience.date_from} - {WorkExperience.date_to})</b></p>
      <p>{WorkExperience.description}</p>
  </div>
  );

  return <div>{workExperienceElements}</div>;
};

export default ExperienceCard;
