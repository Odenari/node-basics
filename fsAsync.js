const { readFile, writeFile } = require('fs');
const util = require('util');

const pfs = {
  combineFiles: util.promisify(combineFiles),
};

console.log('Start');

function logCombinedFile() {
  pfs.combineFiles().then(text => console.log(text));
}

console.log(logCombinedFile());

function combineFiles() {
  readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
      return console.log(err);
    }
    const first = result;
    readFile('./content/subfolder/test.txt', 'hex', (err, result) => {
      if (err) {
        return console.log(err);
      }
      const second = result;
      const combinedFile = `Here your async result bro : ${first} and ${second}`;
      writeFile('./content/async-text.txt', combinedFile, (err, result) => {
        if (err) return console.log(err);
        console.log('Done with first  task');
      });
    });
  });
}
console.log('Starting next task');
