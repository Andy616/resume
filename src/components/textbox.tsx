'use client';

import { FC, memo } from "react";
import theme from "@/app/theme";
import Box from "@/components/box";


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