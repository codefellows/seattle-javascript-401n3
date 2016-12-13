let storage = {}
let blueBird = require('bluebird')
let fs = blueBird.promisifyAll(require('fs'), { suffix: 'Prom' })

storage.fetchItem = function(item) {
  return fs.readFileProm(`${__dirname}/../data/data.json`) 
    .then(data => {
      let item = JSON.parse(data.toString())
      return item
    })
}
