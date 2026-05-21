import React, { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import { useLocation } from "react-router-dom";
import { buttonClasses, transitionClasses } from "../css/htmlClasses";
import DashHeader from "./DashHeader";
import UserCard from "./UserCard";
import AddUserForm from "./AddUserForm";

export default function Dashboard({ session, logOut, addUser }) {
  const [users, setUsers] = useState([]);
  const [showAddUser, setShowAddUser] = useState(false);
  const { state } = useLocation();

  async function addUser(user) {
    //capstone: add error handling here too.
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
      <DashHeader
        logOut={logOut}
        setShowAddUser={setShowAddUser}
        addUser={showAddUser}
      />
      {showAddUser && (
        <AddUserForm setShowAddUser={setShowAddUser} addUser={addUser} />
      )}
      <div id="userContainer" className="max-w-full">
        <ul className="flex flex-col gap-4 max-w-120 mx-auto first:mt-4">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </div>
  );
}
