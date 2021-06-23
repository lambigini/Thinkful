import React, { useState, useEffect } from "react";

function AlbumList({ user }) {
  //
  // console.log("albums showed");
  // console.log(`{user.userId}  ${user.id}`);
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    document.title = "Awesome Album App";
    const abortController = new AbortController();
    async function loadAlbums() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/albums?userId=${user.id}`,

          { signal: abortController.signal }
        );

        const albumsFromAPI = await response.json();

        setAlbums((current) => (current = albumsFromAPI));
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Aborted, ", user.id);
        } else {
          throw error;
        }
      }
    }
    // console.log("albums ", albums);
    loadAlbums();

    return () => {
      abortController.abort();
      document.title = "";
    };
  }, [user]);

  if (user.id) {
    return (
      <ul className="albums-list">
        {albums.map((album) => (
          <li key={album.id}>
            {album.id} - {album.title}
          </li>
        ))}
      </ul>
    );
  } else {
    return <p>Please click on a user name to the left</p>;
  }
}

export default AlbumList;
