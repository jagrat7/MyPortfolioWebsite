import GithubIcon from "@mui/icons-material/GitHub";
import { useNavigate } from 'react-router-dom';
import "../styles/Project.css"
import { motion } from 'framer-motion';


function ProjectItem({ id, image, name, github, liveDemo }) {

  const navigate = useNavigate()


  const handleClick = () => {
    navigate("/project/" + id)
  }
  return (
    <a href={github} className="rm" target="_blank" >
      <motion.div
        className="projectItem"

        whileHover={{
          scale: [1, 1.02, 1, 1.02, 1],
          transition: {
            duration: 5,
            repeat: "Infinity",
            repeatType: "loop"
          }
        }}
      // onHoverEnd={{scale:1}}

      >
        <div style={{ backgroundImage: `url(${image})` }} className="bgImage"></div>
        <h1>{name}</h1>
        <span><GithubIcon className='icon'></GithubIcon></span>
        {/* <span className='externalLink'><a href={"https://"+liveDemo}> <GithubIcon></GithubIcon> </a></span> */}
      </motion.div>
    </a>

  )
}

export default ProjectItem