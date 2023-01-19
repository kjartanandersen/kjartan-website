import React from 'react'

import ProjectItem from './ProjectItem';
import NavBar from '../NavBar/NavBar';

import { Props } from './Model/Projects';

const projectItems: Props[]  = [
  {
    title: 'My Website',
    descrpition: 'My personal website that you are currently on',
    technology: ['React', 'TypeScript', 'Webpack', 'Babel', 'HTML', 'CSS']
  }
]

function Projects() {
  return (
    <NavBar activeComp="projects" >
      {
        projectItems.map((proItem) => {
          return (<ProjectItem title={proItem.title} descrpition={proItem.descrpition} technology={proItem.technology}></ProjectItem>)
        })
      }
    </NavBar>
  )
}

export default Projects;