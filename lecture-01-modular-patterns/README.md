lecture-01 modular patterns
===========================

# Topics

#### Node
* What is Node?
* Reading the Node Docs

#### Modular Patterns
* CommonJS
 * require
 * require cache

#### Testing
* Mocha
 * describe/it
* Node Assert module
* Chai

#### Setting up a 401n1 dev workspace
* create a directory for all your course work
* create some file naming conventions

# Node

#### What is Node?
* [about node](https://nodejs.org/en/about/)
* asynchronous event driven framework for programming you operating system in javascript!
* Node only does work when events are triggered. Other wise it sleeping and waiting for events to occur.
 * When an asynchronous task has complete node employs a callback function to handle the event completion
* Node I/O is non blocking, so we don't have to worry about complicated concurrent programming techniques
* Node is composed of 4 main components
 * [V8](https://developers.google.com/v8/)
 * [libuv](https://github.com/libuv/libuv)
 * [ECMAScript - aka. Javascript](http://www.ecma-international.org/publications/standards/Ecma-262.htm)
  * [ES6 in Node](https://nodejs.org/en/docs/es6/)
 * [C++ Node Api](three://nodejs.org/dist/latest-v4.x/docs/api/)

#### Reading the Node Docs
* Node has a relatively fast deployment cycle, make sure you read the docs for the version of node you are using
* stability index
 * 0 - deprecated
 * 1 - Experimental
 * 2 - Stable
 * 3 - Locked

# Modular Patterns
* [CommonJS Modules](http://www.commonjs.org/specs/modules/1.0/)
 * A Spec that defines how defines how modules should be written in javascript
* `require()` is the function used to import modules in CommonJS
 * works with relative paths, node API, and npm modules
* `__dirname` a global variable that represents the path to the directory of the current file

## `module.exports` and `exports`
* `module.exports`
 * module is an object on the global object
 * `exports` is the property on `module` that is loaded when a "module" gets required from a `require()` call
 * by default exports is an empty object

#### module.exports
* assign something to module.exports when you are trying to export a single item
``` javascript
// export a hello world function

module.exports = function(){
  console.log('hello world');
};
```

#### exports
* add values to properties of the exports of objects if you want to export multiple things
``` javascript
// export a hello and goodbye functions
exports.hello = function(){
  console.log('hello');
};

exports.goodbye = function(){
  console.log('goodbye');
};
```

# Testing

## Types
* Unit Test
 * test how individual modules work **(functions)**
* Integration Test
 * test how modules work together when combined
* End to End
 * test the final product

## Methodologies
* TDD
 * Write a test before you write code
 * Write code to pass the test
 * Helps create short dev cycles
 * Helps create less buggy code (less debugging time)
* BDD
 * combines principles of TDD with Domain Driven Design
 * What to test and what not to test
 * How much to test at a time
 * What to call the tests

## Mocha
 * unit testing framework
 * used to describe and run tests for functions  

## Node Assert Module
* assertion library
* used to compare different types and throw errors

## Chai
 * assertion library
 * used to intelligently compare javascript types and throw meaningful errors

# setting up a 401n1 dev workspace
* your a developer now your not allowed to have bad file organization habits
* make the directory `$HOME/cf/401n3`
* use verbose file and directory names
* use either `-` or `_` to separate words in your file names....
