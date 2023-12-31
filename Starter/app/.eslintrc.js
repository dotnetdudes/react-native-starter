module.exports = {
  env: {
    'jest/globals': true,
  },
  parserOptions: {
    requireConfigFile: false,
  },
  root: true,
  extends: ['@react-native', 'plugin:redux-saga/recommended'],
  plugins: ['jest', 'redux-saga'],
  rules: {
    semi: ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'react/require-default-props': ['error'],
    'react/default-props-match-prop-types': ['error'],
    'react/sort-prop-types': ['error'],
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
};
