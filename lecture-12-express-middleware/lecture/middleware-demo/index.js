let express = require('express')
let cors = require('./lib/cors')

app = express()

let PORT = process.env.PORT || 3000

// Globally
app.use(cors)

// Route by Route
app.get('/something', cors, (req, res) {

})

// Scopped by a route
app.route('/users')
  .all((req, res, next), {
    res.hello = 'hi'
  })
  .get((req, res) => {
  
  })
  .post((req, res) => {

  })

app.route('/users/:id')
  .get((req, res) => {

  })
  .put((req, res) => {

  })
  .delete((req, res) => {

  })

app.listen(PORT, () => console.log('server up'))
