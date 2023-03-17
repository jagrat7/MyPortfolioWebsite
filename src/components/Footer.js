import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
        <div className="footer">
            <div className="socialMedia">
                <div ><a style={{ textDecoration: 'none', color:"white" }} classname="fLinks" href="https://drive.google.com/file/d/1gxGqKFcy-yCyyj8ap9sRHgZAFr4oLB-j/view?usp=sharing" 
                target="_blank" rel='noreferrer'>Resume</a></div>         
                <div > <a style={{ textDecoration: 'none', color:"white" }} classname="fLinks"  href="mailto:jagratrao@gmail.com"
                target="_blank" rel='noreferrer'>Email</a></div>
                <div ><a style={{ textDecoration: 'none', color:"white" }} classname="fLinks"  href="https://github.com/jagrat7"
                target="_blank" rel='noreferrer'>Github</a></div>
            </div>
            <p style={{ textDecoration: 'none', color:"white" }}> &copy; 2023 Jagrat Rao</p>
        </div> 
     )
}

export default Footer