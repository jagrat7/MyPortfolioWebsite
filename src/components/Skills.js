import "../styles/Skills.css"
import Box from '@mui/material/Box';
import { Technologies, Languages, Other } from "../helper/SkillsData"
import { Paper, Tooltip, Avatar } from "@mui/material";
import Marquee from "react-fast-marquee";



const Skills = () => {


    return (
        <div className="skills">
            <h1>Skills</h1>
            <Box sx={{
                width: '65%', minHeight: "35vh",
                marginTop: '3%'
            }}>

                <div className="iE">
                    <Box className=" flexOn" sx={{}}>
                        <Marquee
                            speed={15}
                            direction="right"
                            autoFill={true}

                        >

                            {Technologies.map((skill, i) =>
                                <Box key={i} style={{ padding: "15px" }}>
                                    {skill.image ? (

                                        <Tooltip title={skill.name}>
                                            <Avatar sx={{ width: 50, height: 50 }} alt={skill.name} src={skill.image} />
                                        </Tooltip>


                                    ) : (
                                        <Paper sx={{ padding: "15px" }} >
                                            #{skill.name}
                                        </Paper>
                                    )}
                                </Box>
                            )}
                        </Marquee>

                    </Box>
                    <Box className=" flexOn" sx={{ marginTop: "2%" }} >
                        <Marquee
                            speed={15}
                            direction="left"
                            autoFill={true}

                        >
                            {Languages.map((skill, i) =>
                                <Box key={i} style={{ padding: "15px" }}>
                                    {skill.image ? (
                                        <Tooltip title={skill.name}>
                                            <Avatar sx={{ width: 50, height: 50 }} alt={skill.name} src={skill.image} />
                                        </Tooltip>) : (
                                        <Paper sx={{ padding: "15px" }} >
                                            #{skill.name}
                                        </Paper>
                                    )}
                                </Box>)}
                        </Marquee>
                    </Box>
                    <Box className=" flexOn" sx={{ marginTop: "2%" }} >
                        <Marquee
                            speed={15}
                            direction="right"
                            autoFill={true}
                        >
                            {Other.map((skill, i) =>
                                <Box key={i} style={{ padding: "15px" }}>
                                    {skill.image ? (
                                        <Tooltip title={skill.name}>
                                            <Avatar sx={{ width: 50, height: 50 }} alt={skill.name} src={skill.image} />
                                        </Tooltip>) : (
                                        <Paper sx={{ padding: "15px" }} >
                                            #{skill.name}
                                        </Paper>
                                    )}
                                </Box>)}
                        </Marquee>
                    </Box>
                </div>


            </Box>

        </div>);
}

export default Skills;