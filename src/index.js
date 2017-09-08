import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import difference from './difference';
import parse from './parser';


const getTypeFromPath = (pathFile) => {
  const typePath = path.extname(pathFile);
  return _.trim(typePath, '.');
};

const genDiff = (fileOne, fileTwo) => {
  const dataBefore = fs.readFileSync(fileOne, 'utf-8');
  const dataAfter = fs.readFileSync(fileTwo, 'utf-8');
  const objBefore = parse(getTypeFromPath(fileOne), dataBefore);
  const objAfter = parse(getTypeFromPath(fileTwo), dataAfter);
  return difference(objBefore, objAfter);
};

export default genDiff;
