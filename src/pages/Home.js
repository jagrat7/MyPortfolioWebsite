import {useRef} from 'react'
import EmailIcon  from "@mui/icons-material/Email";
import GithubIcon  from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import '../styles/Home.css'
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import hero from '../assets/images/hero5-22.png'
import Navbar from '../components/Navbar';
import { motion, useScroll, useTransform  } from "framer-motion";
import { duration } from '@mui/material';
import { fadeIn } from '../utils/motionAnimations';


function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress,[0,1],["0%","100%"])


  const iconsVariants ={
    hidden: {
      y:"100vh" 
    },
    visiable:{
      y:"0",
      transition:{type:"spring",
       delay:1,
       duration:3,
       staggerChildren:1}


    }
  }
  const inivIconsVariants ={
    hidden: {
      opacity: 0, 
    },
    visiable:{
      delay:1,
      opacity:1, 
    }
  }


  return (
    <div className="home">
        <div ref={ref} className='bgContainer'>
          <Navbar/>
          <div className="about">
            <motion.h2
              variants={fadeIn()}
              initial="hidden"
              animate="visiable"
              transition={{ease: "easeOut",duration: 3}}
            >Hi, My name is Jagrat</motion.h2>
            <motion.div
              variants={fadeIn()}
              initial="hidden"
              animate="visiable"
              transition={{delay:1, duration:2.5}}
              className="prompt"><p>I am Msc in Software Engineering graduating 2024, looking for exciting opportunities to grow my knowledge</p>
              <motion.div
                variants={iconsVariants}
                initial="hidden"
                animate="visiable"
                >
                <motion.a                 
                 variants={inivIconsVariants}
                 href="https://www.linkedin.com/in/jagrat-rao-9b730919b/"> <LinkedInIcon className='navLinkLi' /></motion.a>
                <motion.a
                variants={inivIconsVariants}
                href="mailto:jagratrao@gmail.com"><EmailIcon className='navLinkEM' /></motion.a>
                <motion.a
                variants={inivIconsVariants}
                href="https://github.com/jagrat7" ><GithubIcon  className='navLinkGit' /></motion.a> 
              </motion.div>


            </motion.div>
          </div>
        </div>



      <div className="skills">
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h3>Technologies</h3>
            <motion.span
              initial={{ opacity: 0, x:"-100vw" }}
              animate={{opacity:1, x:"0"}}
              transition={{ease:"backInOut",duration:3}}
            > Angular, React, Nextjs, Nodejs, Express, AWS Cloud, Azure Cloud, Django, Git, Github, Gitlab, MySQL, Linux CLI, Assembly, Reinforment Machine Learning, Oracle Database, Trello, 
            Spring boot, Frontend Web development, AJAX, Pspice.</motion.span>
          </li>
          <li className='item'>
            <h3>Languages</h3>
            <span>JavaScript, Python, Java, MATLAB, C, C++, HTML, TypeScript, CSS, VHDL, UML, Verilog, SQL, PHP, Solidity.</span>
          </li>
          <li className='item'>
            <h3>Other</h3>
            <span>SCRUM, Agile, Drone, Drone mapping, Microsoft Office & Excel, Photoshop.</span>
          </li>

        </ol>
      </div>

      <div id="exp">
        <h1 className=' ExperienceTitle'>My Experiences</h1>
        <Experience  ></Experience>
      </div>


      <div id="proj">
        <Projects ></Projects>
      </div>

    </div>
  )

}

export default Home