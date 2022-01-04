import { Request, Response } from "express";
import { User } from "../business/User/userBusiness";

export const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const loginBusiness = new User();

    const token = await loginBusiness.loginBusiness({ email, password });

    res.send({
      message: "Usuário logado!",
      token,
    });
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
