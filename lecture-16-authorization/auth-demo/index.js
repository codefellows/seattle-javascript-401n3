let express = require('express')
let mongoose = require('mongoose')
let morgan = require('morgan')
let authMiddlewear = require('./lib/authentication')

const PORT = process.env.port || 3000
mongoose.connect('mongodb://localhost/dev')
mongoose.Promise = Promise

app = express()

app.use(morgan('dev'))
//app.use(authMiddlewear)
require('./routes/user-routes')(app)

app.listen(PORT, () => console.log(`server started on ${PORT}`))
