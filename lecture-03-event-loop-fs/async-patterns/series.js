/*
 * as fast as possible (async), but we want the files
 * printed in order
 */
fs.readFile('./one', function(err, data) {
  console.log(data)
  fs.readFile('./two', function(err, data) {
    console.log(data)
    fs.readFile('./three', function(err, data) {
      console.log(data)
      fs.readFile('./four', function(err, data) {
        console.log(data)
      })
    })
  })
})
