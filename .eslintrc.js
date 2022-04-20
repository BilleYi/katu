/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['airbnb', 'airbnb/hooks', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react'],
  parser: 'babel-eslint',
  rules: {
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved': [
      2,
      {
        ignore: [
          '^@b2b',
          '^@config',
          '^@components',
          '^@graphql',
          '^@packages',
          '^@store',
          '^@svgs',
          '^@talons',
          '^@ant-design',
          '^@constants'
        ]
      }
    ],
    semi: ['error', 'never'],
    camelcase: 0,
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-param-reassign': 0,
    'no-underscore-dangle': 0,
    'no-plusplus': 0,
    'no-useless-escape': 0,
    'consistent-return': 0,
    'global-require': 0,
    'react/prop-types': [
      2,
      {
        ignore: [
          'children',
          'className',
          'cookies',
          'history',
          'Component',
          'pageProps',
          'apolloState',
          'apolloClient',
          'reduxStore',
          'reduxState',
          'actions',
          'asyncActions',
          'appState',
          'cartState',
          'catalogState',
          'categoryState',
          'checkoutState',
          'userState'
        ]
      }
    ],
    'react/no-danger': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 0,
    'react/destructuring-assignment': 0,
    'react/static-property-placement': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-no-target-blank': 0,
    'prefer-rest-params': 0,
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.'
      },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
      }
    ]
  }
}
