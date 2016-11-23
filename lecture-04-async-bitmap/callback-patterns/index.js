let fs = require('fs')

function makeFirstCharA(err, file, data) {
  data[0] = 65
  fs.writeFile(file, data, function(err, data) {
    console.log('data written')
  })
}

function makeFirstCharB(err, file, data) {
  data[0] = 66
  fs.writeFile(file, data, function(err, data) {
    console.log('data written')
  })
}

function modifyFile(file, cb) {
  fs.readFile(file, function(err, data) {
    //cb(err, file, data)
    cb(err, file, data)
  })
}

modifyFile('./data.txt', makeFirstCharA)
modifyFile('./data.txt', makeFirstCharB)

/*
fs.readFile('./data.txt', function(err, data) {
  console.log('data read')
  fs.writeFile('./data2.txt', data, function(err, data) {
    console.log('data written')
  })
})
*/
