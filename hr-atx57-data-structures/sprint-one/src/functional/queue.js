var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // add value to end of queue
    if (Object.keys(storage) === undefined) {
      storage[0] = value;
    } else {
      storage[Object.keys(storage).length] = value;
    }
  };

  someInstance.dequeue = function() {
    // take value from front of queue and return it
    var dequeued = storage[0];
    for (var i = 0; i < Object.keys(storage).length - 1; i++) {
      storage[i] = storage[i + 1];
    }
    delete storage[Object.keys(storage).length - 1];
    return dequeued;
  };

  someInstance.size = function() {
    // return the number of items in queue
    if (Object.keys(storage) === undefined) {
      return 0;
    }
    return Object.keys(storage).length;
  };

  return someInstance;
};
