

var HashTable = function() {
  this._limit = 8;
  this._count = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage.get(index)) {
    // create a bucket
    var bucket = [];
    bucket.push([k, v]);
    // put the bucket at the index in storage
    this._storage.set(index, bucket);
    return;
  }
  var thisBucket = this._storage.get(index);
  // if we find the key in the bucket
  for (var l = 0; l < this._storage.get(index).length; l++) {
    if (thisBucket[l][0] === k) {
      // set the value to be value
      thisBucket[l] = [k, v];
      // if we don't find the key in the bucket
    }
  }
  // set the key and the value
  thisBucket.push([k, v]);
  this._count++;
  this._storage.set(index, thisBucket);
  if (this._count > this._limit * 0.75) {
    this._resize(this._limit * 2);
  }
};
// TIME COMPLEXITY: O(n)

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage.get(index)) {
    return undefined;
  }
  for (var j = 0; j < this._storage.get(index).length; j++) {
    if (this._storage.get(index)[j][0] === k) {
      return this._storage.get(index)[j][1];
    }
  }
};
// TIME COMPLEXITY: O(n)

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this.retrieve(k)) {
    for (var i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i][0] === k) {
        this._storage.get(index).splice(i, 1);
        this._count--;
        if (this._count < this._limit * 0.25) {
          this._resize(this._limit / 2);
        }
      }
    }
  }
};
// TIME COMPLEXITY: O(n)

HashTable.prototype._resize = function(newLimit) {
  var oldStorage = this._storage;
  this._limit = newLimit;
  this._storage = makeLimitedArray(newLimit);
  this._count = 0;
  var context = this;
  oldStorage.each(function(bucket) {
    if (!bucket) {return;}
    for (var i = 0, i < bucket.length; i++) {
      var tuple = bucket[i];
      context.insert(tuple[0], tuple[1]);
    }
  });
}
// TIME COMPLEXITY: O(n^2)

/*
 * Complexity: What is the time complexity of the above functions?
 */


