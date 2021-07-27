const LinkedList = require("./linkedList");

/**
 * Implement a Queue using nothing more than a LinkedList.
 */

class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  enqueue(value) {}

  dequeue() {}

  peek() {}

  isEmpty() {}
}

module.exports = Queue;
