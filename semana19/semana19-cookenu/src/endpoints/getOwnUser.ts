import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";
import { UserDataBase } from "../data/UserDataBase";
import { User } from "../types/types";

export async function getOwnUser(req: Request, res: Response) {
  try {
    const token = req.headers.authorization as any;

    if (!token) {
      res.statusCode = 401;
      throw new Error("Token inválido");
    }

    const authenticator = new Authenticator();
    const resultToken = authenticator.getTokenData(token);

    const userDataBase = new UserDataBase();
    const [user]: User[] = await userDataBase.findUserProfile(resultToken);

    res.status(200).send({
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
    });
  } catch (error) {
    res.status(400).send((error as any).message);
  }
}
