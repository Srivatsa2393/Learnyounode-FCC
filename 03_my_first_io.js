/* const fs = require('fs');

const buffer = fs.readFileSync(process.argv[2]);

const result = buffer.toString().split('\n').length - 1;

console.log(result);
//console.log(buffer.toString()); */


const fs = require('fs');

const buffer = fs.readFileSync(process.argv[2]);
//console.log(buffer);

const result = buffer.toString().split('\n').length - 1;
console.log(result);