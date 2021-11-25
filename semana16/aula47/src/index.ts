import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import dotenv from "dotenv";
import connection from "./connection";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());

// Exercício 01
// B) Faça uma função que busque um ator pelo nome;
const searchActor = async (name: string): Promise<any> => {
  const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${name}"
    `);
  return result;
};
//C)Faça uma função que receba um gender retorne a quantidade de itens na tabela Actor com esse gender. Para atrizes, female e para atores male.
const countActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
  const count = result[0][0].count;
  return count;
};

// Exercício 02
// Utilize os *query builders* para criar funções de Typescript que realizem as operações abaixo. Tente prestar atenção nos tipos das variáveis de entrada e de saída.

// a. Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão*
const updateActor = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
};

// b. Uma função que receba um id e delete um ator da tabela
const deleteActor = async (id: string): Promise<void> => {
  await connection("Actor").delete().where("id", id);
};

// c. Uma função que receba um gender e devolva a média dos salários de atrizes ou atores desse gender
const returnAvgSalary = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where({ gender });
  return result[0].average;
};

// Exercício 03
// a. Crie um endpoint com as especificações acima
// b.Crie um endpoint agora com as seguintes especificações
app.get("/actor", async (req, res) => {
  try {
    const count = await countActors(req.query.gender as string);
    res.status(200).send({ quantity: count });
  } catch (err) {
    res.status(400).send({
      //   message: err.message,
    });
  }
});

//Exercício 04
//A)
app.put("/actor", async (req, res) => {
  try {
    await updateSalary(req.body.id, req.body.salary);
    res.status(200).send({
      message: "Success",
    });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

//B)
app.delete("/actor/:id", async (req, res) => {
  try {
    await deleteActor(req.params.id);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

//Exercício 05
const createMovie = async (
  id: string,
  title: string,
  synopsis: string,
  releaseDate: Date,
  playingLimitDate: Date
) => {
  await connection
    .insert({
      id: id,
      title: title,
      synopsis: synopsis,
      releas_date: releaseDate,
      playing_limit_date: playingLimitDate,
    })
    .into("Movie");
};

app.post("movie", async (req, res) => {
  try {
    await createMovie(
      req.body.id,
      req.body.title,
      req.body.synopsis,
      req.body.releaseData,
      req.body.playingLimitDate
    );
    res.status(200).send({ message: "Success" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

//Exercício 06
const getAllMovies = async (): Promise<any> => {
  const result = await connection.raw(`
      SELECT * FROM Movie LIMIT 15
    `);

  return result[0];
};

app.get("/movie/search", async (req, res) => {
  try {
    const movies = await searchMovie(req.query.query as string);
    res.status(200).send({ movies: movies });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

///////////////////////////////////////////////////////////////////////
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
