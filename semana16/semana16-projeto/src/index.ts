import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

const app: Express = express();

app.use(express.json());
app.use(cors());

// Teste - Pegar todos os usuários
// app.get("/user", async (req: Request, res: Response) => {
//   try {
//     const resultado = await connection("User");
//     res.send(resultado);
//   } catch (error) {
//     res.status(500).send({ message: (error as Error).message });
//   }
// });

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
    res.status(500).send("Ocorreu um erro! Por favor, tente novamente");
  }
});

// 2 - Pegar usuário por ID
app.get("/user/:id", async (req: Request, res: Response) => {
  try {
    const resultado = await connection("User")
      .select(req.params.nickname)
      .where({ id: req.params.id });
    res.send(resultado);
  } catch (error) {
    res.status(500).send("Ocorreu um erro! Por favor, tente novamente");
  }
});

// 3 - Editar usuário
app.put("/user/:id", async (req: Request, res: Response) => {
  try {
    await connection("User")
      .update({
        id: req.body.id,
        nickname: req.body.nickname,
        name: req.body.name,
        email: req.body.email,
      })
      .where({ id: req.params.id });
    res.status(200).send("Usuário atualizado!");
  } catch (error) {
    res.status(500).send("Ocorreu um erro! Por favor, tente novamente");
  }
});

// 4 - Criar tarefa
app.post("/task", async (req: Request, res: Response) => {
  try {
    await connection("Task").insert({
      id: req.body.id,
      title: req.body.title,
      description: req.body.description,
      limiteDate: req.body.limiteDate,
    });
    res.send("Tarefa criada com sucesso!");
  } catch (error) {
    res.status(500).send("Ocorreu um erro! Por favor, tente novamente");
  }
});

// 5 - Pegar Tarefa pelo ID
app.get("/task/:id", async (req: Request, res: Response) => {
  try {
    const resultado = await connection("Task")
      .select(req.params.title)
      .where({ id: req.params.id });
    res.send(resultado);
  } catch (error) {
    res.status(500).send("Ocorreu um erro! Por favor, tente novamente");
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
