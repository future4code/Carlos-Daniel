import { BaseDatabase } from "../BaseDatabase";
import { User, toUserModel } from "../../entities/User";
import dotenv from "dotenv";

dotenv.config();

export class UserDatabase extends BaseDatabase {
  async insertUser(user: User) {
    try {
      await this.connection("amaro_users").insert({
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
      });
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async getUserByEmail(email: string): Promise<User> {
    try {
      const result: any = await this.connection("amaro_users")
        .select("*")
        .where({ email });

      const user = toUserModel(result[0]);

      return user;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
