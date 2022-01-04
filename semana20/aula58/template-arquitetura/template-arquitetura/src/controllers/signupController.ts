import { Request, Response } from "express";
import { User } from "../business/User/userBusiness";

export const signupController = async (req: Request, res: Response) => {
  try {
    const { name, nickname, email, password, role } = req.body;

    const signupBusiness = new User();

    const token = await signupBusiness.signupBusiness({
      name,
      nickname,
      email,
      password,
      role,
    });

    res.status(201).send({
      message: "Usuário criado!",
      token,
    });

    return token;
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
