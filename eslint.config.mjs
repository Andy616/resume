import nextPlugin from '@next/eslint-plugin-next';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier/flat';
import tseslint from 'typescript-eslint';

// Get the canonical @typescript-eslint plugin instance from typescript-eslint
const tsPlugin = tseslint.plugin;

// Replace the @typescript-eslint plugin instance in eslint-config-next/typescript
// with the same instance used by typescript-eslint to avoid
// "Cannot redefine plugin" errors.
const nextTsPatched = nextTs.map((config) => {
  if (config.plugins?.['@typescript-eslint']) {
    return {
      ...config,
      plugins: {
        ...config.plugins,
        '@typescript-eslint': tsPlugin,
      },
    };
  }
  return config;
});

const eslintConfig = tseslint.config(
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
    },
  },
  ...nextTsPatched,
  prettier,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
);

export default eslintConfig;
