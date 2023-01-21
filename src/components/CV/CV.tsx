import React from "react";
import { IProps, ProfileProp } from "../../_types/ProfileProps.d";

import NavBar from "../NavBar/NavBar";

import "./CVStyles.css";
import cvImage from "./cv_image.jpg";
import { profileData } from "../../Db/profileData";

const profileList: ProfileProp = profileData;

const CV: React.FC<IProps> = () => {
  return (
    <div>
      <NavBar activeComp="cv-page">
        <div className="cv-page">
          <div className="cv-page-cards">
            <div className="cv-title">

          <div className="cv-img-header">
            <h1>
              <b>{profileList.name}</b>
            </h1>
            <img src={cvImage} alt="" className="cv-image" />
          </div>
              <div className="cv-card">
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
                  </p>
                </div>
              </div>

              <div className="cv-card">
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
              <div className="cv-card">
                <h2>
                  <b>Skills</b>
                </h2>
                <hr className="cv-line-border-right"></hr>
                <div>
                  <p>
                    {profileList.skills.map((el) => {
                      return el.name + ", ";
                    })}
                  </p>
                </div>
              </div>

              <div className="cv-card">
                <h2>
                  <b>Hobbies</b>
                </h2>
                <hr className="cv-line-border-right"></hr>
                <div>
                  <p>
                    {profileList.hobbies.map((hobby, index) => {
                      return hobby + ", ";
                    })}
                  </p>
                </div>
              </div>
            </div>

            <div className="cv-work-and-ed">
              <div className="cv-card">
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

              <div className="cv-card">
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
        </div>
      </NavBar>
    </div>
  );
};

export default CV;
