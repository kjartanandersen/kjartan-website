import React, { useEffect, useState } from "react";
import {
  getProfileFromLocal
} from "../../helpers/cv-storage";
import { IProps, ProfileProp, SkillProp } from "../../_types/ProfileProps.d";

import NavBar from "../NavBar/NavBar";

import "./CVStyles.css";
import cvImage from "./cv_image.jpg";
import { profileData } from "../../Db/profileData";

const profileList: ProfileProp = profileData;

const CV: React.FC<IProps> = () => {
  

  return (
    <div>
      
      <NavBar activeComp="cv">
        
        {(
          <div className="cv-page">
            <div className="cv-title">
              <h1>
                <b>{profileList.name}</b>
              </h1>
              <img src={cvImage} alt="" className="cv-image" />

              <div className="cv-right-side-card">
                <h2>
                  <b>Profile</b>
                </h2>
                <hr className="cv-line-border-right"></hr>
                <div>
                  <p>
                    <b>Date of Birth: </b>
                    {new Date(profileList.date_of_birth).toLocaleDateString(
                      "en-GB"
                    )}{" "}
                    <br />
                    <b>Kennitala: </b>
                    {profileList.ssn}
                  </p>
                </div>
              </div>

              <div className="cv-right-side-card">
                <h2>
                  <b>Contact</b>
                </h2>
                <hr className="cv-line-border-right"></hr>
                <div>
                  <p>
                    <b>Phone: </b>
                    {profileList.phone}
                    <br />
                    <b>Email: </b>
                    {profileList.email}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="cv-right-side-card">
                <h2>
                  <b>Hobbies</b>
                </h2>
                <hr className="cv-line-border-right"></hr>
                <div>
                  <p>
                    {profileList.hobbies.map((hobby, index) => {
                      return (
                        <React.Fragment key={index}>
                          {hobby} <br />
                        </React.Fragment>
                      );
                    })}
                  </p>
                </div>
              </div>
              
              <div className="cv-right-side-card">
                <h2>
                  <b>Skills</b>
                </h2>
                <hr className="cv-line-border-right"></hr>
                <div>
                  <p>
                    {
                      profileList.skills.map((el) => {
                        return el.name + ', ';
                      })
                    }
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="cv-right-side-card">
                <h2>
                  <b>Education</b>
                </h2>
                <hr className="cv-line-border-right"></hr>
                {profileList.education.map((data, index) => {
                  return (
                    <div key={index}>
                      <p>
                        <b>
                          {data.name} <br />
                          {data.date_from} - {data.date_to}
                          <br />
                          {data.subject}{" "}
                        </b>
                        <br />
                        {data.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="cv-right-side-card">
                <h2>
                  <b>Work Experience</b>
                </h2>
                <hr className="cv-line-border-right"></hr>

                {profileList.work_experiences.map((work_ex, index) => {
                  return (
                    <p key={index}>
                      <b>
                        {work_ex.company_name} <br />
                        {work_ex.date_from} - {work_ex.date_to} <br />
                        {work_ex.occupation}
                      </b>{" "}
                      <br />
                      {work_ex.description}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        )} 
      </NavBar>
    </div>
  );
};

export default CV;
