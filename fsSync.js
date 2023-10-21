const { readFileSync, writeFileSync } = require('fs');

console.log('Start');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/subfolder/test.txt', 'utf8');

writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}`
);

console.log(' Done with this task');
console.log('Starting the next one');