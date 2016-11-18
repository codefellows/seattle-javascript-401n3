var myArray = [1, 2, 5, 10]
var a = myArray[0]
var b = myArray[1]
var c = myArray[2]
var d = myArray[3]

var dog = {
  name: 'bowser',
  age: 2,
  breed: 'pomeranian'
}

var {name: dogName, breed: dogBreed} = dog


// given this
var array = [[1,2,3], [4,5,6]]

// create local variable x y z
// x = 1, y = 3, z = [4, 5, 6]
// do this in one line using destructuring
var [[x,,y],] = array
