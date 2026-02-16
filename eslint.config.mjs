import { defineConfig } from 'eslint/config';
import nextPlugin from '@next/eslint-plugin-next';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier/flat';
import tseslint from 'typescript-eslint';

const eslintConfig = defineConfig([
  // Your other configurations...
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
    },
  },
  ...nextTs,
  prettier,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
]);

export default eslintConfig;
