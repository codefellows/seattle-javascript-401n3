![cf](https://i.imgur.com/7v5ASc8.png) lab 10 data structures & algorithms
====

# Topics

* Abstract Data Types (ADT)
In computer science, an abstract data type (ADT) is a mathematical model for data types where a data type is defined by its behavior (semantics) from the point of view of a user of the data, specifically in terms of possible values, possible operations on data of this type, and the behavior of these operations. This contrasts with data structures, which are concrete representations of data, and are the point of view of an implementer, not a user. *[Ref: ADT Wiki](https://en.wikipedia.org/wiki/Abstract_data_type)*

## Stacks
  - Stacks are not defined by the implementation, but rather by the interface (push and pop operations, working from the top of the data structure only)
  * Primary Operations: Push, Pop, Peek (optional, non-destructive)
  * FILO / LIFO - First-In/Last-Out / Last-In/First-Out
  * Examples: edit- undo/redo
  * Implementation variants:
    * Linked List (You've not seen this data structure yet) (common)
    * Arrays (utilize the built-ins from Array.prototype...)
  * General Notes:
    * Linear collection of Nodes
    * Always push/pop from the `top` of the stack
    * Stacks may have an optional `maxSize` property, which, when exceeded, instantiates a new Stack for overflow OR an overflow state  
      * Depending on your implementation, you choose how best to handle this situation to suit your needs
    * No access to any values beneath the top value
    * Each Node (also called Item or Value or Element) will have a property for a Value and one for a pointer to the previous Node

## Queues
  * Primary Operations: Enqueue, Dequeue
  * FIFO / LILO - First-In/First-Out / Last-In/Last-Out
  * Examples: Restaurant line, Loading an airplane
  * Implementation variants:
    * Doubly Linked List (common)
    * Linked List
    * Deque (Double ended queue)
  * Variations
    * Priority Queue (i.e. Printer queue)
  * General Notes:
    * Do not have a specific capacity
      * Exception: a 'Bounded Queue', which is limited to a fixed number of Nodes
  * Each Node will have a property for a Value, one for a pointer to the previous Node, and optionally a pointer to the next Node
  * A Queue will keep track of the `head` and `tail` Nodes but does not need to explicitly track Nodes within the collection

## White-boarding
  * Stack
    * Implement the `.pop()` method and discuss Big-O

  * Queue
    * Implement the `.dequeue()` method and discuss Big-O
