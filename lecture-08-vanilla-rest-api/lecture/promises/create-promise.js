let myPromise = new Promise((resolve, reject) => {
  if (true) {
    resolve('hello')
  }
  else {
    reject('boo')
  }
})

myPromise
  .then(message => {
    console.log(message)
  })
  .catch(err => {
    console.error(err)
  })

let fs = require('fs')

function readFile(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, buffer) => {
      if (err) return reject(err)
      resolve(buffer) 
    })
  })
}


readFile('./test.js')
  .then(buffer => {
    console.log(buffer.toString())
  })
  .catch(err => {
    console.error(err)
  })
