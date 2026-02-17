import Container from '@mui/material/Container';
import About from '@/components/sections/about';
import Resume from '@/components/sections/resume';
import Footer from '@/components/sections/footer';
import Contact from '@/components/sections/contact';
import Header from '@/components/sections/headerWrapper';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Header />
      <About />
      <Resume />
      <Contact />
      <Footer />
    </Container>
  );
}
