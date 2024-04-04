import { FC, memo } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/system/Unstable_Grid";
import { Avatar, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Section from "@/components/layout/section";
import { AboutData, SectionId } from "@/data/data";


const About: FC = memo(function About() {
  const { profileImageSrc, description, aboutItems } = AboutData
  return (
    <Section sectionId={SectionId.About}>
      <Container fixed>
        <Grid container spacing={{ xs: 2, sm: 3 }} columns={{ xs: 4, sm: 12 }}>
          <Grid xs={12} sm={3} alignContent='center'>
            <Avatar alt="profile picture" src={profileImageSrc} sx={{ width: 200, height: 200, mx: "auto" }}/>
          </Grid>

          <Grid container xs={12} sm={9}>
            <Typography component="div" sx={{ m: 2 }}>
              <Box component="h2" sx={{ fontWeight: "bold" }}>About me</Box>
              <Box component="p" sx={{ color: "text.secondary" }}>{description}</Box>
            </Typography>

            <Grid container>
              {aboutItems.map(({ label, text, Icon }, idx) => (
                <Grid xs={12} sm={6} key={idx}>
                  <Stack direction="row">
                    {Icon && <Icon/>}
                    <Box component="span" sx={{ fontWeight: "bold", mx: 1 }}>{label}:</Box>
                    <Box component="span" sx={{ color: "text.secondary" }}>{text}</Box>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Section>
  )
})

export default About;