import { FC, memo } from "react";
import Section from "@/components/layout/section";
import { SectionId, WorkExperience, SkillGroups } from "@/data/data";
import TimeLines from "@/components/timelines";
import Divider from '@mui/material/Divider';
import TextBox from "@/components/textbox";
import Education from "@/components/sections/resume/education";
import Skills from "@/components/sections/resume/skills";
import Box from "@/components/box";


const Resume: FC = memo(function Resume() {

  return (
    <Section sectionId={SectionId.Resume}>

      <Divider variant="middle">
        <TextBox text={"Skills"}/>
      </Divider>
      <Box sx={{ mx: 4 }}>
        <Skills skillGroups={SkillGroups}/>
      </Box>

      <Divider variant="middle">
        <TextBox text={"Experience"}/>
      </Divider>
      <TimeLines items={WorkExperience}/>

      <Divider variant="middle">
        <TextBox text={"Education"}/>
      </Divider>
      <Box sx={{ m: 4 }}>
        <Education/>
      </Box>

    </Section>
  );
})

export default Resume;