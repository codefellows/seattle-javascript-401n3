let fs = require('fs')

/*
fs.readFile('./custom-promise-review.js', function(err, buffer) {
  console.log(buffer.toString())
})
*/

console.log(1)
function readFile(file) {
  console.log(3)
  return new Promise((resolve, reject) => {
    console.log(4)
    fs.readFile(file, (err, buffer) => {
      console.log(6)
      err ? reject(err) : resolve(buffer)
    }) 
    console.log(4.5)
  })  
}

console.log(2)

let promise = readFile('./custom-promise-review.js')
promise.then(buffer => {
     console.log(7)
     //console.log(buffer.toString())
  }).catch(err => {
     console.log(err)
  })
console.log(5)
