export default [
  {
    ignores: ['dist', 'node_modules']
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
        ecmaVersion: 'latest'
      },
      globals: {
        console: 'readonly'
      }
    }
  }
]
