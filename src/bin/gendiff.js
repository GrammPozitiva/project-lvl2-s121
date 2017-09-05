#!/usr/bin/env node

const program = require('commander');

program
  .version('0.1.0')
  .option('-f, --format [type]', 'Output format')
  .arguments('<firstConfig> <secondConfig>')
  .description('Compares two configuration files and shows a difference.');

program.parse(process.argv);
