import React from 'react'
import {VerticalTimeline,VerticalTimelineElement,} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import "../styles/Experince.css"


function Experience() {
  return (
    <div className='Experience'>     
      <VerticalTimeline  lineColor="#3e497a">

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
          <h3 className="vertical-timeline-element-title">Copycat – Employee trainee </h3>
          <p>Worked on a full-stack Node.js web development project. The application involved providing enterprises with the ability to monitor their databases and servers. 
              Node.js was used in the backend and vanilla JavaScript was used for the frontend.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--work bgC' 
        date='September 2021- July 2022'
        contentStyle={{ background: '#3e497a', color: '#fff' }}
        iconStyle={{ background: "#3e497a", color: "#ffef" }}
        icon={<WorkIcon />}>
          <h3 className="vertical-timeline-element-title">Astral aerial – Intern</h3>
          <p>Worked on a front-end web development project. The application provided users with the ability to take tests for the drone flighting theory and practical test as well as advertising for the school. Django framework was used for both front end and backend.
	           Projects using drones e.g., drone mapping, drone surveillance. Drone Mapping field work was done where I flew and mapped areas of a farm.	
          </p>
        </VerticalTimelineElement>



        <VerticalTimelineElement className='vertical-timeline-element--work bgC' 
        date='June 2023 - August 2023'
        contentStyle={{ background: '#3e497a', color: '#fff' }}
        iconStyle={{ background: "#3e497a", color: "#ffef" }}
        icon={<WorkIcon />}>
          <h3 className="vertical-timeline-element-title">Onixnet – Solutions intern </h3>
          <p>
            Created terraform scripts to automate a template for GCP resources for customers. Used AI and data filtering tools to generate customer success stories given large unsorted and unlabeled data.

          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education bgC' 
        date='August 2022 - Current'
        contentStyle={{ background: '#3e497a', color: '#fff' }}
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<SchoolIcon />}>
          <h3 className="vertical-timeline-element-title">Rochester Institute of Technology, Rochester, NY</h3>
          <p>Master of Science in Software Engineering </p>
          <p>GPA 3.78</p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

export default Experience