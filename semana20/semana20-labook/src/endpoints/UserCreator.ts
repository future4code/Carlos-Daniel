import { Request, Response } from "express";
import { User } from "../model/User";
import { UserDataBase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";

export class UserCreator {
  public createUser = async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        res
          .status(422)
          .send("Informe corretamente os campos 'name', 'email' e 'password'.");
      }

      const idGenerator = new IdGenerator();
      const id = idGenerator.generate();

      const hashManager = new HashManager();
      const hashPassword = await hashManager.hash(password);

      const newUser = new User(id, name, email, hashPassword);
      await new UserDataBase().createUser(newUser);

      const authenticator = new Authenticator();
      const token = authenticator.generate({ id });

      res.status(200).send({ message: "Usuário criado com sucesso", token });
    } catch (error: any) {
      res.status(500).send(error.sqlMessage || error.message);
    }
  };
}
