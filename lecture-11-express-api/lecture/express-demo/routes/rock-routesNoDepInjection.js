let rocks = [
 {name: 'fragle', age: 84},
 {name: 'kid rock', age: 12},
 {name: 'fragle', age: 10},
 {name: 'rock steady', age: 22},
 {name: 'hard rock', age: 1000},
]
let express = require('express')
let router = express.Router

router.get('/rocks', (req, res) => {
  res.json(rocks)
})

router.get('/rocks/:id', (req, res) => {
  res.json(rocks[req.params.id])
})

router.post('/rocks', (req, res) => {
  console.log(req.body)
  let rock = req.body
  rocks.push(rock)
  res.json(rock)
})

module.exports = router
