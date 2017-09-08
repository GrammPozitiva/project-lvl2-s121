import yaml from 'js-yaml';
import ini from 'ini';

const parse = (type, data) => {
  switch (type) {
    case 'yml': return yaml.load(data);

    case 'json': return JSON.parse(data);

    case 'ini': return ini.parse(data);

    default: return {};
  }
};

export default parse;
