import React, { useState } from "react";

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
            className="border-2 bg-gray-400/50 border-black rounded-sm"
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
            className="border-2 bg-gray-400/50 border-black rounded-sm"
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
            className="bg-blue-800 border-black px-6 py-2 text-white border-2 rounded-2xl"
          >
            Sign Up
          </button>
          <button
            onClick={(e) => {
              logIn({ email: email, password: password });
            }}
            className="bg-blue-800 border-black px-6 py-2 text-white border-2 rounded-2xl"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
