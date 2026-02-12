import { Breakpoint, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

/**
 * Detect whether current device width is smaller than specified breakpoint.
 */
export const useBreakpointDetector = (breakpoint: Breakpoint = 'sm') => {
  const theme = useTheme();
  return !useMediaQuery(theme.breakpoints.up(breakpoint));
};
