console.log('a')
process.nextTick(function() {
  console.log('b')
})
console.log('c')
console.log('d')
