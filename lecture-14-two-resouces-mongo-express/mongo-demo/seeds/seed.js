let Dog = require('../models/dog')

['bowser', 'woof', 'fido'].forEach(dogName => {
  new Dog({name: dogName}).save()
})
