import * as jwt from "jsonwebtoken";

export interface AuthenticationData {
  id: string;
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
