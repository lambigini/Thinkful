import React, { useState, useEffect } from "react";
import "./App.css";

import AlbumList from "./AlbumList";
import UserList from "./UserList";

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [albums, setAlbums] = useState([]);
  const oldTitle = document.title;

  useEffect(() => {
    const abortController = new AbortController();
    document.title = "Awesome Album App";
    setUsers([]);
    async function loadUsers() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users`,
          { signal: abortController.signal }
        );
        const userFromAPI = await response.json();
        setUsers(userFromAPI);
      } catch (error) {
        if (error.name === "AbortError") {
        } else {
          throw error;
        }
        console.log("Users error", error);
      }
    }

    loadUsers();

    return () => {
      abortController.abort();
      document.title = oldTitle;
    };
  }, []);

  useEffect(() => {
    const abortController = new AbortController();
    setAlbums([]);
    async function loadAlbums() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/albums?userId=${currentUser.id}`,

          { signal: abortController.signal }
        );

        const albumsFromAPI = await response.json();

        setAlbums(albumsFromAPI);
      } catch (error) {
        //include this block of code will made the test to failed
        // if (error.name === "AbortError") {
        //   console.log("Aborted, ", user.id);
        // }
        // else {
        //   throw error;
        // }
        console.log("Album error", error);
      }
    }

    loadAlbums();

    return () => abortController.abort();
  }, [currentUser]);
  if (users.length > 0) {
    return (
      <div className="App">
        <div className="left column">
          <UserList users={users} setCurrentUser={setCurrentUser} />
        </div>
        <div className="right column">
          <AlbumList user={currentUser} albums={albums} />
        </div>
      </div>
    );
  } else {
    return <p>loading...</p>;
  }
}

export default App;
