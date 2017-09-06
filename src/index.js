import _ from 'lodash';
import parse from './parser';

const genDiff = (fileOne, fileTwo) => {
  const fileBefore = parse(fileOne);
  const fileAfter = parse(fileTwo);

  const keys = _.union(Object.keys(fileBefore), Object.keys(fileAfter));

  const result = keys.reduce((acc, key) => {
    if (fileBefore[key] === fileAfter[key]) {
      return acc.concat(` ${key}: ${fileBefore[key]}`);
    }
    if (fileAfter[key] !== undefined && fileBefore[key] !== undefined) {
      return acc.concat(`  + ${key}: ${fileAfter[key]}`, `  - ${key}: ${fileBefore[key]}`);
    }
    if (fileAfter[key] !== undefined) {
      return acc.concat(`  + ${key}: ${fileAfter[key]}`);
    }
    if (fileBefore[key] !== undefined) {
      return acc.concat(`  - ${key}: ${fileBefore[key]}`);
    }

    return acc;
  }, []).join('\n');
  return `{
   ${result}
}`;
};


export default genDiff;
