var fs = require('fs');

// //readFileSync

// console.log('A');
// var result = fs.readFileSync('syntax/sample.txt', 'utf8');
// console.log(result)
// console.log('C');


//readFileAsync
console.log('A');
var result = fs.readFile('syntax/sample.txt', 'utf8', (err, result) => {
    console.log(result)
});
console.log('C');
