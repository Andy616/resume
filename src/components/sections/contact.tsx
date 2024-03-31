import { FC, memo } from "react";
import Box from "@mui/material/Box";
import { Link } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import { SectionId, SocialLinks } from "@/data/data";
import Typography from "@mui/material/Typography";
import Section from "@/components/layout/section";
import IconButton from '@mui/material/IconButton';


const Contact: FC = memo(function Contact() {
  return (
    <Section sectionId={SectionId.Contact}>
      <Box sx={{ m: 4 }}>

        <Typography component="div" variant="h4" textAlign="center" m={4}>
          Get in touch
        </Typography>

        <Typography textAlign="center" sx={{ mb: 8 }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores atque corporis doloribus ea,
          harum ipsum laudantium, nihil quidem quisquam reprehenderit totam, ut voluptatem! Cupiditate dolore
          molestias quod rem rerum!
        </Typography>

        <Grid container spacing={4}>

          {SocialLinks.map((social, idx) => (
            <Grid xs={12} sm={4} key={idx} textAlign="center">

              <IconButton aria-label={social.label} href={social.href} target='_blank'>
                <social.Icon sx={{ width: 64, height: 64 }}/>
              </IconButton>

              <Typography component='div'>
                <Link
                  href={social.href}
                  aria-label={social.label}
                  key={social.label}
                  target='_blank'
                  underline='none'
                >
                  <span>{social.text}</span>
                </Link>
              </Typography>

            </Grid>
          ))}

        </Grid>

      </Box>
    </Section>
  )
})

export default Contact;