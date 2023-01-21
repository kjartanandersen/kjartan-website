import React from 'react';
import { Link } from 'react-router-dom';
import {Props} from './Model/Model'


import './NavBarStyles.css';

import twitterImg from './Images/twitter.png';
import linkedinImg from './Images/linkedin.png';
import githubImg from './Images/github.png';


const NavBar = ({activeComp, children}: Props) => {
  return (
    
    <div className='nav-container'>
        
          <div className='navbar'>
            <div className="navbar-nav">
              <div className='navbar-item'>
                <Link to='/' className={`nav-link ${activeComp === "home" ? "nav-active-home" : ""}`} >About</Link>
              </div>
              
              <div className='navbar-item'>
                <Link to='/cv' className={`nav-link ${activeComp === "cv" ? "nav-active-cv" : ""}`} >My Resume</Link>  
              </div>
              
              <div className='navbar-item'>
                <Link to='/projects' className={`nav-link ${activeComp === "projects" ? "nav-active-projects" : ""}`}>Projects</Link>  
              </div>
              
              
            </div>
          </div>


      {children}


        <div className="navbar-footer">
          <div className='navbar-footer-copy-and-links'>
            <p className='navbar-footer-copy'>
              &#169; Kjartan Már Andersen {new Date().getFullYear()}
            </p>
            <div className='navbar-footer-sociallinks'>
              <a href='https://twitter.com/KjartanAndersen'><img className='navbar-footer-sociallink' src={twitterImg}></img></a>
              <a href='https://github.com/kjartanandersen'><img className='navbar-footer-sociallink' src={githubImg}></img></a>
              <a href='https://is.linkedin.com/in/kjartan-m%C3%A1r-andersen-894abb1a6'><img className='navbar-footer-sociallink' src={linkedinImg}></img></a>
            </div>
          </div>
          <div className='navbar-footer-attributes'>
            <p><a href='https://www.flaticon.com/free-icon/twitter_733635?term=social+media&page=1&position=9&origin=tag&related_id=733635'>Twitter</a>, &#1;
              <a href='https://www.flaticon.com/free-icon/linkedin_3536569?term=linkedin&page=1&position=2&origin=search&related_id=3536569'>LinkedIn</a>,&#1;
              and &#1;
              <a href='https://www.flaticon.com/free-icon/github_2111432?term=github&page=1&position=4&origin=search&related_id=2111432'>Github </a>
              Icons from <a href='https://www.flaticon.com'>flaticon</a>
            </p>
          </div>
        </div>

    </div>
  );
};


export default NavBar;