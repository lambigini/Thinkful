import React, { useState, useEffect } from "react";

function AlbumList({ user, albums }) {
  if (user.name) {
    return (
      <ul className="albums-list">
        {albums.map((album) => (
          <li key={album.id}>
            {album.id} {album.title}
          </li>
        ))}
      </ul>
    );
  } else {
    return <p>Please click on a user name to the left</p>;
  }
}

export default AlbumList;
