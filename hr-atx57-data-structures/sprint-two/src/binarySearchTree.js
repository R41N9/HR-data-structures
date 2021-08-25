var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function (value) {
  // create new tree with value
  var newTree = new BinarySearchTree(value);

  var planter = function (tree) {
    // if the value of the new tree is less than this's value
    if (newTree.value < tree.value) {
      // check if it has a left child
      if (!tree.left) {
        // if it doesn't, set the left child to be the new tree
        tree.left = newTree;
      // if it does have a left child,
      } else {
        // do this process over passing in the left child
        planter(tree.left);
      }
    }
    // if the new tree's value is greater than this's value
    if (newTree.value > tree.value) {
      // check if it has a right child
      if (!tree.right) {
        // if it doesn't, set right child to new tree
        tree.right = newTree;
      // if it does have a right child,
      } else {
        // repeat this process passing in the right child
        planter(tree.right);
      }
    }
    // if the new tree's value is equal to this's value, stop the function.
    if (newTree.value === tree.value) {
      return 'entry already exists';
    }
  };
  // TIME COMPLEXITY: O(log n)

  planter(this);
};

BinarySearchTree.prototype.contains = function (value) {
  // if tree's value equals input value
  if (this.value === value) {
    // return true
    return true;
  }
  // if tree's value is greater than the input value
  if (this.value > value) {
  // if tree has a left child
    if (this.left) {
    // recur function passing in left child
      return this.left.contains(value);
    // if tree doesn't have a left child
    } else {
    // return false
      return false;
    }
  }
  // if tree's value is less than the input value
  if (this.value < value) {
    // if tree has a right child
    if (this.right) {
      // recur function passing in right child
      return this.right.contains(value);
    // if tree doesn't have a right child
    } else {
      // return false
      return false;
    }
  }
};
// TIME COMPLEXITY: O(log n)

BinarySearchTree.prototype.depthFirstLog = function (cb) {
  // call callback on this
  cb(this.value);
  // if this has left child
  if (this.left) {
    // call depthFirstLog on left child
    this.left.depthFirstLog(cb);
  }
  // if this has right child
  if (this.right) {
    // call depthFirstLog on right child
    this.right.depthFirstLog(cb);
  }
  // return
  return;
};
// TIME COMPLEXITY: O(log n)


/*
 * Complexity: What is the time complexity of the above functions?
 */
