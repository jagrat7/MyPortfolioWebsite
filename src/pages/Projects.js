import React from 'react'
import ProjectItem from '../components/ProjectItem'
import { ProjectList } from '../helper/ProjectList'
import "../styles/Project.css"


function Projects() {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projectList">

        {ProjectList.map((proj, idx)=>
          <ProjectItem id={idx} key={proj.name} name={proj.name} image={proj.image} github={proj.github}></ProjectItem>
        )}
      </div>
    </div>
  )
}

export default Projects