import React from 'react'
import ProjectItem from './ProjectItem'
import { ProjectList } from '../helper/ProjectList'
import "../styles/Project.css"


function Projects() {
  return (
    <div className="projects">
      <h1 className='Title'>My Projects</h1>
      <div className="projectList">

        {ProjectList.map((proj, idx)=>
          <ProjectItem id={idx} key={proj.name} name={proj.name} image={proj.image} github={proj.github}></ProjectItem>
        )}
      </div>
    </div>
  )
}

export default Projects