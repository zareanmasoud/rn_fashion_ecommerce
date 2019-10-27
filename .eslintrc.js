module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'import/no-extraneous-dependencies': ['error', {packageDir: './'}],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/prop-types': [
      'error',
      {
        ignore: ['navigation'],
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': 2,
  },
  env: {
    jest: true,
  },
  parser: 'babel-eslint',
  root: true,
  extends: [
    'standard',
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
    'prettier/standard',
    'plugin:prettier/recommended',
    'eslint-config-prettier',
  ],
  plugins: ['react', 'react-native', 'flowtype', 'prettier', 'standard'],
};
