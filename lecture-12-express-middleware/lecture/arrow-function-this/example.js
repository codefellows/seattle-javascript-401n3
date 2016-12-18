function Person(name) {
  this.name = name
  this.pets = ['parrot', 'cat', 'dog']
  this.printAllPets = function() {
    this.pets.forEach(pet => {
      console.log(`${this.name} owns a ${pet}`)
    })
  }
  this.sayNameInFive = function() {
    var _this = this
    setTimeout(function() {
      console.log(_this.name)
    }, 5000)
  }

  this.sayNameInFive2 = function() {
    setTimeout(function() {
     console.log(this.name)
    }.bind(this), 5000)
  }

  this.sayNameInFive3 = function() {
    setTimeout(() => {
     console.log(this.name)
    }, 5000)
  }
}

var p1 = new Person('bob')
//p1.sayNameInFive3()
p1.printAllPets()
