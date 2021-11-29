import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

const app: Express = express();

app.use(express.json());
app.use(cors());

// 1 - Criar Usuário
app.post("/user", async (req, res) => {
  try {
    await connection.raw(`
    INSERT INTO User
    (id,nickname, name, email)
    VALUES(
      ${Date.now().toString()},
      "${req.body.nickname}",
      "${req.body.name}",
      "${req.body.email}",
    )
    `);
    res.status(201).send("Usuário criado com sucesso!");
  } catch (error) {
    res.status(500).send("Ocorreu algo errado! Por favor, tente novamente.");
  }
});

// 2 - Buscar usuário por id
app.get("/user/:id", async (req, res) => {
  try {
    const resultado = await connection.raw(`
    SELECT * FROM User
    `);
    res.status(200).send(resultado);
  } catch (error) {
    res.status(500).send("Ocorreu algo errado! Por favor, tente novamente.");
  }
});

// 3 -Editar Usuários
app.post("user/:id", async (req, res) => {});

//Criação do Servidor
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
