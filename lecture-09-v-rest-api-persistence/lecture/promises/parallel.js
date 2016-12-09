require('isomorphic-fetch')
const ENDPOINT = 'http://pokeapi.co/api/v2'

function printPokemon(pokemon) {
  pokemon.forEach(id => {
    fetch(`${ENDPOINT}/pokemon/${id}`)
      .then(res => res.json())
      .then(data => console.log(data.name))
  })
}

printPokemon([4, 5, 6])
