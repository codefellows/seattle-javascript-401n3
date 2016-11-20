// Have file one, two, three, four, five
// I want all files printed to the screen as fast
// as possible and I don't care about the order

fs.readFile('./one.txt', function(data) {
  console.log(data)  
})
fs.readFile('./two.txt', function(data) {
  console.log(data)  
})
fs.readFile('./three.txt', function(data) {
  console.log(data)  
})
fs.readFile('./four.txt', function(data) {
  console.log(data)  
})
