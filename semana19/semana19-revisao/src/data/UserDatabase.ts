import { BaseDatabase } from "./BaseDatabase";
import { User } from "../types/User";

export class UserDatabase extends BaseDatabase {
  async createUser(user: User) {
    try {
      await BaseDatabase.connection("lbn_user").insert({
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        password: user.getPassword(),
        role: user.getRole(),
      });
    } catch (error) {
      throw new Error((error as any).sqlMessage || (error as any).message);
    }
  }

  async findUserByEmail(email: string): Promise<User> {
    try {
      const user = await BaseDatabase.connection("lbn_user")
        .select("*")
        .where({ email });
      return user[0] && User.toUserModel(user[0]);
      //A função toUserModel recebe um usuário e cria uma nova instância do usuário através das informações que vêm do banco de dados
    } catch (error) {
      throw new Error((error as any).sqlMessage || (error as any).message);
    }
  }

  async getAllUsers(): Promise<User[]> {
    try {
      const users = await BaseDatabase.connection("lbn_user").select(
        "id",
        "name",
        "email",
        "role"
      );
      return users.map((user) => User.toUserModel(user));
      //Dou um map e para cada usuário que estiver dentro do meu array, eu quero retornar um User.ToUserModel
    } catch (error) {
      throw new Error((error as any).sqlMessage || (error as any).message);
    }
  }
}
