import GithubIcon from "@mui/icons-material/GitHub";
import { useNavigate } from 'react-router-dom';
import "../styles/Project.css"
import { motion } from 'framer-motion';
import { Box, Avatar } from "@mui/material";



function ProjectItem({ id, image, name, github, icons }) {

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
        <Box sx={{display:"flex",flexDirection:"row",justifyContent:"center"}}>{icons.map((ic, i) =>
          <Avatar key={i} sx={{ width: 30, height: 30, paddingRight:"3%" }} src={ic} />

        )}</Box>
      </motion.div>
    </a>

  )
}

export default ProjectItem