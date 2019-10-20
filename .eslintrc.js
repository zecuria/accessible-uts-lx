module.exports = {
    extends: ['react-app', 'airbnb'],
    parser: 'babel-eslint',
    plugins: [
      'jest',
      'sort-imports-es6-autofix',
    ],
    env: {
      'browser': true,
      'jest/globals': true
    },
    rules: {
      'react/jsx-filename-extension': [
        1,
        {
          'extensions': [
            '.js',
            '.jsx'
          ]
        }
      ],
      'react/prop-types': 'off',
      'react/require-default-props': 'off',
      'sort-imports-es6-autofix/sort-imports-es6': 2,
      'import/order': [
        'error',
        {
          groups: [['builtin', 'external', 'internal']],
          'newlines-between': 'always',
        }
      ],
    }
  };
  