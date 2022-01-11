import { User } from "../model/User";
import { UserDatabase } from "../data/UserDataBase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";

export class UserBusiness {
  createUser = async (name: string, email: string, password: string) => {
    const idGenerator = new IdGenerator();
    const id: string = idGenerator.generate();

    const hashManager = new HashManager();
    const hashPassword: string = await hashManager.hash(password);

    const newUser: User = { id, name, email, password: hashPassword };
    const user = await new UserDatabase().createUser(newUser);

    return user;
  };
}
