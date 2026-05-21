import React from "react";
import LoginForm from "./LoginForm";

export default function Login({ logIn, signUp }) {
  return (
    <div className="w-full h-full fixed top-0 left-0 bg-black/1 flex flex-col justify-center items-center">
      <div className="bg-white border-2 border-black max-w-120 rounded-xl px-8 py-6 flex flex-col gap-4 items-center">
        <h1 className="text-2xl">Please login/sign up to continue</h1>
        <LoginForm logIn={logIn} signUp={signUp} />
      </div>
    </div>
  );
}
