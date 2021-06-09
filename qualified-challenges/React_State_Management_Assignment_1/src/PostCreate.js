import React, { useState } from "react";
import PostList from "./PostList";
/**
 * Displays the form to create a new post, which can be either an image or a text post.
 *
 * When the form is submitted, a new post is created and the form contents cleared.
 */
function PostCreate({ createPost }) {
  const [type, setType] = useState("Text");

  const [content, setContent] = useState("");

  const handleTypeChange = (event) => setType(event.target.value);
  const handleContentChange = (event) => setContent(event.target.value);

  console.log("Current value of type:", type);
  console.log("Current value of content:", content);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Submitted: ", type, content);
    createPost(content);

    setType("");
    setContent("");
  };
  // TODO: When the form is submitted, a new post should be created, and the form contents cleared.

  // For the tests to pass, the form below must have:
  // - a `name="create"` attribute
  // - one child `<button>` with a `type="submit"` attribute
  // - one child `<select>` with a `name="type"` attribute
  // - one child `<textarea>` or `<input>` (not both at the same time) with a `name="content"`

  return (
    <form name="create" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Create</legend>
        <div>
          <label htmlFor="type">Type: </label>
          <select
            id="type"
            name="type"
            required={true}
            onChange={handleTypeChange}
            value={type}
          >
            <option value="Text">Text</option>
            <option value="Image">Image</option>
          </select>
        </div>
        <div>
          <label htmlFor="content">Content: </label>
          {type === "Text" ? (
            <textarea
              id="content"
              name="content"
              required={true}
              rows={3}
              onChange={handleContentChange}
              value={content}
            />
          ) : (
            <input
              id="content"
              name="content"
              type="url"
              required={true}
              onChange={handleContentChange}
              value={content}
            />
          )}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </fieldset>
    </form>
  );
}

export default PostCreate;
