let EE = require('events')
let ee = new EE()

ee.on('anEvent', function () {
  console.log('an event occured')
})

ee.emit('x')
ee.emit('anEvent')
ee.emit('y')
ee.emit('anEvent')


fs.readFile('./basic-ee.js', function(err, data) {
  ee.emit('readSecondFile')
})

ee.on('readSecondFile', function(err, data) {
  fs.readFile('./basic-ee.js', function(err, data) {
    ee.emit('readThridFile')
  })
})

ee.on('readThirdFile', function(err, data) {
  fs.readFile('./basic-ee.js', function(err, data) {
    console.log('done')
  })
})


