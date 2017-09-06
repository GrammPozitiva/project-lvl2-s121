import fs from 'fs';

const getFileData = pathFile => fs.readFileSync(pathFile, 'utf-8');

export default getFileData;
