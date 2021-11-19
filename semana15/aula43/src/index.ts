import express, { Request, Response } from "express";
import cors from "cors";
import { countries } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("Servidor pronto!");
});

//1) BUSCAR TODOS OS PAÍSES (ID E NAME)
const result = countries.map((country) => ({
  id: country.id,
  name: country.name,
}));

app.get("/countries", (req, res) => {
  res.status(200).send(result);
});

// 2) BUSCAR PAÍSES POR ID
app.get("/countries/:id", (req, res) => {
  const id = req.params.id;
  const result = countries.find((country) => {
    return country.id === Number(id);
  });

  if (result) {
    res.send(result);
  } else {
    res.status(404).send("País não encontrado");
  }
});

//3) BUSCAR PAÍSES COM FILTROS
app.get("/countries/search", (req, res) => {
  let result: any[] = countries;

  if (req.query.name) {
    result = result.filter((country) =>
      country.name.includes(req.query.name as string)
    );
  }

  if (req.query.capital) {
    result = result.filter((country) =>
      country.capital.includes(req.query.capital as string)
    );
  }

  if (req.query.continent) {
    result = result.filter((country) =>
      country.continent.includes(req.query.continent as string)
    );
  }
});

//4) EDITAR PAÍS
// app.post("/countries/:id", (req, res) => {});

// 5) DELETAR PAÍS
app.delete("/countries/:id", async (req, res) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      res.statusCode = 401;
      throw new Error();
    }

    const index = countries.findIndex((country) => {
      return country.id === Number(req.params.id);
    });

    if (index === -1) {
      res.statusCode = 404;
      throw new Error();
    }

    countries.splice(index, 1);

    res.status(204).end();
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).end();
    } else {
      res.end();
    }
  }
});
