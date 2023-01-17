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
                <Link to='/cv' className={`nav-link ${activeComp === "cv" ? "nav-active-cv" : ""}`} >My Portfolio</Link>  
              </div>
              
              <div className='navbar-item'>
                <Link to='/projects' className={`nav-link ${activeComp === "projects" ? "nav-active-projects" : ""}`}>Projects</Link>  
              </div>
              
              
            </div>
          </div>


      {children}


        <div className="navbar-footer">
          <p className='navbar-footer-copy'>
            &#169; Kjartan Már Andersen {new Date().getFullYear()}
          </p>
          <div className='navbar-footer-sociallinks'>
          <a href='https://twitter.com/KjartanAndersen'><img className='navbar-footer-sociallink' src={twitterImg}></img></a>
          <a href='https://github.com/kjartanandersen'><img className='navbar-footer-sociallink' src={githubImg}></img></a>
          <a href='https://is.linkedin.com/in/kjartan-m%C3%A1r-andersen-894abb1a6'><img className='navbar-footer-sociallink' src={linkedinImg}></img></a>
          </div>
        </div>

    </div>
  );
};


export default NavBar;