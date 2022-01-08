import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDatabase";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";

export class Login {
  public loginUser = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      if (!email! || !password) {
        res
          .status(422)
          .send(
            "Por favor,informe corretamente as informações de  'email' e 'password'"
          );
      }

      const userDataBase = new UserDataBase();
      const user = await userDataBase.findUserByEmail(email);

      if (!user) {
        res.status(400).send("Esse email não está cadastrado");
      }

      const hashManager = new HashManager();
      const passwordIsCorrect = await hashManager.compare(
        password,
        user.getPassword()
      );

      if (!passwordIsCorrect) {
        res.status(401).send("email ou senha incorretos");
      }

      const authenticator = new Authenticator();
      const token = authenticator.generate({ id: user.getId() });

      res.status(200).send({ message: "Usuário logado com sucesso", token });
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
}
