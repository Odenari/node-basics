const path = require('path');

//returns separator symbol
console.log(path.sep);

//return last thing after last separator symbol
const base = path.basename(filePath);

//concatenating string to path
const filePath = path.join('/content', 'subfolder', 'test.txt');

//create an absolute path
const absolutePath = path.resolve(__dirname, filePath);

console.log(base);
console.log(filePath);
console.log(absolutePath);
