var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.\
  this.newStack = {};
};

Stack.prototype.push = function (value) {
  this.newStack[Object.keys(this.newStack).length] = value;
};

Stack.prototype.pop = function () {
  var popped = this.newStack[Object.keys(this.newStack).length - 1];
  delete this.newStack[Object.keys(this.newStack).length - 1];
  return popped;
};

Stack.prototype.size = function () {
  return Object.keys(this.newStack).length;
};