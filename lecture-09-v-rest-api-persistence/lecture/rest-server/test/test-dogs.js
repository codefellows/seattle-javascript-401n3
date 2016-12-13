require('fetch')
let expect = require('chai').expect

require('../index.js')

describe('a restful endpoint', function() {
  it('can give a list of dogs', function(done) {
    fetch('http://localhost:3000/dogs')
      .then(res => res.json())
      .then(data => {
        expect(res.status).to.equal(200)
        expect(res.body.dogs.length).to.equal(4)
        done()
      })
  })
  it('can give a list of cats', function(done) {
    fetch('http://localhost:3000/cats')
      .then(res => res.json())
      .then(data => {
        expect(res.status).to.equal(200)
        expect(res.body.cats.length).to.equal(4)
        expect(res.body.cats[0].name).to.equal('zack')
        done()
      })
  })
})
