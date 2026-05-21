import React, { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import { useLocation } from "react-router-dom";
import { buttonClasses } from "../css/htmlClasses";
import DashHeader from "./DashHeader";
import UserCard from "./UserCard";
import AddUserForm from "./AddUserForm";

export default function Dashboard({ session, logOut, addUser }) {
  const [users, setUsers] = useState([]);
  const [showAddUser, setShowAddUser] = useState(false);
  const { state } = useLocation();

  async function addUser(user) {
    try {
      const { data, err } = await supabase.from("users").insert(user).select();
      if (err) {
        throw new Error(err);
      }
      getUsers();
    } catch (err) {
      console.error(err);
    }
  }
  async function getUsers() {
    try {
      const { data, err } = await supabase.from("users").select();
      if (err) {
        throw new Error(err);
      }
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <DashHeader logOut={logOut} setShowAddUser={setShowAddUser} />
      {showAddUser && (
        <AddUserForm setShowAddUser={setShowAddUser} addUser={addUser} />
      )}
      <div id="userContainer">
        <ul>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </div>
  );
}
