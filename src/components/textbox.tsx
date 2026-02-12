'use client';

import { FC, memo } from 'react';
import theme from '@/app/theme';
import Box from '@/components/box';
import Typography from '@mui/material/Typography';
import { Variant } from '@mui/material/styles/createTypography';
import * as React from 'react';

export interface TextBoxProps {
  text: string;
  className?: string;
  component?: React.ElementType;
  variant?: Variant;
}

const TextBox: FC<TextBoxProps> = memo(function TextBox({
  text,
  className,
  component = 'div',
  variant = 'h5',
}) {
  return (
    <Box
      className={className}
      border={1}
      borderColor="text.secondary"
      borderRadius={theme.shape.borderRadius * 4}
      sx={{ p: 2 }}
    >
      <Typography
        component={component}
        variant={variant}
        sx={{ fontWeight: 'bold' }}
      >
        {text}
      </Typography>
    </Box>
  );
});

export default TextBox;
