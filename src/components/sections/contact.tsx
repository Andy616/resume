'use client';

import { FC, memo } from "react";
import { Link } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import Typography from "@mui/material/Typography";
import IconButton from '@mui/material/IconButton';

import Section from "@/components/layout/section";
import Globe from "@/components/globe";
import Box from "@/components/box";
import SectionTitle from "@/components/sections/sectionTitle";
import { ContactWordings, SectionId, SocialLinks } from "@/data/data";
import { useBreakpointDetector } from "@/hooks/useBreakpointDetector";


const Contact: FC = memo(function Contact() {
  const isMobile = useBreakpointDetector();

  return (
    <Section sectionId={SectionId.Contact}>
      <Box>

        <SectionTitle 
          textBoxProps={{
            text: "Contact"
          }}
        />

        <Typography sx={{ mx: 4, my: 4 }} textAlign="center">
          {ContactWordings}
        </Typography>

        <Grid container spacing={4}>

          {SocialLinks.map((social, idx) => (
            <Grid key={idx} xs={12} sm={4} textAlign={'center'}>

              <IconButton aria-label={social.label} href={social.href} target='_blank'>
                <social.Icon sx={{ width: 64, height: 64 }}/>
              </IconButton>

              <Typography component={'div'}>
                <Link
                  href={social.href}
                  aria-label={social.label}
                  key={social.label}
                  target='_blank'
                  underline='none'
                  color='text.primary'
                >
                  <span>{social.text}</span>
                </Link>
              </Typography>

            </Grid>
          ))}

        </Grid>

        <Box sx={{ my: 4, mx: isMobile ? 0 : 8 }} height={isMobile ? 300 : 450}>
          <Globe/>
        </Box>

      </Box>
    </Section>
  )
})

export default Contact;