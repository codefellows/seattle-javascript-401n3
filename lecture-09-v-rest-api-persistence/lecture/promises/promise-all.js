require('isomorphic-fetch')
const ENDPOINT = 'http://pokeapi.co/api/v2'

// promise.resolve example
let x = Promise.resolve('hard coded value')
x.then(data => console.log(data))

let promises = [
  fetch(`${ENDPOINT}/pokemon/${0}`)
, fetch(`${ENDPOINT}/pokemon/${1}`)
, fetch(`${ENDPOINT}/pokemon/${2}`)
]

Promise.all(promises)
  .then(responses => {
    // optional hw: print each pokemon name from the responses
  })
  .catch(e => {
    console.log(e)
  })
