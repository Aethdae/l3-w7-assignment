import React from "react";
import LoginSplash from "./LoginSplash";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";

export default function HomePage({ session, logOut }) {
  return (
    <div>
      {console.log(session)}
      {session ? (
        <Dashboard session={session} logOut={logOut} />
      ) : (
        <LoginSplash />
      )}
    </div>
  );
}
