import * as jwt from "jsonwebtoken";
import { USER_ROLES } from "../types/User";

export interface AuthenticationData {
  id: string;
  role: USER_ROLES;
}

export class Authenticator {
  generate(input: AuthenticationData): string {
    const token = jwt.sign(input, process.env.JWT_KEY as any, {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN,
    });

    return token;
  }

  getTokenData(token: string): AuthenticationData {
    const data = jwt.verify(token, process.env.JWT_KEY as any);
    return data as AuthenticationData;
  }
}
