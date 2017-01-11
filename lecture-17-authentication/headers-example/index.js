let express = require('express')
let app = express()

app.use((req, res, next) => {
  console.log(req.headers)
  res.end()
})

app.listen(3000)
