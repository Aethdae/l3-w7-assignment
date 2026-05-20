import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import { useEffect, useState } from "react";
import { supabase } from "./utils/supabase";

export default function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  async function logIn(user) {
    try {
      const { data, err } = await supabase.auth.signInWithPassword(user);
      if (err) {
        throw new Error(err);
      }
      setUser(data);
      navigate("/");
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function getUser() {
    try {
      const { data, err } = await supabase.auth.getSession();
      if (err) {
        throw new Error(err);
      }
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  }
  async function signUp(user) {
    try {
      const { data, err } = await supabase.auth.signUp(user);
      if (err) {
        throw new Error(err);
      }
      setUser(data);
      navigate("/");
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  async function logOut() {}

  useEffect(() => {
    getUser();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<HomePage user={user} />} />
      <Route path="/login" element={<Login logIn={logIn} signUp={signUp} />} />
    </Routes>
  );
}
