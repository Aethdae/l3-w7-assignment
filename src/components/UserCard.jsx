import React from "react";
import { UserHandler } from "../utils/UserHandler";
import { buttonClasses, userCardTextClasses } from "../css/htmlClasses";

export default function UserCard({ user, updateUsers }) {
  const handler = new UserHandler({ user: user, updateUsers: updateUsers });

  return (
    <li className="border-2 border-gray-800/50 bg-gray-400 rounded-4xl shadow-md/70 flex flex-col gap-2 items-center justify-around py-2">
      <div id="nameContainer" className={userCardTextClasses.join(" ")}>
        <p>Name:</p>
        <p>
          {user.first_name} {user.last_name}
        </p>
      </div>
      <div id="idContainer" className={userCardTextClasses.join(" ")}>
        <p>ID: </p>
        <p>{user.id}</p>
      </div>
      <div id="emailContainer" className={userCardTextClasses.join(" ")}>
        <p>Email:</p> <p>{user.email}</p>
      </div>
      <div id="roleContainer" className={userCardTextClasses.join(" ")}>
        <p>Role: </p>
        <p>{user.role[0]?.toUpperCase() + user.role?.slice(1)}</p>
      </div>
      <button
        className={buttonClasses.join(" ")}
        onClick={() => {
          handler.deleteUser();
        }}
      >
        Delete
      </button>
    </li>
  );
}
