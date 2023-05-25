module.exports = {
  env: {
    'jest/globals': true,
  },
  root: true,
  extends: ['@react-native-community', 'plugin:redux-saga/recommended'],
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
