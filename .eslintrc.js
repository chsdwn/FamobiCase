module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['react-native-vector-icons'],
            message: 'Import Icon from @/components',
          },
        ],
        paths: [
          {
            name: 'react-native',
            importNames: ['Text'],
            message: 'Import Text from react-native-paper',
          },
          {
            name: 'axios',
            importNames: ['default'],
            message: 'Import pre-configured axios from @/lib',
          },
          {
            name: 'react-native-paper',
            importNames: ['useTheme'],
            message: 'Import useTheme from @/hooks',
          },
        ],
      },
    ],
    'react-hooks/exhaustive-deps': [
      'error',
      {
        additionalHooks: '(useStyle)',
      },
    ],
    curly: 'off',
  },
};
