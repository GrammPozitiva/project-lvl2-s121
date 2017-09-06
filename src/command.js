import program from 'commander';
import packjson from '../package.json';
import genDiff from './index';
program
  .version(packjson.version)
  .option('-f, --format [type]', 'Output format')
  .arguments('<firstConfig> <secondConfig>')
  .description(packjson.description)
  .action(function(firstConfig, secondConfig){
    const diff = genDiff(firstConfig, secondConfig);
    console.log(diff);
  });

export default () => program.parse(process.argv);
