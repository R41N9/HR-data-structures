var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (this.head === null && this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  };

  // TIME COMPLEXITY: O(1)

  // if (list.tail === null) {
  //   list.tail = value;
  // } else {
  //   for (var i = 0; i < Object.keys(list).length; i++) {
  //     if (!list.hasOwnProperty(i)) {
  //       list[i] = list.tail;
  //       list.tail = value;
  //     }
  //   }
  // }

  list.removeHead = function() {
    var removed = this.head.value;
    this.head = this.head.next;
    return removed;
  };

  // TIME COMPLEXITY: O(1)

  // var removed = list.head;
  // if (list.hasOwnProperty(0)) {
  //   list.head = list.0
  //   for (var i = 0; i < Object.keys(list).length; i++) {
  //     list[i] = list[i + 1]
  //   }
  // } else {
  //   list.head = list.tail
  //   list.tail = null
  // }
  // return removed;

  list.contains = function(target) {
    var found = false;
    var node = this.head;
    while (node !== null) {
      if (node.value === target) {
        found = true;
      }
      node = node.next;
    }
    return found;
  };

  // TIME COMPLEXITY: O(n)

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
