let User = require('../models/user')
let authMiddlewear = require('../lib/authentication')
let jsonParser = require('body-parser').json()
module.exports = (router) => {
  router.post('/users', jsonParser, (req, res) => {
    let user = new User(req.body)
    user.hashPassword(user.password)
      .then(user => user.save())
      .then(user => res.json(user))
      .catch()
  })

  router.get('/users/:id', authMiddlewear, (req, res) => {
    //res.json(req.user)
    delete req.user.password
    res.json(req.user)
    //User.findById(req.params.id)
    //  .then(user => res.json(user))
  })
}
/*
  what *authorization* can potentially look like. Will examine in later lecture
  router.get('/pets/:id', authMiddleWear, (req, res) => {
     Pet.findById(req.params.id)
       .then(pet => {
         if(req.user.username !== pet.owner) return res.json({msg: 'unauthorized'})
         res.json(pet)
       })
  })
}
*/

