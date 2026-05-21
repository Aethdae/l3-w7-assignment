import { supabase } from "./supabase";

export class UserHandler {
  constructor(user) {
    this.user = user;
  }

  async deleteUser() {
    await supabase.from("users").delete(this.user).eq("id", this.user.id);
  }
}
