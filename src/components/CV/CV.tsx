import React, { useEffect } from "react";
import { IProps, ProfileProp } from "../../_types/ProfileProps.d";

import NavBar from "../NavBar/NavBar";
import ExperienceAndEducationCard from "./Card/ExperienceAndEducationCard";

import "./CVStyles.css";
import { profileData } from "../../Db/profileData";
import InfoCard from "./Card/InfoCard";
import Particle from "../Home/Particle";

const profileList: ProfileProp = profileData;

const CV = ({}: IProps): JSX.Element => {
  useEffect(() => {
    document.title = "My Resume";
  }, []);

  return (
    <div>
      <Particle />
      <NavBar activeComp="cv">
        <div className="cv-page">
          <InfoCard Info={profileList.info} Languages={profileList.languages} Links={profileList.links} References={profileList.references} Skills={profileList.skills}/>
          <ExperienceAndEducationCard
            Education={profileList.education}
            WorkExperience={profileList.work_experiences}
          />
        </div>
      </NavBar>
    </div>
  );
};

export default CV;
