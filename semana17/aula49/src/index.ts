import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { connection } from "./connection";

dotenv.config();
const app: Express = express();
app.use(express.json());
app.use(cors());

//Endpoint
export default async function selectAllUsers(): Promise<any> {
  const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula49_exercicio;
    `);

  return result[0];
}

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await selectAllUsers();

    if (!users.length) {
      res.statusCode = 404;
      throw new Error("No users found");
    }

    res.status(200).send(users);
  } catch (error) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};
//Criando Servidor
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});