import React from 'react'

import { Props } from './Model/Projects';

import './ProjectItemStyles.css';

const ProjectItem: React.FC<Props> = (props: Props) => {
  return (
    <div className='project-item'>
        <h4>{props.title}</h4>
        <p>{props.descrpition}</p>
        {
          props.technology.map((tech) => {
            return (<p>{tech}</p>)
          })
        }
    </div>
  )
}

export default ProjectItem;