import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Metadata } from 'next';

import theme from './theme';
import '@/static/background.css';
import { SiteMetadata } from '@/data/data';

export const metadata: Metadata = {
  title: SiteMetadata.title,
  description: SiteMetadata.description,
  openGraph: {
    title: SiteMetadata.title,
    description: SiteMetadata.description,
    siteName: SiteMetadata.title,
    url: SiteMetadata.url,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {props.children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
