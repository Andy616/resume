import { FC, memo } from "react";
import Section from "@/components/layout/section";
import { SectionId, WorkExperience, SkillGroups } from "@/data/data";
import { Paper, Container } from "@mui/material";
import TimeLines from "@/components/timelines";
import Education from "@/components/sections/resume/education";
import Skills from "@/components/sections/resume/skills";
import Box from "@/components/box";
import SectionTitle from "@/components/sections/sectionTitle";


const Resume: FC = memo(function Resume() {

  return (
    <Section sectionId={SectionId.Resume}>
      <Container fixed sx={{ px: 0 }}>
        <SectionTitle 
          textBoxProps={{
            text: "Skills"
          }}
        />
        <Box>
          <Skills skillGroups={SkillGroups}/>
        </Box>

        <SectionTitle 
          textBoxProps={{
            text: "Experience"
          }}
        />
        <Paper elevation={4} sx={{ my: 4, py: 2, backgroundColor: 'divider', borderRadius: 4 }}>
          <TimeLines items={WorkExperience}/>
        </Paper>

        <SectionTitle 
          textBoxProps={{
            text: "Education"
          }}
        />
        <Box sx={{ my: 4 }}>
          <Education/>
        </Box>
      </Container>
    </Section>
  );
})

export default Resume;