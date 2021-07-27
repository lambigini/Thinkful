/**
 * Node is used to store values in a LinkedList
 */
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

/**
 * LinkedList class holds a reference to the `head` node.
 */

class LinkedList {
  /**
   * The number of elements in the linked list.
   *
   * @returns {number}
   *   the number of elements in the linked list.
   */

  get length() {}

  /**
   * Find a node in the linked list.
   *
   * @param isMatch
   *  function that returns true if the current node matches the search criteria.
   *
   * @returns {*|null}
   *  the first node where `isMatch(node, index) === true` or null if no match is found.
   */
  find(isMatch) {}

  /**
   * Insert the value after a matched node in the list.
   *
   * @param isMatch
   *  function that returns true if the current node matches the search criteria.
   *
   * @param value
   *  the value to add.
   *
   * @returns {LinkedList}
   *  this linked list so methods can be chained.
   *
   * @throws 'No match found.'
   *  if list is not empty and no matching element is found.
   */
  insert(value, isMatch = (node, index) => index === this.length - 1) {}

  /**
   * Insert a new value at the head of the list.
   * @param value
   *  the new value to insert
   *
   * @returns {LinkedList}
   *  this linked list so methods can be chained.
   */

  insertAtHead(value) {
    // This is a new function that you will need to implement.
  }

  /**
   * Remove the first node where `isMatch(node, index) === true`.
   *
   * @param isMatch
   *  function that returns true if the current node matches the node to be removed.
   *
   * @returns {LinkedList}
   *  this linked list so methods can be chained.
   */
  remove(isMatch) {}
}

module.exports = LinkedList;
