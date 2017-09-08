#!/usr/bin/env node

import program from 'commander';
import packjson from '../../package.json';
import genDiff from '..';

program
  .version(packjson.version)
  .option('-f, --format [type]', 'Output format')
  .arguments('<firstConfig> <secondConfig>')
  .description(packjson.description)
  .action((firstConfig, secondConfig) => {
    const diff = genDiff(firstConfig, secondConfig);
    console.log(diff);
  });

program.parse(process.argv);
