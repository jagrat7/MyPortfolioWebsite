import React from 'react'
import { VerticalTimeline, VerticalTimelineElement, } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import "../styles/Experince.css"


function Experience() {
  return (
    <div className='Experience'>
      <VerticalTimeline lineColor="#3e497a">

        <VerticalTimelineElement className='vertical-timeline-element--education bgC'
          date='January 2018 - May 2021'
          contentStyle={{ background: '#3e497a', color: '#fff' }}
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}>
          <h3 className="vertical-timeline-element-title">California State University, Northridge, CA</h3>
          <p>Bachelor of Science in Computer Engineering</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--work bgC'
          date='September 2021- July 2022'
          contentStyle={{ background: '#3e497a', color: '#fff' }}
          iconStyle={{ background: "#3e497a", color: "#ffef" }}
          icon={<WorkIcon />}>
          <h3 className="vertical-timeline-element-title">Copycat – Software Development Team Trainee </h3>
          <p>
            Developed a comprehensive full-stack web application to address the challenge of determining server hard drive installation timing and cost estimation for enterprises, featuring a robust user authentication and registration system with admin approval and diverse visual analytics capabilities.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--work bgC'
          date='September 2021- July 2022'
          contentStyle={{ background: '#3e497a', color: '#fff' }}
          iconStyle={{ background: "#3e497a", color: "#ffef" }}
          icon={<WorkIcon />}>
          <h3 className="vertical-timeline-element-title">Astral aerial – Software Intern</h3>
          <p>Worked on a front-end web development project. The application provided users with the ability to take tests for the drone flighting theory and practical test as well as advertising for the school. Django framework was used for both front end and backend.
            Projects using drones e.g., drone mapping, drone surveillance. Drone Mapping field work was done where I flew and mapped areas of a farm.
          </p>
        </VerticalTimelineElement>



        <VerticalTimelineElement className='vertical-timeline-element--work bgC'
          date='June 2023 - August 2023'
          contentStyle={{ background: '#3e497a', color: '#fff' }}
          iconStyle={{ background: "#3e497a", color: "#ffef" }}
          icon={<WorkIcon />}>
          <h3 className="vertical-timeline-element-title">Onixnet – Cloud Solutions Intern </h3>
          <p>
            Led a team of two to build default Google Cloud infrastructure for customers using Terraform. Created a business metrics dashboard for the C-suite using Google Workspace tools, employing AI tools and processing data through cleaning and enrichment to extract relevant insights from various datasets.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--work bgC'
          date='January 2024 - March 2024'
          contentStyle={{ background: '#3e497a', color: '#fff' }}
          iconStyle={{ background: "#3e497a", color: "#ffef" }}
          icon={<WorkIcon />}>
          <h3 className="vertical-timeline-element-title">CashTrac Inc - Software Engineer </h3>
          <p>
            Implemented a logger middleware facilitating engineers to correlate backend logs with test failures using a correlation
            ID, thereby reducing debug time for failed integration tests by approximately 75%. Additionally, optimized log storage to
            decrease disk usage from logs by 45%. Developed support tooling to proactively block potential DDoS attacks through a REST framework middleware
            solution.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education bgC'
          date='August 2022 - May 2024'
          contentStyle={{ background: '#3e497a', color: '#fff' }}
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}>
          <h3 className="vertical-timeline-element-title">Rochester Institute of Technology, Rochester, NY</h3>
          <p>Master of Science in Software Engineering </p>
          <p>GPA 3.89</p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

export default Experience