let uuid = require('node-uuid')
let createError = require('http-errors')

let storage = require('../lib/storage')

let Rock = module.exports = function(name, age) {
  if (!name) throw createError(400, 'expected name')
  if (!age) throw createError(400, 'expected age')

  this.id = uuid.v1()
  this.name = name
  this.age = age

}

Rock.create = (_rock) => {
  try {
    let rock = new Rock(_rock)
    return storage.createItem(rock)
  }
  catch(err) {
    return Promise.reject
  }
}

Rock.fetch = (id) => {
  return storage.fetchItem('rock', id)
}
