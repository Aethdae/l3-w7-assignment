import React, { useState } from "react";
import { buttonClasses } from "../css/htmlClasses";

export default function DashHeader({ logOut, setShowAddUser }) {
  return (
    <header className="flex border-2 items-center justify-around border-t-black border-l-black border-r-black py-2">
      <h1 className="text-4xl font-bold">User Management</h1>
      <button
        onClick={() => {
          setShowAddUser(true);
        }}
        className={buttonClasses.join(" ")}
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
