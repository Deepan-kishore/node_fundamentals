const fs = require('fs');
const bs = fs.readFileSync(process.argv[2]);
console.log(bs.toString().split('\n').length-1);