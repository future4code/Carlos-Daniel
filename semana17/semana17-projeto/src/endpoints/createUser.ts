import connection from "../connection";
import { Request, Response } from "express";
import { User } from "../types";

export default async function createUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      throw new Error("Por favor, verifique os parâmetros");
    }

    const user: User = {
      id: Date.now().toString(),
      name,
      email,
      password,
    };

    await connection("labecommerce_users").insert(user);

    res.status(201).send("Usuario criado com sucesso!");
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
}
