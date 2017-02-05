require('./test-helper')

let angular = require('angular')
let cowsay = require('cowsay-browser')

describe('Coway Controller', function() {
  beforeEach(function() {
    angular.mock.module('cowsayApp')
    angular.mock.inject(function($controller) {
        this.cowsayCtrl = new $controller('CowsayController')
    })
  })

  describe('intial properties', function() {
    it('should have a title that says Welcome to Cowville!', function() {
      console.log(this.cowsayCtrl)
      expect(this.cowsayCtrl.title).toBe('Welcome to Cowville!')
    })
  })
})
