import { BaseDatabase } from "./BaseDataBase";
import { User } from "../types/types";
import { AuthenticationData } from "../services/Authenticator";

export class UserDataBase extends BaseDatabase {
  async createUser(user: User) {
    try {
      await BaseDatabase.connection("cookenu_users").insert({
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        password: user.getPassword(),
      });
    } catch (error) {
      throw new Error((error as any).sqlMessage || (error as any).message);
    }
  }

  async findUserByEmail(email: string): Promise<User> {
    try {
      const user = await BaseDatabase.connection("cookenu_users")
        .select("*")
        .where({ email });
      return user[0] && User.toUserModel(user[0]);
    } catch (error) {
      throw new Error((error as any).sqlMessage || (error as any).message);
    }
  }

  async findUserById(id: string): Promise<User> {
    try {
      const userId = await BaseDatabase.connection("cookenu_users")
        .select("*")
        .where({ id });
      return userId[0] && User.toUserModel(userId[0]);
    } catch (error) {
      throw new Error((error as any).sqlMessage || (error as any).message);
    }
  }

  public async findUserProfile(id: AuthenticationData): Promise<User[]> {
    try {
      const result = await BaseDatabase.connection("cookenu_users")
        .select("id", "name", "email")
        .where({ id: id.id });
      return result.map((user: any) => User.toUserModel(user));
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
