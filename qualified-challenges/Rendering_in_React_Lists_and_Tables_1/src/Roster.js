import React from "react";

function Roster({ detailed, roster }) {
  if (!detailed) {
    const orderList = roster.map((item, index) => {
      return <li key={index}>{item.firstName}</li>;
    });

    return <ol>{orderList}</ol>;
  } else {
    const table = roster.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
          <td>{item.location}</td>
        </tr>
      );
    });

    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>{table}</tbody>
      </table>
    );
  }
}

export default Roster;
