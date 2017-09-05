import program from 'commander';

program
  .version('0.1.0')
  .option('-f, --format [type]', 'Output format')
  .arguments('<firstConfig> <secondConfig>')
  .description('Compares two configuration files and shows a difference.');

export default () => program.parse(process.argv);
