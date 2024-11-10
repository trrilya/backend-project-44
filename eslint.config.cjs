const globals = require('globals');
const pluginJs = require('@eslint/js');

module.exports = [
  {
    languageOptions: {
      globals: globals.node,
    },
    plugins: {
      js: pluginJs,
    },
    rules: {
      no-trailing-spaces: 'error',
      no-multiple-empty-lines: ['error', { max: 1 }],
      eol-last: ['error', 'always'],
      quotes: ['error', 'single'],
      indent: ['error', 2],
      no-extra-semi: 'error',
    },
  },
  pluginJs.configs.recommended,
];
