module.exports = Router
function Router() {
  this.routes = {
    GET: {}
  , POST: {}
  , PUT: {}
  , DELETE: {}
  }
}

/* conceptually
Router.prototype.get = function(endpoint, callback) {
  this.routes.GET[endpoint] = callback
}
Router.prototype.post = function(endpoint, callback) {
  this.routes.POST[endpoint] = callback
}
*/

// More DRY
['get', 'post', 'put', 'delete'].forEach(verb => {
  Router.prototype[verb] = function(endpoint, callback) {
    this.routes[verb.toUpperCase()][endpoint] = callback
  } 
})

/*
Router.prototype.route = function () {
  return function (req, res) {
    
  }
}
*/






