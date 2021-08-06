import React, { useEffect, useState } from "react";
import AlbumDetail from "./AlbumDetail";

function App() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums?userId=1")
      .then((response) => response.json())
      .then(setAlbums)
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // render title
  // album title, map

  // onclik handle, new photo
  // map show the new photo

  const [photo, setPhoto] = useState([]);

  const handleClick = (albumId) => {
    // console.log("clicked");

    fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
      .then((response) => response.json())
      .then(setPhoto)
      .catch((error) => {
        console.log(error);
      });
  };

  // console.log("photo, ", photo);

  const photourl = photo.slice(0, 10).map((p, index) => {
    // if (index < 11) {
    return (
      <li key={index}>
        {p.title}
        <img
          // src={p.thumbnailUrl}
          src={p.url}
          alt={p.title}
        />
      </li>
    );
    // }
  });

  const title = albums.map((album) => (
    <li key={album.id} onClick={() => handleClick(album.id)}>
      {album.title}
    </li>
  ));

  return (
    <div className="App">
      <ul>{title}</ul>
      <ul> {photourl}</ul>
    </div>
  );
}

export default App;
