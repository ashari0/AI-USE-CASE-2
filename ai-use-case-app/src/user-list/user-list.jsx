import React from "react";
import { useSelector } from "react-redux";
import "./user-list.css";

function UserList() {
  const users = useSelector((state) => state.user.users);

  return (
    <div className="user-list">
      <h2>User Information</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.firstName}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
              <td>{user.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
