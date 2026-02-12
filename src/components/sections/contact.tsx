'use client';

import { FC, memo } from 'react';
import { Link, Container } from '@mui/material';
import Grid from '@mui/system/Unstable_Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import Section from '@/components/layout/section';
import Globe from '@/components/globe';
import Box from '@/components/box';
import SectionTitle from '@/components/sections/sectionTitle';
import { ContactWordings, SectionId, SocialLinks } from '@/data/data';
import { useBreakpointDetector } from '@/hooks/useBreakpointDetector';

import '@/static/glowy.css';

const Contact: FC = memo(function Contact() {
  const isMobile = useBreakpointDetector();

  return (
    <Section sectionId={SectionId.Contact}>
      <Container fixed sx={{ px: 0 }}>
        <SectionTitle
          textBoxProps={{
            text: 'Contact',
          }}
        />

        <Typography sx={{ mx: 4, my: 4 }} textAlign="center">
          {ContactWordings}
        </Typography>

        <Grid container spacing={4}>
          {SocialLinks.map((social, idx) => (
            <Grid key={idx} xs={12} sm={4} textAlign={'center'}>
              <IconButton
                aria-label={social.label}
                href={social.href}
                target="_blank"
                className={'icon-frame'}
                sx={{
                  border: 1,
                  borderColor: '#fff',
                  borderRadius: '50%',
                  p: 4,
                  m: 2,
                }}
              >
                <social.Icon sx={{ width: 64, height: 64 }} />
              </IconButton>

              {/* <svg width={0} height={0} style={{ zIndex: 0 }}>
                <filter id="wavy">
                  <feTurbulence x={0} y={0} baseFrequency={0.0009} numOctaves={5} seed={2}>
                    <animate 
                      attributeName="baseFrequency" 
                      dur={'30s'} 
                      values="0.1;0.05;0.1"
                      repeatCount={'indefinite'}
                    ></animate>
                  </feTurbulence>
                  <feDisplacementMap in="SourceGraphic" scale={5}></feDisplacementMap>
                </filter>
              </svg> */}

              <Typography component={'div'}>
                <Link
                  href={social.href}
                  aria-label={social.label}
                  key={social.label}
                  target="_blank"
                  underline="none"
                  color="text.primary"
                >
                  <span>{social.text}</span>
                </Link>
              </Typography>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ my: 4, mx: isMobile ? 0 : 8 }} height={isMobile ? 300 : 450}>
          <Globe />
        </Box>
      </Container>
    </Section>
  );
});

export default Contact;
