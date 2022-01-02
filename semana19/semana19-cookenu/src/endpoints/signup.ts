import { Request, Response } from "express";
import { IdGenerator } from "../services/IdGenerator";
import { UserDataBase } from "../data/UserDataBase";
import { HashManager } from "../services/HashManager";
import { User } from "../types/types";
import { Authenticator } from "../services/Authenticator";

export async function signUp(req: Request, res: Response) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email! || !password) {
      res
        .status(422)
        .send(
          "Informe corretamente as informações de 'name', 'email' e 'password'"
        );
    }
    if (req.body.password.length < 6) {
      res.status(400).send("Senha inválida!");
    }

    const userDataBase = new UserDataBase();
    const user = await userDataBase.findUserByEmail(email);

    if (user as any) {
      res.status(409).send("Esse email já está cadastrado!");
    }

    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();

    const hashManager = new HashManager();
    const hashPassword = await hashManager.hash(password);

    const newUser = new User(id, name, email, hashPassword);
    await userDataBase.createUser(newUser);

    const authenticator = new Authenticator();
    const token = authenticator.generate({ id });

    res.status(200).send({ message: "Usuário criado com sucesso", token });
  } catch (error) {
    res.status(400).send((error as Error).message);
  }
}
