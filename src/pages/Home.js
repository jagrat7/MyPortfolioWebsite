import React from 'react'
import EmailIcon  from "@mui/icons-material/Email";
import GithubIcon  from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import '../styles/Home.css'

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My name is Jagrat</h2>
        <div className="prompt"><p>I am Master student in Software Engineering looking for exciting oppurtunities to grow my Knowledge  </p></div>
        <LinkedInIcon />
        <EmailIcon />
        <GithubIcon />
      </div>


      <div className="skills">
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span> ReactJS, Angular, HTML, CSS, NPM,
              Ionic, Yarn, TailwindCSS, StyledComponents</span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL</span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C, C++, TypeScript</span>
          </li>
        </ol>

      </div>
    </div>
  )
}

export default Home