import { FC, memo } from "react";
import Section from "@/components/layout/section";
import { SectionId, WorkExperience, SkillGroups } from "@/data/data";
import { Paper, Container } from "@mui/material";
import TimeLines from "@/components/timelines";
import Divider from '@mui/material/Divider';
import TextBox from "@/components/textbox";
import Education from "@/components/sections/resume/education";
import Skills from "@/components/sections/resume/skills";
import Box from "@/components/box";


const Resume: FC = memo(function Resume() {

  return (
    <Section sectionId={SectionId.Resume}>
      <Container fixed sx={{ px: 0 }}>
        <Divider variant="middle">
          <TextBox text={"Skills"}/>
        </Divider>
        <Box>
          <Skills skillGroups={SkillGroups}/>
        </Box>

        <Divider variant="middle">
          <TextBox text={"Experience"}/>
        </Divider>

        <Paper elevation={4} sx={{ my: 4, py: 2, backgroundColor: 'divider', borderRadius: 4 }}>
          <TimeLines items={WorkExperience}/>
        </Paper>

        <Divider variant="middle">
          <TextBox text={"Education"}/>
        </Divider>
        <Box sx={{ m: 4 }}>
          <Education/>
        </Box>
      </Container>
    </Section>
  );
})

export default Resume;