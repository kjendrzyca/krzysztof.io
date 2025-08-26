import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import prettierConfig from 'eslint-config-prettier'
import prettier from 'eslint-plugin-prettier'
import nextPlugin from '@next/eslint-plugin-next'

export default [
  { ignores: ['dist', '.next', 'out', 'node_modules'] },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    settings: {
      react: { version: '18.3' },
      next: {
        rootDir: process.cwd(),
      },
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: process.cwd(),
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'react-hooks': reactHooks,
      react,
      prettier,
      '@next/next': nextPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...tseslint.configs.stylistic.rules,
      ...reactHooks.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...prettierConfig.rules,
      'prettier/prettier': [
        'warn',
        {
          semi: false,
          singleQuote: true,
          trailingComma: 'all',
          printWidth: 100,
          tabWidth: 2,
          arrowParens: 'always',
          bracketSameLine: false,
          jsxSingleQuote: false,
          singleAttributePerLine: true,
        },
      ],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/no-unsafe-member-access': 'warn',
      '@typescript-eslint/no-unsafe-call': 'warn',
      '@typescript-eslint/no-unsafe-return': 'warn',
      'react/prop-types': 'off', // Not needed with TypeScript
      'react/no-unescaped-entities': 'warn',
      'react/no-unknown-property': 'off', // Allow jsx props for styled-jsx
      '@next/next/no-img-element': 'warn',
      // Next.js specific adjustments
      '@typescript-eslint/no-require-imports': 'off', // Allow require() in Next.js configs
      '@typescript-eslint/no-var-requires': 'off', // Allow require() in Next.js configs
    },
  },
]