let express = require('express')
let mongoose = require('mongoose')
let jsonParser = require('body-parser').jsonParser

let MONGO_URI = process.env.MONGO_URI 
let PORT = process.env.PORT || 3000
mongoose.Promise = Promise
mongoose.connect(MONGO_URI)

app = express()

let dogRouter = require('./routes/dog-routes')
app.use(dogRouter)
// will specify an /api prefix app.use('/api', dogRouter) 
// /api/dogs etc...

module.exports = app

if (require.main === module) {
  app.listen(PORT, () => console.log(`server started on ${PORT}`))
}

