import { FC, memo } from "react";
import Section from "@/components/layout/section";
import { Education, SectionId, WorkExperience } from "@/data/data";
import TimeLines from "@/components/timelines";
import Divider from '@mui/material/Divider';
import { Chip } from "@mui/material";


const Resume: FC = memo(function Resume() {
  return (
    <Section sectionId={SectionId.Resume}>
      <Divider variant="middle">
        <Chip label="Chip" variant="outlined"/>
      </Divider>
      <TimeLines items={WorkExperience}/>
    </Section>
  );
})

export default Resume;