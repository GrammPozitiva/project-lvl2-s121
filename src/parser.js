import yaml from 'js-yaml';
import ini from 'ini';
import fs from 'fs';
import path from 'path';

const parseFromFile = (file) => {
  switch (path.extname(file)) {
    case '.yml': return yaml.load(fs.readFileSync(file, 'utf-8'));

    case '.json': return JSON.parse(fs.readFileSync(file, 'utf-8'));

    case '.ini': return ini.parse(fs.readFileSync(file, 'utf-8'));

    default: return {};
  }
};

export default parseFromFile;
