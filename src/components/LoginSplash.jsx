import React from "react";
import LoginForm from "./LoginForm";
import Login from "./Login";
import { Link } from "react-router-dom";

export default function LoginSplash({ logIn, signUp }) {
  return (
    <div className="w-full h-full fixed top-0 left-0 bg-black/1 flex flex-col justify-center items-center">
      <div className="flex flex-col gap-4 bg-white border-2 border-black items-center px-10 py-6 rounded-xl">
        <h1 className="font-bold">Please log in to continue:</h1>
        <Link to="/login">
          <button className="bg-blue-800 border-black px-6 py-2 text-white border-2 rounded-2xl">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}
