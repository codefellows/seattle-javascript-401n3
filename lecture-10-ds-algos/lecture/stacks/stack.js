const Node = require('./node.js')
const Stack = module.exports = function(maxSize) {
  this.top = null
  this.maxSize = maxSize || null
  this.size = 0
}

Stack.prototype.push = function(val) {
  this.top = new Node(val, this.top)
  this.size += 1
  // a new node should be created with val and prev node
  // no return value here
}

Stack.prototype.pop = function() {
  // remove the node assigned to the top of the stack
  // assign previous node to the top
  // return the value of node removed
}

Stack.prototype.peek = function() {
  // return the value of the top node
}
