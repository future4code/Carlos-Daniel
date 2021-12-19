import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";
import { UserDataBase } from "../data/UserDataBase";

export async function getUser(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const token = req.headers.authorization;

    if (!token) {
      res
        .status(422)
        .send("Esse input exige uma autorização a ser passada nos headers");
    }

    const authenticator = new Authenticator();
    const tokenData = authenticator.getTokenData(token as string);

    const userDataBase = new UserDataBase();
    const users = await userDataBase.findUserById(id);

    res.status(200).send(users);
  } catch (error) {
    res.status(400).send((error as any).message);
  }
}
