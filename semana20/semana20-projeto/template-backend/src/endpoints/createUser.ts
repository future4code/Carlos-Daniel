import { Request, Response } from "express";
import { User } from "../model/User";
import { connection } from "../data/connection";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";

export async function createUser(req: Request, res: Response) {
  try {
    let message = "Success!";
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.statusCode = 406;
      message = '"name", "email" and "password" must be provided';
      throw new Error(message);
    }

    const idGenerator = new IdGenerator();
    const id: string = idGenerator.generate();

    const hashManager = new HashManager();
    const hashPassword: string = await hashManager.hash(password);

    const user: User = {
      id,
      name,
      email,
      password: hashPassword,
    };

    await connection("labook_users").insert(user);

    const authenticator = new Authenticator();
    const token: string = authenticator.generate({ id });

    res.status(201).send({ message, token });
  } catch (error: any) {
    res.statusCode = 400;
    let message = error.sqlMessage || error.message;

    res.send({ message });
  }
}
