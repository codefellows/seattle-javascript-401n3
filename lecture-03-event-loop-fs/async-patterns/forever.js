console.log('hello')
process.nextTick(function() {
  console.log('goodbye')
})
while (true) {}
