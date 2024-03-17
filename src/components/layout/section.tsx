import Box from '@mui/material/Box';
import { FC, PropsWithChildren, memo } from "react";
import { SectionId } from "@/data/data";


const Section: FC<
  PropsWithChildren<{ sectionId: SectionId; sectionTitle?: string }>
> = memo(function Section({ children, sectionId }) {
  return (
    <Box component="section" id={ sectionId }>
      <Box sx={{ mx: "auto", maxWidth: "lg" }}>{children}</Box>
    </Box>
  )
})

export default Section;