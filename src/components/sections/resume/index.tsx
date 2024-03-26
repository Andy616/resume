import { FC, memo } from "react";
import Section from "@/components/layout/section";
import { Education, SectionId } from "@/data/data";
import TimeLines from "@/components/timelines";

const Resume: FC = memo(function Resume() {
  return (
    <Section sectionId={SectionId.Resume}>
      <TimeLines items={Education}/>
    </Section>
  )
})

export default Resume;