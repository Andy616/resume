import { FC, memo } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box, Link } from '@mui/material';
import { SectionId } from '@/data/data';


const Header: FC = memo(function Header() {
  return (
    <>
      <AppBar>
        <Toolbar sx={{ alignSelf: 'center' }}>
          <Box >

            {Object.values(SectionId).map((section) => (
              <Link key={section} href={`#${section}`} underline="none" sx={{ color: '#fff', mx: 2, textTransform: "uppercase" }}>
                {section}
              </Link>
            ))}

          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
})

export default Header;