'use client';

import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { PaletteMode, ThemeOptions } from '@mui/material';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === 'dark' && {
      background: {
        default: grey[900],
        paper: 'rgba(255,255,255,0)',
      },
    }),
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
});

const theme = createTheme(getDesignTokens('dark'));

export default theme;
