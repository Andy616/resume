import { FC, memo } from "react";
import Section from "@/components/layout/section";
import { AboutData, SectionId } from "@/data/data";
import Container from "@mui/material/Container";
import Grid from "@mui/system/Unstable_Grid";
import { Avatar } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";


const About: FC = memo(function About() {
  const { profileImageSrc, description, aboutItems } = AboutData
  return (
    <Section sectionId={SectionId.About}>
      <Container fixed>
        <Grid container spacing={{ xs: 2, sm: 3 }} columns={{ xs: 4, sm: 12 }}>
          <Grid xs={12} sm={4}>
            <Avatar alt="profile picture" src={profileImageSrc} sx={{ width: 128, height: 128, mx: "auto" }}/>
          </Grid>

          <Grid container xs={12} sm={8}>
            <Typography component="div">
              <Box component="h2" sx={{ fontWeight: "bold" }}>About me</Box>
              <Box component="p" sx={{ color: "grey" }}>{description}</Box>
            </Typography>

            <Grid container>
              {aboutItems.map(({ label, text, Icon }, idx) => (
                <Grid xs={12} sm={6} key={idx}>
                  {Icon && <Icon sx={{ mb: -0.5 }}/>}
                  <Box component="span" sx={{ fontWeight: "bold", m: 1 }}>{label}:</Box>
                  <Box component="span" sx={{ color: "grey", m: 1 }}>{text}</Box>
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