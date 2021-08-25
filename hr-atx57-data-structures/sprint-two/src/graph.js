

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = [];
};
// TIME COMPLEXITY: O(1)

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this.storage) {
    if (Number(key) === node) {
      return true;
    }
  }
  return false;
};
// TIME COMPLEXITY: O(n)

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var key in this.storage) {
    this.removeEdge(Number(this.storage[key]), this.storage[node]);
  }
  delete this.storage[node];
};
// TIME COMPLEXITY: O(n)

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.storage[fromNode] && this.storage[toNode]) {
    for (var edge = 0; edge < this.storage[fromNode].length; edge ++) {
      if (this.storage[fromNode][edge] === toNode) {
        return true;
      }
    }
  }
  return false;
};
// TIME COMPLEXITY: O(n)

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.storage[fromNode] && this.storage[toNode]) {
    this.storage[fromNode].push(toNode);
    this.storage[toNode].push(fromNode);
  }
};
// TIME COMPLEXITY: O(1)

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.hasEdge(fromNode, toNode)) {
    for (var i = 0; i < this.storage[fromNode].length; i++) {
      if (this.storage[fromNode][i] === toNode) {
        this.storage[fromNode].splice(i, 1);
      }
    }
    for (var j = 0; j < this.storage[toNode].length; j++) {
      if (this.storage[toNode][j] === fromNode) {
        this.storage[toNode].splice(j, 1);
      }
    }
  }
};
// TIME COMPLEXITY: O(n)

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this.storage) {
    cb(node);
  }
};
// TIME COMPLEXITY: O(n)

/*
 * Complexity: What is the time complexity of the above functions?
 */

var newGraph = new Graph();
newGraph.hasEdge(8, 10);