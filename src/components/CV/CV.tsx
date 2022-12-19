import React from 'react';

import NavBar from '../NavBar/NavBar';

import './CVStyles.css';
import cvImage from './cv_image.jpg';
import Education from './Education/Education';

const CV: React.FC = () => {


  return (
    <div>
      <NavBar activeComp='home'>

        <div className='home-page'>
          <div className="top-of-cv">
            <h1><b>Kjartan Már Andersen</b></h1>
            <img src={cvImage} alt="" className="cv-image" />
          </div>
          <div className="cv-left-side">
            <div className="cv-right-side-card">
              <h2><b>Profile</b></h2>
              <hr className='cv-line-border-right'></hr>
              <div className="cv-right-side-ed-list">
                <p><b>Date of Birth: </b>23-09-1996 <br />
                  <b>Kennitala: </b>230996-2379</p>


              </div>
            </div>

            <div className="cv-right-side-card">
              <h2><b>Contact</b></h2>
              <hr className='cv-line-border-right'></hr>
              <div className="cv-right-side-ed-list">
                <p><b>Phone: </b>+354 820-9623<br />
                  <b>Email: </b>kjartan1@live.com</p>


              </div>
            </div>

            <div className="cv-right-side-card">
              <h2><b>Hobbies</b></h2>
              <hr className='cv-line-border-right'></hr>
              <div className="cv-right-side-ed-list">
                <p>Video Games <br />
                  Movies <br />
                  Music <br />
                  Compuers <br />
                  Football</p>

              </div>
            </div>

            <div className="cv-right-side-card">
              <h2><b>References</b></h2>
              <hr className='cv-line-border-right'></hr>
              <div className="cv-right-side-ed-list">
                <p><b>Name:</b> Eiríkur Sæmundsson (Advania) <br />
                  <b>E-mail:</b> eirikur.saemundsson@advania.is </p>


              </div>
            </div>

            <div className="cv-right-side-card">
              <h2><b>Skills</b></h2>
              <hr className='cv-line-border-right'></hr>
              <div className="cv-right-side-ed-list">
                <p><b>Excellent: </b> Java, Python, C, C++, C#, JavaScript, NodeJS, React, NET, SQL, Linux, Windows <br />
                  <b>Good: </b> OpenGL, Unity </p>


              </div>
            </div>

          </div>
          <div className='cv-right-side'>



            <Education />

            <div className='cv-right-side-card'>
              <h2><b>Work Experience</b></h2>
              <hr className='cv-line-border-right'></hr>

              <p><b>N1</b> <br />
                2016 - 2021<br />
                Cashier<br />
                A part time job as a cashier while I was studying at
                Reykjavik University
              </p>


              <p><b>Reykjavik University</b> <br />
                2020<br />
                Programming Assistant, Summer Job<br />
                Paid summer job where I was tasked in assisting a
                student developing his Master's thesis in autonomous
                UAV landing. I was tasked in setting up networks for
                the raspberry pi and Jetson Nano on the drone, and
                make network communications possible through USB.
              </p>


              <p><b>Advania Ísland</b> <br />
                2021 Jan - 2022 March<br />
                Software Specialist, Full Time<br />
                Worked as part of the Oracle team at Advania. I was
                tasked in developing and maintaining applications in
                Oracle APEX that customers would use for ledger
                reports. I also created and maintained packages in the
                database in PL/SQL that the applications would utilize.
                I also did some minor JavaScript on the applications
              </p>

            </div>



          </div>



        </div>
      </NavBar>

    </div>
  );
};

export default CV;