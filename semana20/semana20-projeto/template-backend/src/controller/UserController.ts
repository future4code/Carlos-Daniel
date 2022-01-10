import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { User } from "../model/User";

export class UserController {
  createUser = async (req: Request, res: Response) => {
    try {
      let message = "Success!";
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        res.statusCode = 406;
        message = '"name", "email" and "password" must be provided';
        throw new Error(message);
      }

      const user = await new UserBusiness().createUser(name, email, password);

      res.send(user);
    } catch (error: any) {
      res.status(500).send("Ocorreu um erro inesperado!");
    }
  };
}
