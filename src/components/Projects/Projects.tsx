import React from 'react'

import ProjectItem from './ProjectItem';
import NavBar from '../NavBar/NavBar';

function Projects() {
  return (
    <NavBar activeComp="projects" >
      <ProjectItem />
    </NavBar>
  )
}

export default Projects;