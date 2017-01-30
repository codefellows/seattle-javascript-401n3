let basicAuth = require('../lib/authentication')

module.exports = (router) => {
  router.post('/login', basicAuth, (req, res) => {
    res.json(req.user.generateToken())  // TODO Promisify this workflow
  })
}
