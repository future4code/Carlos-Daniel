import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import knex from "knex";

const app: Express = express();

app.use(express.json());
app.use(cors());

//Conexão com o banco de dados
export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
});

//Criação do Servidor
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});