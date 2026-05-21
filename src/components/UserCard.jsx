import React from "react";
import { UserHandler } from "../utils/UserHandler";
import { buttonClasses } from "../css/htmlClasses";

export default function UserCard({ user }) {
  const handler = new UserHandler(user);

  return (
    <div>
      <p>
        {user.first_name} {user.last_name}
      </p>
      <p>{user.id}</p>
      <p>{user.email}</p>
      <button
        className={buttonClasses.join(" ")}
        onClick={() => {
          handler.deleteUser();
        }}
      >
        Delete
      </button>
    </div>
  );
}
