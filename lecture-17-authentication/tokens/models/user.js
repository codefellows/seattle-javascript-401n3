let mongoose = require('mongoose')
let bcrypt = require('bcrypt')
let jwt = require('jsonwebtoken')

let userSchema = mongoose.Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true} 
})

// DO NOT USE AN ARROW FUNCTION HERE
userSchema.methods.hashPassword = function(password) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) return reject(err)
      this.password = hash
      resolve(this)
    })
  })
}

userSchema.methods.comparePassword = function(password) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, this.password, (err, valid) => {
      if (err) {
        reject(err)
      }
      else {
        resolve(this)
      }
    })
  })
}

userSchema.methods.generateToken = function(password) {
  /* Can be promisified. After class work
  jwt.sign({id: this._id}, process.env.SECRET || 'DEV', (token) => {
  })
  */
  return jwt.sign({id: this._id}, process.env.SECRET || 'DEV')
}

module.exports = mongoose.model('user', userSchema)
