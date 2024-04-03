import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import About from "@/components/sections/about";
import Resume from "@/components/sections/resume";
import Footer from "@/components/sections/footer";
import Contact from "@/components/sections/contact";


export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box sx={{ m: 4 }}>
          <About/>
        </Box>

        <Resume/>
        <Contact/>
        <Footer/>
      </Box>
    </Container>
  );
}
