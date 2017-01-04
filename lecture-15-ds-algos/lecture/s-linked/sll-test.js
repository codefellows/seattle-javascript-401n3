const expect = require('chai').expect
const SLL = require('./s-linked')

describe('Singly Linked List', function() {
  describe('prepend()', function() {
    before(() => {
      let sll = new SLL()
    })
    it('should create a new node as SLL.head when list is empty', function() {
      expect(sll.head).to.equal(null)
      sll.prepend(25)
      expect(sll.head.val).to.equal(25)
    })
    it('should add a new node as SLL.head; existing nodes in .next chain', function() {

    })
  })
  describe('append()', function() {
    it('should add a new node as SLL.head when list is empty', function() {

    })
    it('should add a new node after the last node', function() {

    })
  })
})
