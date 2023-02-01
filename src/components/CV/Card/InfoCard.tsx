import React from "react";

import { IInfoCardProps } from "../Model/Model";

import './InfoCardStyles.css';

const InfoCard = ({ Info, Languages, Links, References, Skills }: IInfoCardProps): JSX.Element => {

  const languagesElement: JSX.Element = (
    <div className="cv-info-languages">
      <h4><b>Languages:</b></h4>
      <p>{Languages.map((element) => (
        <React.Fragment key={element.name}>{element.name}: {element.proficiency}<br /></React.Fragment>
      ))}
      </p>
    </div>
  );

  const linksElement: JSX.Element = (
    <div className="cv-info-links">
      <h4><b>Links:</b></h4>
      <p>{Links.map((element) => (
        <React.Fragment key={element.name}><a href={element.url}>{element.name}</a></React.Fragment>
      ))}
      </p>
    </div>
  );

  const referencesElement: JSX.Element = (
    <div className="cv-info-references">
      <h4><b>References:</b></h4>
      <p>{Links.map((element) => (
        <React.Fragment key={element.name}><a href={element.url}>{element.name}</a></React.Fragment>
      ))}
      </p>
    </div>
  );

  const skillsElement: JSX.Element = (
    <div className="cv-info-skills">
      <h4><b>Skills:</b></h4>
      <p>{Skills.map((element) => (
        <React.Fragment key={element.name}>{element.name}, </React.Fragment>
      ))}
      </p>
    </div>
  );

  const infoElement: JSX.Element = (
    <>
      <h2>{Info.name}</h2>
      <img src={Info.image} alt="An image of me"></img>
      <p>
        <b>Date of birth: </b>{new Date(Info.date_of_birth).toLocaleDateString("en-GB")}<br />
        <b>Email: </b>{Info.email}<br />
        <b>Phone: </b>{Info.phone}<br />
      </p>
        {languagesElement}

        {linksElement}
        {skillsElement}
        
    </>
  )
  
  return <div className="info-card">{infoElement}</div>;
};

export default InfoCard;
