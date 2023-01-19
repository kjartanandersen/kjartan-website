import React from 'react'

import { Props } from './Model/Projects';

import './ProjectItemStyles.css';

const ProjectItem: React.FC<Props> = (props: Props) => {
  return (
    <div className='project-item'>
        <img src={props.image}></img>
        <hr></hr>
        <h4>{props.title}</h4>
        <p>{props.descrpition}</p>
        <div className='project-item-tech'>
        {
          props.technology.map((tech, index) => {
            return (<p>{tech}</p>)
          })
        }
        </div>
    </div>
  )
}

export default ProjectItem;