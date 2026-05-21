import React, { useState } from "react";
import { buttonClasses, transitionClasses } from "../css/htmlClasses";

export default function DashHeader({ logOut, addUser, setShowAddUser }) {
  return (
    <header className="flex border-2 items-center justify-around border-t-black border-l-black border-r-black py-2 max-w-200 mx-auto">
      <h1 className="text-4xl font-bold">User Management</h1>
      <button
        onClick={() => {
          setShowAddUser(!addUser);
        }}
        className={buttonClasses.join(" ") + " " + transitionClasses.join(" ")}
      >
        Add User
      </button>
      <button
        onClick={() => {
          logOut();
        }}
        className={buttonClasses.join(" ")}
      >
        Log Out
      </button>
    </header>
  );
}
