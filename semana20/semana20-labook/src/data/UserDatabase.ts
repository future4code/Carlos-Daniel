import { BaseDatabase } from "./BaseDatabase";
import { User } from "../model/User";

export class UserDataBase extends BaseDatabase {
  async createUser(user: User) {
    try {
      await this.connection("labook_users").insert(user);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async findUserByEmail(email: string): Promise<User> {
    try {
      const user = await this.connection("labook_users")
        .select("*")
        .where({ email });

      return user[0] && User.toUserModel(user[0]);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
