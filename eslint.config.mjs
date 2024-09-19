import antfu from '@antfu/eslint-config'

export default antfu(
  {
    vue: true,
    typescript: true,
    formatters: true,
  },
  {
    rules: {
      'semi': ['error', 'never'],
      'style/semi': ['error', 'never'],
    },
  },
)
