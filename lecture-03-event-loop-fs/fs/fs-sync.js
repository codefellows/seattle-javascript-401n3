let fs = require('fs')

let file = fs.readFileSync('./data.txt')
console.log(file.toString())
