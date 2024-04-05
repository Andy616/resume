import { FC, memo } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/system/Unstable_Grid";
import { Avatar, Paper, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Section from "@/components/layout/section";
import { AboutData, SectionId } from "@/data/data";


const About: FC = memo(function About() {
  const { profileImageSrc, description, aboutItems } = AboutData
  return (
    <Section sectionId={SectionId.About}>
      <Container fixed sx={{ mt: 4 }}>
        <Grid container>
          <Grid xs={12} md={3} alignContent='center'>
            <Avatar 
              alt="profile picture" 
              src={profileImageSrc} 
              sx={{ width: 200, height: 200, mx: "auto", my: 2 }}
              component={Paper}
              elevation={8}
            />
          </Grid>

          <Grid container xs={12} md={9}>
            <Paper elevation={4} sx={{ borderRadius: 4, backgroundColor: 'divider', mx: 4 }}>
              <Typography component="div" sx={{ m: 2, px: 2 }}>
                <Box component="h2" sx={{ fontWeight: "bold", textAlign: 'center' }}>About me</Box>
                <Box component="p" sx={{ color: "text.secondary" }}>{description}</Box>
              </Typography>

              <Grid container sx={{ m: 2 }}>
                {aboutItems.map(({ label, text, Icon }, idx) => (
                  <Grid xs={12} sm={6} key={idx} sx={{ p: 2 }}>
                    <Stack direction="row">
                      {Icon && <Icon/>}
                      <Box component="span" sx={{ fontWeight: "bold", mx: 1 }}>{label}:</Box>
                      <Box component="span" sx={{ color: "text.secondary" }}>{text}</Box>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Section>
  )
})

export default About;