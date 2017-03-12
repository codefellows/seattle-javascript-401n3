function PriorityQueue() {
  this._q = []
}

PriorityQueue.prototype.add = function(data) {
  this._q.push(data)
  this._q.sort((x, y) => x.cost < y.cost)
}

PriorityQueue.prototype.remove = function(data) {
  return this._q.pop() 
}

PriorityQueue.prototype.getLength = function() {
  return Object.keys(this._q).length
}

PriorityQueue.prototype.updateCost = function(vertex, cost, prev) {
   this._q.forEach(curr => {
    if (curr.vertex == vertex && cost < curr.cost) {
      curr.cost = cost
      curr.prev = prev
      this._q.sort((x, y) => x.cost < y.cost)
    }
   })  
}

let g = {
  a: [
    {dest: 'b', cost: 5},
    {dest: 'c', cost: 10}
  ],
  b: [
    {dest: 'a', cost: 5},
    {dest: 'c', cost: 4}
  ],
  c: [
    {dest: 'a', cost: 10},
    {dest: 'b', cost: 4},
    {dest: 'd', cost: 5}
  ],
  d: [
    {dest: 'b', cost: 11},
    {dest: 'c', cost: 5}
  ]
}

function buildPath(visited, dest) {
  debugger
  let path = []
  let curr = visited[dest]
  while (curr.prev) {
    path.unshift(curr.vertex) 
    curr = curr.prev
  }
  path.unshift(curr.vertex)
  return path
}

function dijkstras(g, start, dest) {
  let visited = {}
  let priorityQ = new PriorityQueue()
  
  Object.keys(g).forEach(vertex => {
    if (vertex == start) {
      priorityQ.add({vertex, cost: 0, prev: null})
    }
    else {
      priorityQ.add({vertex, cost: Infinity, prev: null})
    }
  })

  while(priorityQ.getLength()) {
    let current = priorityQ.remove()
    g[current.vertex].forEach(edge => {
      let pathCost = current.cost + edge.cost
      priorityQ.updateCost(edge.dest, pathCost, current)
      visited[current.vertex] = current
    })
  }
  return {path: buildPath(visited, dest), cost: visited[dest].cost}
}

console.log(dijkstras(g, 'a', 'd'))
