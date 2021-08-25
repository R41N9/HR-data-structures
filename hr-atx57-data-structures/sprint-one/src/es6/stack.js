class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.newStack = {};
  }

  push(value) {
    this.newStack[Object.keys(this.newStack).length] = value;
  }

  pop() {
    var popped = this.newStack[Object.keys(this.newStack).length - 1];
    delete this.newStack[Object.keys(this.newStack).length - 1];
    return popped;
  }

  size() {
    return Object.keys(this.newStack).length;
  }
}