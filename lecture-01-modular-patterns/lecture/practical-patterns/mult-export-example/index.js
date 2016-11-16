// pattern 1: namespaced library
var calc = require('./lib/calc')

calc.add(2, 4)
console.log(calc.sub(6, 4))

// pattern 2: Top level functions
var add = require('./lib/calc.js').add
          //({add: function(){}, sub: function(){}}).add
var sub = require('./lib/calc.js').sub
add(2, 4)
sub(6, 4)

// pattern 3: fancy es6 way
var {add, sub} = require('./lib/calc')



