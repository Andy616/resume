import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import About from "@/components/sections/about";


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
        <About/>
        {/*<Typography variant="h4" component="h1" sx={{ mb: 2 }}>*/}
        {/*  Material UI - Next.js App Router example in TypeScript*/}
        {/*</Typography>*/}
        {/*<Link href="/about" color="secondary" component={NextLink}>*/}
        {/*  Go to the about page*/}
        {/*</Link>*/}
      </Box>
    </Container>
  );
}
