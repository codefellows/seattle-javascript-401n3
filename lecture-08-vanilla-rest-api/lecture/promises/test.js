require('isomorphic-fetch')

fetch('http://pokeapi.co/api/v2/pokemon/6')
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.error(err)
  })
