import React from 'react'
import GithubIcon  from "@mui/icons-material/GitHub";
import { useNavigate } from 'react-router-dom';
import "../styles/Project.css"

function ProjectItem({id,image,name,github, liveDemo}) {

  const navigate= useNavigate()


  const handleClick = () =>{
    navigate("/project/"+id)
  }
  return (

    <div className="projectItem" >
        <div style={{ backgroundImage: `url(${image})` }} className="bgImage"></div>
        <h1>{name}</h1>
        <span><a href={github}><GithubIcon className='icon'></GithubIcon></a></span>
        {/* <span className='externalLink'><a href={"https://"+liveDemo}> <GithubIcon></GithubIcon> </a></span> */}
    </div>  
    
)}

export default ProjectItem