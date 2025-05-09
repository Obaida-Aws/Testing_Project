import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: { js },
    rules: {
      // أضف قواعد إضافية هنا إذا لزم
    },
    extends: ['js/recommended', prettier],
  },
]);
