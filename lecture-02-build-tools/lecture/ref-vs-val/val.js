x = 2
y = 4
z = 0
function add() {
  z = x + y
}

add()

function add(x, y) {
  return x + y
}

var z = add(2, 4)

function doMath(x) {
  // parameter x is a copy of arg x
  x += 20
}

let x = 10
doMath(x)

// observe that x is unchanged
console.log(x)

function byRef(a) {
  a.name = 'bob'
}

let person = { name: 'sarah' }
console.log(person.name)
byRef(person)
console.log(person.name)

// rewrite byRef.
// Same end result but don't use any pass by ref
function altered(a) {
  return 'bob'
}

let person2 = { name: 'sarah' }
console.log(person2.name)
person2.name = byRef(person2.name)
console.log(person2.name)

a

