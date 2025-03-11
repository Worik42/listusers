module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.ts',
          '.tsx',
          '.json',
          '.d.ts',
        ],
        alias: {
          '@features': './src/features',
          '@common': './src/common',
        },
      },
    ],
  ],
};
