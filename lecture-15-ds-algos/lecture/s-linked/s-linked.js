const Node = require('./node')

const SinglyLinkedList = module.exports = function(arr) {
  this.head = null
  if (Array.isArray(arr)) arr.forEach(val => this.append(val))
}

SinglyLinkedList.prototype.prepend = function(val) {
  let node = new Node(val)

  if (!this.head) {
    this.head = node
    return node.val
  }

  node.next = this.head
  this.head = node
  return node.val
}

SinglyLinkedList.prototype.append = function(val) {
  let node = new Node(val)
  let lastNode = null

  if (!this.head) {
    this.head = node
    return node.val
  }

  _setLastNode(this.head) // sets the lastNode variable to the last node in our list
  lastNode.next = node
  return node.val

  function _setLastNode(node) {
    if (!node) return
    lastNode = node
    _setLastNode(node.next)
  }
}

// [val, next]

// (HEAD)[val, next] The list is empty, so we just point the head at the new node

// (HEAD)[val, next] => [val, next] => [val, next] => [val, next] => [val, next]
// Prepend() adds a new node at the HEAD             Append() adds a new node after last node
