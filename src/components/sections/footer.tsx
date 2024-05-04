'use client';

import { FC, memo } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import IconButton from '@mui/material/IconButton';
import { SectionId } from '@/data/data';
import Box from "@/components/box";

function scrollToTop() {
  window.scrollTo(0, 0)
}

const Footer: FC = memo(function Footer() {
    return (
      <Box sx={{ mx: "auto", py: 4, textAlign: "center" }}>
        <Box>
          {/*<IconButton href={`#${SectionId.About}`} aria-label={SectionId.About}>*/}
          <IconButton aria-label={SectionId.About} onClick={scrollToTop}>
            <KeyboardArrowUpIcon sx={{ width: 40, height: 40 }}/>
          </IconButton>
        </Box>
        <Box component="span">© {new Date().getFullYear()} Andy Kuo</Box>
      </Box>
    )
  }
)

export default Footer;