import React from "react";

function UserList({ users, setCurrentUser }) {
  // console.log("button clicked");
  return (
    <ul className="user-list">
      {users.map((user) => (
        <li key={user.id}>
          <button type="button" onClick={() => setCurrentUser(user)}>
            {user.name}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
