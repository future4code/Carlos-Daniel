import { selectUserByEmail } from "../../data/selectUserByEmail";
import { generateToken } from "../../services/authenticator";
import { compare } from "../../services/hashManager";
import { login, user } from "../../types/user";
import { insertUser } from "../../data/insertUser";
import { hash } from "../../services/hashManager";
import { generateId } from "../../services/idGenerator";

export class User {
  signupBusiness = async (user: any): Promise<string> => {
    if (
      !user.name ||
      !user.nickname ||
      !user.email ||
      !user.password ||
      !user.role
    ) {
      throw new Error(
        'Preencha os campos "name","nickname", "email" e "password"'
      );
    }

    const id: string = generateId();

    const cypherPassword = await hash(user.password);

    await insertUser({
      id,
      name: user.name,
      nickname: user.nickname,
      email: user.email,
      password: cypherPassword,
      role: user.role,
    });

    const token: string = generateToken({
      id,
      role: user.role,
    });

    return token;
  };

  loginBusiness = async (login: login): Promise<string> => {
    if (!login.email || !login.password) {
      throw new Error("'email' e 'senha' são obrigatórios");
    }

    const user: user = await selectUserByEmail(login.email);

    if (!user) {
      throw new Error("Usuário não encontrado ou senha incorreta (Business)");
    }

    const passwordIsCorrect: boolean = await compare(
      login.password,
      user.password
    );

    if (!passwordIsCorrect) {
      throw new Error("Usuário não encontrado ou senha incorreta");
    }

    const token: string = generateToken({
      id: user.id,
      role: user.role,
    });

    return token;
  };

  getAllUsers = async (token: string) => {
    const tokenData = new Authenticator().getTokenData(token);
  };
}
