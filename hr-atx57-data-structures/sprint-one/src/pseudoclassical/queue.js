var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.newQueue = {};
};

Queue.prototype.enqueue = function (value) {
  this.newQueue[Object.keys(this.newQueue).length] = value;
};

Queue.prototype.dequeue = function () {
  var dequeued = this.newQueue[0];
  for (var i = 0; i < Object.keys(this.newQueue).length - 1; i++) {
    this.newQueue[i] = this.newQueue[i + 1];
  }
  delete this.newQueue[Object.keys(this.newQueue).length - 1];
  return dequeued;
};

Queue.prototype.size = function () {
  return Object.keys(this.newQueue).length;
};