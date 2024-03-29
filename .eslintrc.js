module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'ignorePatterns': ['node_modules', 'build'],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
  ],
  'rules': {
    'object-curly-spacing': ['warn', 'always'],
    'require-jsdoc': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  'settings': {
    'react': {
      'version': 'detect',
    },
  },
};
