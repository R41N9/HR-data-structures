var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = Object.create(stackMethods);
  newInstance.newStack = {};
  return newInstance;
};

var stackMethods = {};

stackMethods.push = function (value) {
  this.newStack[Object.keys(this.newStack).length] = value;
};

stackMethods.pop = function () {
  var popped = this.newStack[Object.keys(this.newStack).length - 1];
  delete this.newStack[Object.keys(this.newStack).length - 1];
  return popped;
};

stackMethods.size = function () {
  return Object.keys(this.newStack).length;
};