const Node = require('./node')
const Queue = module.exports = function() {
  this.front = null
  this.back = null
}

Queue.prototype.enqueue = function(val) {
  if(!this.back) {
    this.back = new Node(val)
    this.front = this.back
    return
  }
  this.back.prev = new Node(val)
  this.back = this.back.prev
  // create a new node using val as node.val
    // and assign the back.prev to new node
  // assign the new node to the back of the Q
}

Queue.prototype.dequeue = function() {

}
