let express = require('express')
let morgan = require('morgan')
let jsonParser = require('body-parser').json()

let createError = require('http-errors')

let app = express()
let router = express.Router

app.use(morgan('dev'))
app.use(jsonParser)

require('./routes/rock-routes')(router)
app.use(router)

app.use((err, req, res, next) => {
  console.error(err.message)

  err = createError(500, err.message)
  res.status(err.status).send(err.name)
})

app.listen(3000, () => {
  console.log('server started')
})
