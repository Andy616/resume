import MuiBox from '@mui/material/Box'
import {BoxProps} from '@mui/material/Box'

/**
 * Patch Mui Box to avoid TS2590 issue
 */
const Box = (props: BoxProps) => {
  return (
    <MuiBox
      {...props}
      component="div"
    />
  )
}

export type {BoxProps}

export default Box;