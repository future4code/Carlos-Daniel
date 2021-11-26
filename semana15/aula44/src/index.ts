import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";

const app = express();

app.use(express.json());
app.use(cors());

export enum userType {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}

type user = {
  id: number;
  name: string;
  email: string;
  type: userType;
  age: number;
};

let users: user[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: userType.ADMIN,
    age: 12,
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: userType.NORMAL,
    age: 36,
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: userType.NORMAL,
    age: 21,
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: userType.NORMAL,
    age: 17,
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: userType.ADMIN,
    age: 17,
  },
];

//Exercício01 - Usária o método GET através da entidade "/users"
app.get("/users", (req, res) => {
  res.status(200).send(users);
});

//Exercício02 - Criei o Enum

//Exercício03
//Geralmente id ou name
app.get("/users/:name", (req, res) => {
  let errorCode: number = 400;
  try {
    const name = req.params.name;
    const result = users.find((user) => {
      return user.name === name;
    });
    if (!result) {
      errorCode = 404;
      throw new Error("Name not found");
    }
    res.status(200).send(result);
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

//Exercício04
app.post("/users", (req, res) => {
  let errorCode: number = 400;
  try {
    const { id, name, email, type, age } = req.body;

    if (!id || !name || !email || !type || !age) {
      errorCode = 422;
      throw new Error("Please check the fields!");
    }

    const newUser: user = {
      id,
      name,
      email,
      type,
      age,
    };

    users.push(newUser);
    res.status(201).send({ message: "User added successfully" });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

//A) O put atualiza os recursos ou cria(caso não exista)
//B) Prefiro o Post, pq é mais apropriado para a criação e o post ficaria melhor
// para editar

//Exercício05
app.put("/users", (req, res) => {
  let errorCode: number = 400;
  try {
    const { id, name, email, type, age } = req.body;

    if (!id || !name || !email || !type || !age) {
      errorCode = 422;
      throw new Error("Please check the fields!");
    }

    const newUser: user = {
      id,
      name,
      email,
      type,
      age,
    };

    users.push(newUser);
    res.status(201).send({ message: "User added successfully" });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

//Exercício06
app.patch("/users", (req, res) => {
  let errorCode: number = 400;
  try {
    const { id, name, email, type, age } = req.body;

    if (!id || !name || !email || !type || !age) {
      errorCode = 422;
      throw new Error("Please check the fields!");
    }

    const newUser: user = {
      id,
      name,
      email,
      type,
      age,
    };

    users.push(newUser);
    res.status(201).send({ message: "User added successfully" });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

//Exercício07
app.delete("/users/:id", (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      throw new Error("Invalid id");
    }

    for (let i = 0; i < users.length; i++) {
      if (users[i].id === id) {
        users.splice(i, 1);
        return res.status(200).end();
      }
    }

    res.status(204).send("User not found");
  } catch (err) {
    res.status(400).send(err.message);
  }
});

//////////////////////////////////////
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
