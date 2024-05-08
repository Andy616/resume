'use client';

import { FC, memo } from "react";
import theme from "@/app/theme";
import Box from "@/components/box";
import Typography from "@mui/material/Typography";
import { Variant } from "@mui/material/styles/createTypography";
import * as React from "react";


interface TextBoxProps {
  text: string,
  component?: React.ElementType,
  variant?: Variant,
}

const TextBox: FC<TextBoxProps> = memo(function TextBox(
  { text , component = "div", variant = "h6" }
) {
  return (
    <Box
      border={1}
      borderColor="text.secondary"
      borderRadius={theme.shape.borderRadius * 4}
      sx={{ fontWeight: "bold", p: 2 }}
    >
      <Typography component={component} variant={variant}>
        {text}
      </Typography>
    </Box>
  )
})

export default TextBox;