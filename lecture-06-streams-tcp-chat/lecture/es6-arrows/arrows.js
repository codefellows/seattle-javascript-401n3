function add(x, y) {
  return x + y
}

var array = [2 ,1 ,5, 10]

function times10(x) {
  return x * 10
}

array = array.map(def(x) { return x * 10 }

array = array.map(times10)

array = array.map((x) => {
 return x * 10 
})

// Take an array of numbers, and 1 to each number
// using .map and arrow functions
array = array
           .map(x => x * 10)
           .map(x => x - 4)
           .filter(x => x % 2 === 0)
           .reduce((x, y) => x + y)




