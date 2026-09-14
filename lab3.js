// const fs = require('fs')
// fs.writeFile('code.js','MERN',function(err){
// if (err) {
// console.error('Error writing to file:', err);
// } else {
// console.log('File created successfully!');
// }
// })

// const fs = require('fs')
// fs.readFile('code.js', 'utf8', function(err, data) {
// if (err) {
// console.error('Error writing to file:', err);
// } else {
// console.log(data);
// }
// })


// const fs = require('fs')
// fs.appendFile('code.js','Mongo Express React Node',function(err){
// if (err) {
// console.error('Error writing to file:', err);
// } else {
// console.log('File created successfully!');
// }
// })


const fs = require('fs')
fs.unlink('code.js', function(err){
console.log('Deleted')
})


