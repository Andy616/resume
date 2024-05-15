import { Container, Button } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import Typography from "@mui/material/Typography";

import Globe from "@/components/globe";
import Box from "@/components/box";


export default function NotFound() {
  return (
    <Container
      fixed
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        flexWrap: 'nowrap',
    }}>
      <Typography component={'div'} variant={'h5'} sx={{ fontWeight: "bold", my: 2, textAlign: 'center' }}>
        {`Looks like you've got lost! Let's go home!`}
      </Typography>

      <Button
        href={'/'}
        variant="outlined"
        size={'large'}
        startIcon={<HomeIcon />}
      >
        Home
      </Button>
      <Box sx={{ my: 2, width: '100%', height: '60vh' }}>
        <Globe/>
      </Box>

    </Container>
  )
}