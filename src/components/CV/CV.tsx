import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { getProfile } from "../../helpers/cv-storage";
import { IProps, ProfileProp, SkillProp } from "../../_types/ProfileProps.d";

import NavBar from "../NavBar/NavBar";

import "./CVStyles.css";
import cvImage from "./cv_image.jpg";

const defaultProfile: ProfileProp = {
  id: "",
  name: "",
  about_me: "",
  current_residence: "",
  date_of_birth: new Date(),
  ssn: "",
  phone: "",
  email: "",
  hobbies: [],
  languages: [],
  skills: [],
  references: [],
  education: [],
  work_experiences: [],
  links: [],
};

const CV: React.FC<IProps> = () => {
  const [isBusy, setisBusy] = useState(false);
  const [profileList, setProfileList] = useState<ProfileProp>(defaultProfile);

  const getData = () => {
    getProfile().then((resp) => {
      setProfileList(resp);
      
      
      setisBusy(true);
    });
  };


  useEffect(() => {
    getData();
  });

  return (
    <div>
      <NavBar activeComp="cv">
        <div className="home-page">
          <div className="top-of-cv">
            <h1>
              <b>{profileList.name}</b>
            </h1>
            <img src={cvImage} alt="" className="cv-image" />
          </div>
          <div className="cv-left-side">
            <div className="cv-right-side-card">
              <h2>
                <b>Profile</b>
              </h2>
              <hr className="cv-line-border-right"></hr>
              <div className="cv-right-side-ed-list">
                <p>
                  <b>Date of Birth: </b>
                  {new Date(profileList.date_of_birth).toLocaleDateString("en-GB")} <br />
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
              <div className="cv-right-side-ed-list">
                <p>
                  <b>Phone: </b>
                  {profileList.phone}
                  <br />
                  <b>Email: </b>
                  {profileList.email}
                </p>
              </div>
            </div>

            <div className="cv-right-side-card">
              <h2>
                <b>Hobbies</b>
              </h2>
              <hr className="cv-line-border-right"></hr>
              <div className="cv-right-side-ed-list">
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
                <b>References</b>
              </h2>
              <hr className="cv-line-border-right"></hr>
              <div className="cv-right-side-ed-list">
                {profileList.references.map((reference, index) => {
                  return (
                    <p key={index}>
                      <b>Name: </b> {reference.name} <br />
                      <b>Email: </b> {reference.email}
                    </p>
                  );
                })}
              </div>
            </div>

            <div className="cv-right-side-card">
              <h2>
                <b>Skills</b>
              </h2>
              <hr className="cv-line-border-right"></hr>
              <div className="cv-right-side-ed-list">
                <p>
                  {
                    (() => {
                      let elements: JSX.Element[] = []
                      let ExSkills: SkillProp[] = []
                      let GoodSkills: SkillProp[] = []
                      
                      profileList.skills.map((skill) => {
                          skill.proficiency == "Excellent" ? ExSkills.push(skill) : GoodSkills.push(skill)                        
                      })

                      elements.push(<b> Excellent: </b>)

                      ExSkills.map((skill, index) => {
                        if (index ==  ExSkills.length - 1) { 
                          elements.push( < React.Fragment key={index}>{skill.proficiency == "Excellent" ? skill.name : ""}</ React.Fragment>)  
                        }
                        else {
                          elements.push( < React.Fragment key={index}>{skill.proficiency == "Excellent" ? skill.name + ", " : ""}</ React.Fragment>)
                          
                        }
                      })
                      elements.push(<br />)
                      elements.push(<b> Good: </b>)
                      
                      GoodSkills.map((skill, index) => {
                        if (index ==  GoodSkills.length - 1) { 
                          elements.push( < React.Fragment key={index}>{skill.proficiency == "Good" ? skill.name : ""}</ React.Fragment>)  
                        }
                        else {
                          elements.push( < React.Fragment key={index}>{skill.proficiency == "Good" ? skill.name + ", " : ""}</ React.Fragment>)
                          
                        }
                      })

                      
                      return elements    
                    })()
                  }
                </p>
                
              </div>
            </div>
          </div>
          <div className="cv-right-side">
            <div>
              <div className="cv-right-side-card">
                <h2>
                  <b>Education</b>
                </h2>
                <hr className="cv-line-border-right"></hr>
                {isBusy ? (
                  profileList.education.map((data, index) => {
                    return (
                      <div key={index}>
                        <p>
                          <b>{data.name}</b> <br />
                          {data.date_from} - {data.date_to}
                          <br />
                          {data.subject}
                          <br />
                          {data.description}
                        </p>
                      </div>
                    );
                  })
                ) : (
                  <></>
                )}
              </div>
            </div>

            <div className="cv-right-side-card">
              <h2>
                <b>Work Experience</b>
              </h2>
              <hr className="cv-line-border-right"></hr>

              {profileList.work_experiences.map((work_ex, index) => {
                return (
                  <p key={index}>
                    <b>{work_ex.company_name} </b> <br />
                    {work_ex.date_from} - {work_ex.date_to} <br />
                    {work_ex.occupation} <br />
                    {work_ex.description}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </NavBar>
    </div>
  );
};

export default CV;
