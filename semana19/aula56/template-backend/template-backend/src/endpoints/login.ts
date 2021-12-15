import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";

export default async function login(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.statusCode = 422;
      throw new Error("Preencha os campos 'email' e 'password' ");
    }

    const [user] = await connection("to_do_list_users").where({ email });

    const passwordIsCorrect: boolean = new HashManager().compareHash(
      password,
      user?.password
    );

    if (!user || !passwordIsCorrect) {
      res.statusCode = 401;
      res.statusMessage = "Credenciais invalidas";
      throw new Error(res.statusMessage);
    }
    const token = new Authenticator().generateToken({
      id: user.id,
      role: user.role,
    });

    res.status(200).send({ token });
  } catch (error) {
    if (res.statusCode === 200) {
      console.log(error);
      res.status(500).send({ message: "Internal server error" });
    } else {
      res.end();
    }
  }
}
