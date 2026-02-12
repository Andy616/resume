import { FC, memo } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/system/Unstable_Grid';
import { Avatar, Paper, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

import Box from '@/components/box';
import Section from '@/components/layout/section';
import { AboutData, SectionId } from '@/data/data';

const About: FC = memo(function About() {
  const { profileImageSrc, description, aboutItems } = AboutData;
  return (
    <Section sectionId={SectionId.About}>
      <Container fixed sx={{ mt: 8, px: 0 }}>
        <Grid container sx={{ justifyContent: 'center' }}>
          <Grid xs={12} md={3} alignContent="center">
            <Avatar
              alt="profile picture"
              src={profileImageSrc}
              sx={{ width: 200, height: 200, mx: 'auto', my: 2 }}
              component={Paper}
              elevation={8}
            />
          </Grid>

          <Grid
            container
            xs={12}
            md={6}
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography component={'h3'} variant={'h3'} textAlign={'center'}>
              {"I'm Andy Kuo,"}
            </Typography>
            <Typography component={'h4'} variant={'h4'} textAlign={'center'}>
              {'a software engineer.'}
            </Typography>
          </Grid>

          <Paper
            elevation={4}
            sx={{
              borderRadius: 4,
              backgroundColor: 'divider',
              mt: 4,
            }}
          >
            <Typography component="div" sx={{ my: 4, mx: 4 }}>
              <Typography
                component="div"
                variant="h5"
                sx={{ fontWeight: 'bold', textAlign: 'center' }}
              >
                About Me
              </Typography>
              <Box component="p" sx={{ color: 'text.secondary', mt: 2 }}>
                {description}
              </Box>
            </Typography>

            <Grid container sx={{ m: 4 }}>
              {aboutItems.map(({ label, text, Icon }, idx) => (
                <Grid xs={12} sm={6} key={idx} sx={{ p: 2 }}>
                  <Stack direction="row">
                    {Icon && <Icon />}
                    <Box component="span" sx={{ fontWeight: 'bold', mx: 1 }}>
                      {label}:
                    </Box>
                    <Box component="span" sx={{ color: 'text.secondary' }}>
                      {text}
                    </Box>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Container>
    </Section>
  );
});

export default About;
