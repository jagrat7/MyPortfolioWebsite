import "../styles/Skills.css"
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabPanel from '@material-ui/lab/TabPanel';
import TabList from '@material-ui/lab/TabList';
import { useState } from "react";
import { Technologies, Languages, Other } from "../helper/SkillsData"
import { Paper } from "@mui/material";
const Skills = () => {

    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="skills">
            <h1>Skills</h1>
            <Box sx={{ width: '75%', minHeight: "60vh" }}>
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
                            {Technologies.map((skill, i) => <Paper sx={{ padding: "20px" }} key={i}> #{skill}</Paper>)}

                        </TabPanel>
                        <TabPanel className="tabCont flexOn" value="2">
                            {Languages.map((skill, i) => <Paper sx={{ padding: "20px" }} key={i}> #{skill}</Paper>)}
                        </TabPanel>
                        <TabPanel className="tabCont flexOn" value="3">
                            {Other.map((skill, i) => <Paper sx={{ padding: "20px" }} key={i}> #{skill}</Paper>)}
                        </TabPanel>
                    </div>


                </TabContext>
            </Box>

        </div>);
}

export default Skills;