import * as React from 'react';
import Container from '@mui/material/Container';
import About from "@/components/sections/about";
import Resume from "@/components/sections/resume";
import Footer from "@/components/sections/footer";
import Contact from "@/components/sections/contact";
import Header from '@/components/sections/header';


export default function Home() {
  return (
    <Container maxWidth="lg">
      <Header/>
      <About/>
      <Resume/>
      <Contact/>
      <Footer/>
    </Container>
  );
}
