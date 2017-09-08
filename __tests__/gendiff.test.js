import genDiff from '../src';

const flatExpected = `{
    host: hexlet.io
  + timeout: 20
  - timeout: 50
  - proxy: 123.234.53.22
  + verbose: true
}`;

test('compares of JSON format difference',() => {
  const fileOne = '__tests__/__fixtures__/json/before.json';
  const fileTwo = '__tests__/__fixtures__/json/after.json';
  expect(genDiff(fileOne, fileTwo)).toBe(flatExpected);
});
test('compares of YAML format difference',() => {
  const fileOne = '__tests__/__fixtures__/yaml/before.yml';
  const fileTwo = '__tests__/__fixtures__/yaml/after.yml';
  expect(genDiff(fileOne, fileTwo)).toBe(flatExpected);
});
test('compares of INI format difference',() => {
  const fileOne = '__tests__/__fixtures__/ini/before.ini';
  const fileTwo = '__tests__/__fixtures__/ini/after.ini';
  expect(genDiff(fileOne, fileTwo)).toBe(flatExpected);
});
