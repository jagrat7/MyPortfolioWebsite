import React from 'react'
import EmailIcon  from "@mui/icons-material/Email";
import GithubIcon  from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import '../styles/Home.css'
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import hero from '../assets/images/hero1.jpg'
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div className="home">
        <div className='bgContainer'>
          <Navbar/>
          <div className="about">
            <h2>Hi, My name is Jagrat</h2>
            <div className="prompt"><p>I am Msc in Software Engineering graduating 2024, looking for exciting opportunities to grow my knowledge</p>
              <a href="https://www.linkedin.com/in/jagrat-rao-9b730919b/"> <LinkedInIcon className='navLinkLi' /></a>
              <a href="mailto:jagratrao@gmail.com"><EmailIcon className='navLinkEM' /></a>
              <a href="https://github.com/jagrat7" ><GithubIcon  className='navLinkGit' /></a> 
            </div>
          </div>
        </div>



      <div className="skills">
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h3>Technologies</h3>
            <span> Angular, React, Nextjs, Nodejs, Express, AWS Cloud, Azure Cloud, Django, Git, Github, Gitlab, MySQL, Linux CLI, Assembly, Reinforment Machine Learning, Oracle Database, Trello, 
            Spring boot, Frontend Web development, AJAX, Pspice.</span>
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