import { Breakpoint, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

/**
 * Detect whether current device width is smaller than specified breakpoint.
 */
export function underBreakpoint(breakpoint: Breakpoint = "sm"): boolean {
    const theme = useTheme();
    return !useMediaQuery(theme.breakpoints.up(breakpoint));
}
