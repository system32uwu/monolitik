module.exports = {
  env: {
    browser: true
  },
  extends: [
    'plugin:react/recommended',
    'base',
    'plugin:react/jsx-runtime'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'prettier'
  ],
  rules: {
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.jsx', '.tsx', '.js'] }
    ],
    'react/function-component-definition': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/extensions': [
      1,
      {
        tsx: 'never',
        ts: 'never',
        jsx: 'never',
        js: 'never',
        json: 'always'
      }
    ],
    'react/button-has-type': 'off',
    'react/prop-types': 'off'
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {}
    }
  }
}
