import React from 'react'
import {VerticalTimeline,VerticalTimelineElement,} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";



function Experience() {
  return (
    <div className='Experience'>     
      <VerticalTimeline  lineColor="#3e497a">

        <VerticalTimelineElement className='vertical-timeline-element--education' 
        date='2018 - 2021'
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<SchoolIcon />}>
          <h3 className="vertical-timeline-element-title">CSUN, Northridge, CA</h3>
          <p>Bachlor's in computer engneering</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--work' 
        date='2021 - 2022'
        iconStyle={{ background: "#3e497a", color: "#ffef" }}
        icon={<WorkIcon />}>
          <h3 className="vertical-timeline-element-title">CoptCat</h3>
          <p>Internship</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education' 
        date='2022 - current'
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<SchoolIcon />}>
          <h3 className="vertical-timeline-element-title">RIT, Rochester, NY</h3>
          <p>Master's in software engneering</p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

export default Experience