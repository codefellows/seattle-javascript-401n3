let storage = require('../lib/storage')

module.exports = (router, storage) => {
  router.get('/dogs', function(req, res) {
    storage.fetchItem('dogs')
      .then(dogs => {
        res.write(dogs)
        res.end()
      })
  })
  router.post('/dogs', function(req, res) {
    
  })
}
