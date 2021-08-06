import React, { useEffect, useState } from "react";
import UserTodos from "./UserTodos.js";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then(setUsers)
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [todos, setTodos] = useState([]);

  const handleClick = (id) => {
    // console.log("click");
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
      .then((response) => response.json())
      .then(setTodos)
      .catch((error) => {
        console.log(error);
      });
  };

  const listName = users.map((user, index) => (
    <li key={user.id} onClick={() => handleClick(user.id)}>
      {user.name}
    </li>
  ));

  const showTodo = todos.map((todo) => <li>{todo.title}</li>);

  return (
    <div className="App">
      {/* Write your code below */}
      <ul>{listName}</ul>
      <ul>{showTodo}</ul>
    </div>
  );
}

export default App;
