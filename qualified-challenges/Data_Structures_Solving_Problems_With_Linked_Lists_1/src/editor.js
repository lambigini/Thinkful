const LinkedList = require("./lib/linkedList");

class Editor {
  /**
   * Constructs a new Editor object with the given text.
   * Defaults to empty text. Cursor is positioned at the end of the text.
   * @param {LinkedList} text - A linked List containing the characters that are in the editor,
   * empty by default
   */
  constructor(text = new LinkedList()) {
    this.text = text;
    this.cursor = this.text.find(
      (node, index) => index === this.text.length - 1
    );
  }

  /**
   * Insert a character at the cursor position of the editor.
   * @param {*} char a value to be inserted into the editor
   * @returns {Editor} a reference to this editor
   */
  insert() {}

  /**
   * Remove the character at the cursor position.
   * Moves the cursor to the previous position.
   * If editor is empty does nothing.
   * @returns {Editor} a reference to this editor
   */
  delete() {}

  /**
   * Moves the cursor one position to the left.
   * If the cursor is at the start of the editor nothing happens.
   * @returns {Editor} a reference to this editor
   */
  arrowLeft() {}

  /**
   * Moves the cursor one position to the right.
   * If the cursor is at the end of the editor nothing happens.
   * @returns {Editor} a reference t this editor
   */
  arrowRight() {}
}

module.exports = Editor;
