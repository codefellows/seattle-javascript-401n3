let User = require('../models/user')

module.exports = (req, res, next) => {
  let auth = req.headers.authorization
  console.log(auth)
  if (!auth) {
    // throw error
  }
  // extracting the base64 encoded string
  let base64String = auth.split('Basic')[1]
  // fancy node shorthand
  let [username, password] = new Buffer(base64String, 'base64').toString().split(':')
  /* long form of what's going on above
  let tmpBuffer = new Buffer(base64String, 'base64')
  let tmpString = tmpBuffer.toString()
  let userNamePasswordArray = tmpString.split(':')
  let username = userNamePasswordArray[0]
  let password = userNamePasswordArray[1]
  */
  User.findOne({username: username})
    .then(user => user.comparePassword(password))
    .then(user => {
      // if we are here... passwords match! Yay!	    
      req.user = user // this can be VERY useful as a pattern later on
      next()
    })
    .catch()
}
