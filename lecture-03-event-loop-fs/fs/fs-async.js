let fs = require('fs')
fs.readFile('./data.txt', function(err, data) {
  if (err) {
    console.log(err)
    // handle err
    return
  }
  console.log(data.toString())
})

// with error
fs.readFile('./no-file.txt', function(err, data) {
  if (err) {
    console.log(err)
    // handle err
    return
  }
  console.log(data.toString())
})
