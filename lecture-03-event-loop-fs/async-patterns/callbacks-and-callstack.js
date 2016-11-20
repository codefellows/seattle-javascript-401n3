function one() {
  console.log('one')
  process.nextTick(function() {
    console.log('four')
  })
  two()
}

function two() {
  console.log('two')
}

process.nextTick(function() {
  console.log('three')
})

one()
