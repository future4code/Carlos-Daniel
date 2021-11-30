import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

const app: Express = express();

app.use(express.json());
app.use(cors());

// 1 - Criar Usuário
app.post("/user", async (req: Request, res: Response) => {
  try {
    await connection("User").insert({
      id: req.body.id,
      nickname: req.body.nickname,
      name: req.body.name,
      email: req.body.email,
    });
    res.send("Usuário criado com suceso");
  } catch (error) {
    res.status(500).send("Ocorreu um erro inesperado, tente novamente!");
  }
});

// 2 - Pegar usuário por ID
app.get("/user/:id", async (req: Request, res: Response) => {
  try {
    const resultado = await connection("User")
      .select()
      .where({ id: req.params.id });
    res.send(resultado);
  } catch (error) {
    res.status(500).send({ message: (error as Error).message });
  }
});

// 3 - Editar usuário
app.put("/user/:id", async (req: Request, res: Response) => {
  try {
    connection("User")
      .update({
        id: req.body.id,
        nickname: req.body.nickname,
        name: req.body.name,
        email: req.body.email,
      })
      .where({ id: req.params.id });
    res.status(200).send("Usuário atualizado!");
  } catch (error) {
    res.status(500).send("Ocorreu um erro inesperado, tente novamente!");
  }
});

//Criação do Servidor
const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
