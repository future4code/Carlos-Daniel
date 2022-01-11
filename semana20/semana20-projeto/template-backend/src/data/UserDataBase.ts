import { User } from "../model/User";
import { BaseDatabase } from "../data/BaseDatabase";

export class UserDatabase extends BaseDatabase {
  createUser = async (user: User) => {
    const result: User = await this.connection("labook_users").insert(user);
  };
}
