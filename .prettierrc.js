//...require('gts/.prettierrc.json')
module.exports = {
  ...require('gts/.prettierrc.json'),
  root: true,
  extends: '@react-native-community',
  rules: { 'prettier/prettier': ['error', { endOfLine: 'auto' }] }, //add this line
};

