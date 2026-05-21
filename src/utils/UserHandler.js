import { supabase } from "./supabase";

export class UserHandler {
  constructor({ user, updateUsers }) {
    this.user = user;
    this.updateUsers = updateUsers;
  }

  async deleteUser() {
    await supabase.from("users").delete(this.user).eq("id", this.user.id);
    this.updateUsers();
  }
}
