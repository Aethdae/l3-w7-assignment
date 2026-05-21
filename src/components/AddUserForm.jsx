import React, { useState } from "react";
import { buttonClasses, textInputClasses } from "../css/htmlClasses";

export default function AddUserForm({ setShowAddUser, addUser }) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");

  function handleSubmit(e) {
    e.preventDefault;
    addUser({
      first_name: firstName,
      last_name: lastName,
      email: email,
      role: role,
    });
    setShowAddUser(false);
  }

  return (
    <div className="my-4 flex flex-col gap-4 max-w-80 w-full mx-auto">
      <form
        className="flex flex-col gap-4 bg-sky-400 border-2 border-black px-4 py-4 rounded-xl"
        onSubmit={handleSubmit}
      >
        <label className="flex gap-4">
          First Name
          <input
            className={textInputClasses.join(" ")}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            name="firstName"
            id="firstName"
          ></input>
        </label>
        <label className="flex gap-4">
          Last Name
          <input
            className={textInputClasses.join(" ")}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            name="lastName"
            id="lastName"
          ></input>
        </label>
        <label className="flex gap-4">
          Email
          <input
            className={textInputClasses.join(" ")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
          ></input>
        </label>
        <label className="flex gap-4">
          Role
          <select
            className={textInputClasses.join(" ")}
            value={role}
            onChange={(e) => setRole(e.target.value)}
            name="role"
            id="role"
          >
            <option value="">--</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </label>
        <div id="buttonContainer" className="flex justify-around">
          <button className={buttonClasses.join(" ")}>Add User</button>
          <button
            className={buttonClasses.join(" ")}
            onClick={() => {
              setShowAddUser(false);
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
