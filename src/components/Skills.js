import "../styles/Skills.css"
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabPanel from '@material-ui/lab/TabPanel';
import TabList from '@material-ui/lab/TabList';
import { useState } from "react";
import { Technologies, Languages, Other } from "../helper/SkillsData"
import { Paper, Tooltip, Typography, Avatar } from "@mui/material";
const Skills = () => {

    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="skills">
            <h1>Skills</h1>
            <Box sx={{ width: '50%', minHeight: "50vh" }}>
                <TabContext sx={{ textAlign: "center" }} value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList TabIndicatorProps={{ style: { background: '#3e497a' } }}
                            variant={window.innerWidth < 600 ? "scrollable" : undefined}
                            scrollButtons={window.innerWidth < 600 ? true : undefined}
                            allowScrollButtonsMobile={window.innerWidth < 600 ? true : undefined} centered onChange={handleChange} >
                            <Tab label="Technologies" value="1" />
                            <Tab label="Languages" value="2" />
                            <Tab label="Other" value="3" />
                        </TabList>
                    </Box>
                    <div className="iE">
                        <TabPanel className="tabCont flexOn" value="1">
                            {Technologies.map((skill, i) =>
                                <Box key={i} sx={{ padding: "10px" }}>
                                    {skill.image ? (
                                        <Tooltip title={skill.name}>
                                            <Avatar sx={{ width: 50, height: 50 }} alt={skill.name} src={skill.image} />
                                        </Tooltip>) : (
                                        <Paper sx={{ padding: "20px" }} >
                                            #{skill.name}
                                        </Paper>
                                    )}
                                </Box>
                            )}
                        </TabPanel>
                        <TabPanel className="tabCont flexOn" value="2">
                            {Languages.map((skill, i) => 
                                <Box key={i} sx={{ padding: "10px" }}>
                                {skill.image ? (
                                    <Tooltip title={skill.name}>
                                        <Avatar sx={{ width: 50, height: 50 }} alt={skill.name} src={skill.image} />
                                    </Tooltip>) : (
                                    <Paper sx={{ padding: "20px" }} >
                                        #{skill.name}
                                    </Paper>
                                )}
                            </Box>                            )}
                        </TabPanel>
                        <TabPanel className="tabCont flexOn" value="3">
                            {Other.map((skill, i) => <Paper sx={{ padding: "20px" }} key={i}> #{skill.name}</Paper>)}
                        </TabPanel>
                    </div>


                </TabContext>
            </Box>

        </div>);
}

export default Skills;