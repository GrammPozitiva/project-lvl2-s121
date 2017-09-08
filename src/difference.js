import _ from 'lodash';

const difference = (objBefore, objAfter) => {
  const keys = _.union(Object.keys(objBefore), Object.keys(objAfter));
  const result = keys.reduce((acc, key) => {
    if (objBefore[key] === objAfter[key]) {
      return acc.concat(` ${key}: ${objBefore[key]}`);
    }
    if (_.has(objAfter, key) && _.has(objBefore, key)) {
      return acc.concat(`  + ${key}: ${objAfter[key]}`, `  - ${key}: ${objBefore[key]}`);
    }
    if (_.has(objAfter, key)) {
      return acc.concat(`  + ${key}: ${objAfter[key]}`);
    }
    if (_.has(objBefore, key)) {
      return acc.concat(`  - ${key}: ${objBefore[key]}`);
    }

    return acc;
  }, []).join('\n');

  return `{
   ${result}
}`;
};
export default difference;
