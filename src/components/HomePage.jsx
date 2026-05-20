import React from "react";
import LoginSplash from "./LoginSplash";

export default function HomePage({ user }) {
  return user ? <div>You are logged in</div> : <LoginSplash />;
}
