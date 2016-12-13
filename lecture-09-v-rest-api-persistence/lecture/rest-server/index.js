let http = require('http')
let Router = require('./lib/router.js')

const PORT = process.env.PORT || 3000

let router = new Router()
require('./routes/dog-routes')(router)

Router.get('/cats', function(req, res) {
  res.write(['meow', 'sam'])
  res.end()
})
