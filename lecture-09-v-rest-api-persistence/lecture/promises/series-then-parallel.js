require('isomorphic-fetch')
const ENDPOINT = 'http://pokeapi.co/api/v2'

function printAbilityDetails(id) {
  // TODO
  fetch(`${ENDPOINT}/pokemon/${id}`)
    .then(res => res.json())
    .then(data => {
      data.abilities.forEach(ability => {
        fetch(ability.ability.url)
          .then(res => res.json())
          .then(ability => console.log(ability))
          .catch(e => console.error)
      })
    })
    .catch(e => console.error(e)
}

printAbilityDetails(6)
