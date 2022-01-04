import { Request, Response } from "express";
import { User } from "../business/User/userBusiness";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization;

    const users = await getAllUsers(token);

    res.status(200).send(users);
  } catch (error: any) {
    res.send({ message: error.message }).status(error.status);
  }
};
