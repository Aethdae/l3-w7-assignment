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
import Dashboard from "./components/Dashboard";

export default function App() {
  const [session, setSession] = useState(null);
  const navigate = useNavigate();

  async function getUserPrevToken() {
    try {
      const { data, err } = await supabase.auth.getSession();
      if (err) {
        throw new Error(err);
      }
      if (data.session) {
        setSession(data);
        navigate("/dashboard");
      }
    } catch (err) {
      console.error(err);
    }
  }

  async function logIn(loginInfo) {
    try {
      const { data, err } = await supabase.auth.signInWithPassword(loginInfo);
      if (err) {
        throw new Error(err);
      }
      if (data.session) {
        setSession(data);
        navigate("/dashboard");
      }
    } catch (err) {
      console.error(err);
    }
  }

  async function signUp(loginInfo) {
    try {
      const { data, err } = await supabase.auth.signUp(loginInfo);
      if (err) {
        throw new Error(err);
      }
      if (data.session) {
        setSession(data);
        navigate("/dashboard");
      }
    } catch (err) {
      console.error(err);
    }
  }
  async function logOut() {
    try {
      const { err } = await supabase.auth.signOut();
      if (err) {
        throw new Error(err);
      }
      if (!err) {
        navigate("/login");
      }
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    // getUserPrevToken();
    async function authChange() {
      const { data } = await supabase.auth.onAuthStateChange(
        (event, session) => {
          setSession(session);
        },
      );
      return () => {
        data.subscription.unsubscribe();
      };
    }
    authChange();
  }, []);

  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={<HomePage logOut={logOut} session={session} />}
        />
        <Route
          path="/login"
          element={
            session ? (
              <Dashboard session={session} logOut={logOut} />
            ) : (
              <Login logIn={logIn} signUp={signUp} />
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            session ? (
              <Dashboard session={session} logOut={logOut} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </main>
  );
}
