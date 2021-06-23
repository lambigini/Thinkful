import React, { useState, useEffect } from "react";
import "./App.css";

import AlbumList from "./AlbumList";
import UserList from "./UserList";

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  // Load data from https://jsonplaceholder.typicode.com/todos?userId=3

  useEffect(() => {
    // const abortController = new AbortController();
    async function loadUser() {
      // try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users`
        // { signal: abortController.signal }
      );
      const userFromAPI = await response.json();
      setUsers((currentUser) => (currentUser = userFromAPI));

      // } catch (error) {
      //   if (error.name === "AbortError") {
      //     // console.log("Aborted, ", user.id);
      //   } else {
      //     throw error;
      //   }
      // }
    }

    loadUser();

    // return () => {
    //   abortController.abort();
    //   document.title = "";
    // };
  }, []);

  return (
    <div className="App">
      <div className="left column">
        <UserList users={users} setCurrentUser={setCurrentUser} />
      </div>
      <div className="right column">
        <AlbumList user={currentUser} />
      </div>
    </div>
  );
}

export default App;
