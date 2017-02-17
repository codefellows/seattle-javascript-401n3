function createClosure() {
  let x = 4
  function getX() {
    return x
  }
  function setX(newX) {
    x = newX
  }
  return {getX: getX, setX: setX}
}

let myClosure = createClosure()
console.log(myClosure.getX())
myClosure.setX(10)
console.log(myClosure.getX())

function getValue() {
  let value = 50;
  function get() {return value}
  function maximize() { value = Infinity }
  function minimize() { value = 0 }
  return { get, maximize, minimize }
}

let x = getValue()
console.log(x.get())
x.minimize()
console.log(x.get())

function Person(name, age, ssn) {
  let _ssn = ssn
  this.name = name
  this.age = age
  this.getssn = function() {
    return ssn
  }
}

let p = new Person('bob', 1000, 1)
p.getssn()








