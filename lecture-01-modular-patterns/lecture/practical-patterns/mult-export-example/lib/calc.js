// Way 1
/*
exports.add = function(x, y) {
  return x + y
}

exports.sub = function(x, y) {
  return x - y
}

exports.mult = function(x, y) {
  return x * y
}

exports.div = function(x, y) {
  return x / y
}
*/

// Way 2
// This pattern is common if these functions
// are also used within the current module
// module revealing pattern
function add(x, y) {
  return x + y
}

function sub(x, y) {
  return x - y
}

function mult(x, y) {
  return x * y
}

function div(x, y) {
  return x / y
}

// this pattern makes it most clear
// what you are actually exporting
/*
module.exports = {
  add: add,
  sub: sub,
  mult: mult,
  div: div
}
*/

// Fancy ES6 trick
module.exports = {
  add, sub, mult, div
}

/*
// Pattern 3 (module pattern) (probably the least common)
module.exports = {
  add: function(x, y) {
    return x + y
  },
  sub: function(x,y ) {
    return x - y
  }
}
*/
