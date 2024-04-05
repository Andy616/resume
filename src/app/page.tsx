import dynamic from 'next/dynamic';
import * as React from 'react';
import Container from '@mui/material/Container';
import About from "@/components/sections/about";
import Resume from "@/components/sections/resume";
import Footer from "@/components/sections/footer";
import Contact from "@/components/sections/contact";
import { Paper } from '@mui/material';


const Header = dynamic(() => import('@/components/sections/header'), {ssr: false});

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Paper elevation={4} sx={{ my: 4, borderRadius: 8 }}>
        <Header/>
        <About/>
        <Resume/>
        <Contact/>
        <Footer/>
      </Paper>
    </Container>
  );
}
