import proj1 from "../assets/images/proj2.jpg"
import proj2 from "../assets/images/dam.PNG"
import proj3 from "../assets/images/ml.jpg"
import proj4 from "../assets/images/asl.jpeg"
import proj5 from "../assets/images/ss.jpg"
import Sign2textMR from "../assets/markdownFiles/sign2textREADME.md"
import { Technologies, Languages, Other } from "./SkillsData"

export const ProjectList=[
    {
        name:"Smart City Streetlights",
        image:proj5,
        github:"https://www.linkedin.com/pulse/engineering-smart-cities-street-lighting-system-jagrat-rao-km4df/?trackingId=WOstHrK%2FSwOvKqduRc3nuA%3D%3D",
        skill:"ansadasgular, asasdasds",
        mrfile:null,
        skills:[Technologies[0].image, Technologies[11].image,Technologies[16].image, Languages[5].image]
    },
    {
        name:"Sign2text",
        image:proj4,
        github:"https://github.com/jagrat7/sign2text.git",
        skill:"ansadasgular, asasdasds",
        mrfile:Sign2textMR,
        skills:[Technologies[0].image, Technologies[2].image,,Technologies[10].image,Technologies[13].image,Technologies[12].image,Languages[5].image]
    },
    {
        name:"E-commerce Website",
        image:proj1,
        github:"https://github.com/jagrat7/E-commerce---Edumart.git",
        skill:"angular, spring",
        mrfile:null,
        skills:[Technologies[14].image, Technologies[15].image]


    },
    {
        name:"Database Analytics",
        image:proj2,
        github:"https://github.com/jagrat7/Database-Analytics---DAM.git",
        skill:"node.js, vanilla javascript",
        mrfile:null,
        skills:[Technologies[13].image, Technologies[6].image]
    },
    {
        name:"ML- Employee Attrition",
        image:proj3,
        github:"https://github.com/jagrat7/Machine-Learning-Project.git",
        skill:"ansadasgular, asasdasds",
        mrfile:null,
        skills:[Languages[5].image]
    },  



] ;


