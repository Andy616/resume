import { FC, memo } from 'react';
import Box from "@mui/material/Box";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import IconButton from '@mui/material/IconButton';
import { SectionId } from '@/data/data';

const Footer: FC = memo(function Footer() {
    return (
      <Box sx={{ mx: "auto", py: 4, textAlign: "center" }}>
        <Box>
          <IconButton href={`#${SectionId.About}`} aria-label={SectionId.About}>
            <KeyboardArrowUpIcon sx={{ width: 40, height: 40 }}/>
          </IconButton>
        </Box>
        <Box component="span">© {new Date().getFullYear()} Andy Kuo</Box>
      </Box>
    )
  }
)

export default Footer;