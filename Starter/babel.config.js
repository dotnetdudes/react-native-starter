const presets = ['module:metro-react-native-babel-preset'];
const plugins = [];

plugins.push([
  'module-resolver',
  {
    root: ['./src'],
    extensions: ['.js', '.json'],
    alias: {
      '@': './src',
    },
  },
  'react-native-reanimated/plugin',
]);

const env = {
  production: {
    plugins: ['react-native-paper/babel'],
  },
};

module.exports = {
  presets,
  plugins,
  env,
};
