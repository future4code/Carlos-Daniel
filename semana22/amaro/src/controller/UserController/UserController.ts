import { Request, Response } from "express";
import { SignupInputDTO, LoginInputDTO } from "../../entities/User";
import { UserBusiness } from "../../business/UserBusiness/UserBusiness";

export class UserController {
  async signup(req: Request, res: Response): Promise<void> {
    try {
      const message = "Success!";

      const input: SignupInputDTO = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      };

      const userBusiness = new UserBusiness();
      const token = await userBusiness.signup(input);

      res.status(201).send({ message, token });
    } catch (error: any) {
      const message = error.SqlMessage || error.message;

      res.send({ message });
    }
  }

  async loginUser(req: Request, res: Response) {
    try {
      const message = "Success!";

      const input: LoginInputDTO = {
        email: req.body.email,
        password: req.body.password,
      };

      const token = await new UserBusiness().login(input);

      res.status(200).send({ message, token });
    } catch (error: any) {
      let message = error.sqlMessage || error.message;
      res.statusCode = 400;

      res.send({ message });
    }
  }
}
