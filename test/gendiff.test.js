import genDiff from '../src';

const flatExpected = `{
    host: hexlet.io
  + timeout: 20
  - timeout: 50
  - proxy: 123.234.53.22
  + verbose: true
}`;

test('compares of JSON format difference',() => {
  const fileOne = 'test/simple/before.json';
  const fileTwo = 'test/simple/after.json';
  expect(genDiff(fileOne, fileTwo)).toBe(flatExpected);
});
test('compares of YAML format difference',() => {
  const fileOne = 'test/simple/before.yml';
  const fileTwo = 'test/simple/after.yml';
  expect(genDiff(fileOne, fileTwo)).toBe(flatExpected);
});
