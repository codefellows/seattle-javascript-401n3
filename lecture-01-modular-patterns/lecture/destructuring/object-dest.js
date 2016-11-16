var person = {name: 'bob', age: 14}

// by FAR the most common
var {name, age} = person
console.log(name)

var {name : x, age: y} = person
console.log(x)
