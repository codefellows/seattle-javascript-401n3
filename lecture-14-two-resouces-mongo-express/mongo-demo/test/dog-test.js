describe('our server', function() {
  let server = undefined
  before(function() {
    server = require('../index.js')
    server.listen(3000) 
  })

  // TODO your tests here
  //
  
  after(function() {
    server.close()
  })
})

