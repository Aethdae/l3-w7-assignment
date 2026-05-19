import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import { useEffect, useState } from "react";

export default function App() {
  const [user, setUser] = useState(null);

  async function logIn() {}
  async function signUp() {}
  async function logOut() {}

  useEffect(() => {}, []);
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<HomePage user={user} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
