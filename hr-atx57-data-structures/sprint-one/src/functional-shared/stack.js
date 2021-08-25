var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = {};
  newInstance.newQueue = {};
  _.extend(newInstance, stackMethods);
  return newInstance;
};

var stackMethods = {};

stackMethods.push = function (value) {
  this.newQueue[Object.keys(this.newQueue).length] = value;
};

stackMethods.pop = function () {
  var popped = this.newQueue[Object.keys(this.newQueue).length - 1];
  delete this.newQueue[Object.keys(this.newQueue).length - 1];
  return popped;
};

stackMethods.size = function () {
  return Object.keys(this.newQueue).length;
};