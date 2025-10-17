import React from "react";

import { IEducationCardProps } from "../Model/Model";

import './EducationCardStyles.css';

const EducationCard = ({
  Education
}: IEducationCardProps) => {

  const educationElements = (
    <div className="education-card">
      <div>
      <h4>{Education.name}</h4>
      <img src={Education.image} alt={Education.name}></img>
      </div>
      <h5>{Education.subject}</h5>
      <p><b>({Education.date_from} - {Education.date_to})</b></p>
      <p>{Education.description}</p>
      <hr></hr>
  </div>
  );

  return <div>{educationElements}</div>;
};

export default EducationCard;
