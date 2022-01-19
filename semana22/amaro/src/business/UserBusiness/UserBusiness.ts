import { SignupInputDTO, LoginInputDTO, User } from "../../entities/User";
import { IdGenerator } from "../../services/IdGenerator";
import { HashManager } from "../../services/HashManager";
import { Authenticator } from "../../services/Authenticator";
import { UserDatabase } from "../../data/UserDataBase/UserDataBase";

export class UserBusiness {
  async signup(input: SignupInputDTO): Promise<string | undefined> {
    try {
      if (!input.name || !input.email || !input.password) {
        throw new Error('"name", "email" and "password" must be provided');
      }

      const idGenerator = new IdGenerator();
      const id: string = idGenerator.generateId();

      const hashManager = new HashManager();
      const cypherPassword = await hashManager.hash(input.password);

      const user: User = {
        id,
        name: input.name,
        email: input.email,
        password: cypherPassword,
      };

      const userDataBase = new UserDatabase();
      await userDataBase.insertUser(user);

      const tokenManager = new Authenticator();
      const token: string = tokenManager.generate({ id });

      return token;
    } catch (error) {}
  }

  async login(input: LoginInputDTO): Promise<string | undefined> {
    try {
      if (!input.email || !input.password) {
        throw new Error('"email" and "password" must be provided');
      }

      const userDataBase = new UserDatabase();
      const user: User = await userDataBase.getUserByEmail(input.email);

      const hashManager = new HashManager();
      const passwordIsCorrect: boolean = await hashManager.compare(
        input.password,
        user.password
      );

      if (!user || !passwordIsCorrect) {
        throw new Error("Invalid credentials");
      }

      const tokenManager = new Authenticator();
      const token: string = await tokenManager.generate({ id: user.id });

      return token;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
