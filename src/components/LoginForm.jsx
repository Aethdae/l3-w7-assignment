import React, { useState } from "react";
import { buttonClasses, textInputClasses } from "../css/htmlClasses";

export default function LoginForm({ logIn, signUp }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <form
        className="flex flex-col items-center gap-2"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label className="flex gap-4">
          Email
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            className={textInputClasses.join(" ")}
            placeholder="Email"
            type="email"
            name="email"
            id="email"
          ></input>
        </label>
        <label className="flex gap-4">
          Password
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            className={textInputClasses.join(" ")}
            placeholder="Password"
            type="password"
            name="password"
            id="password"
          ></input>
        </label>
        <div id="buttonContainer" className="flex gap-4 justify-around">
          <button
            onClick={(e) => {
              signUp({ email: email, password: password });
            }}
            className={buttonClasses.join(" ")}
          >
            Sign Up
          </button>
          <button
            onClick={(e) => {
              logIn({ email: email, password: password });
            }}
            className={buttonClasses.join(" ")}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
