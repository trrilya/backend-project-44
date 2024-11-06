import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: { globals: globals.node },
    plugins: {
      js: pluginJs,
    },
    rules: {
      'no-trailing-spaces': 'error',
      'no-multiple-empty-lines': ['error', { 'max': 1 }],
      'eol-last': ['error', 'always'],
    },
  },
  pluginJs.configs.recommended,
];
