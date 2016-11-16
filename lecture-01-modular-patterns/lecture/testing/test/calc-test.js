var assert = require('assert')
var calc = require('../lib/calc')

describe('a calc module', function() {
  describe('add()', function () {
    it('can add two numbers', function () {
      assert.equal(calc.add(2, 4), 6)
    })
    it('can add two odd numbers', function () {
      assert.equal(calc.add(1, 3), 4)
    })
  })

  describe('sub()', function() {

  })
})
