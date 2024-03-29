'use client';

import { FC, memo } from "react";
import Box from "@mui/material/Box";
import theme from "@/app/theme";


const TextBox: FC<{ text: string }> = memo(function TextBox({ text }) {
  return (
    <Box
      component="h2"
      border={1}
      borderColor="text.secondary"
      borderRadius={theme.shape.borderRadius * 4}
      sx={{ fontWeight: "bold", p: 2 }}
    >{text}</Box>
  )
})

export default TextBox;