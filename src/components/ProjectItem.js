import React from 'react'
import GithubIcon  from "@mui/icons-material/GitHub";
import { useNavigate } from 'react-router-dom';

function ProjectItem({id,image,name,github, liveDemo}) {

  const navigate= useNavigate()


  const handleClick = () =>{
    navigate("/project/"+id)
  }
  return (

    <div className="projectItem" onClick={handleClick}>
        <div style={{ backgroundImage: `url(${image})` }} className="bgImage"></div>
        <h1>{name}</h1>
        <span className='externalLink'><a href={"https://"+github}>  <GithubIcon></GithubIcon> </a></span>
        <span className='externalLink'><a href={"https://"+liveDemo}> <GithubIcon></GithubIcon> </a></span>
    </div>  
    
)}

export default ProjectItem