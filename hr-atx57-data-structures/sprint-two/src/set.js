var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.contains(item)) {
    this._storage[item] = item;
  }
};
// TIME COMPLEXITY: O(1)

setPrototype.contains = function(item) {
  if (this._storage[item] === item) {
    return true;
  }
  return false;
};
// TIME COMPLEXITY: O(n)

setPrototype.remove = function(item) {
  delete this._storage[item];
};
// TIME COMPLEXITY: O(1)

/*
 * Complexity: What is the time complexity of the above functions?
 */
