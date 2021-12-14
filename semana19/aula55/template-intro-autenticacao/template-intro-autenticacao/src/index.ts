import app from "./app";
import { Request, Response } from "express";
import { getData } from "./services/getData";
import { getUserById } from "./services/getUserById";
import { getUserByEmail } from "./services/getUserByEmail";
import { generateToken } from "./services/Authenticator";
import { generateId } from "./services/IdGenerateId";
import { createUser } from "./data/connection";

app.get("/user/profile", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;

    const authenticationData = getData(token);

    const user = await getUserById(authenticationData.id);

    res.status(200).send({
      id: user.id,
      email: user.email,
    });
  } catch (error) {
    res.send(400).send({ message: error.message });
  }
});

app.post("/user/signup", async (req: Request, res: Response) => {
  try {
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    if (!req.body.password || req.body.password.length < 6) {
      throw new Error("Invalid password");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    const id = generateId();

    await createUser(id, userData.email, userData.password);

    const token = generateToken({
      id,
    });

    res.status(200).send({
      token,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

app.post("/user/login", async (req: Request, res: Response) => {
  try {
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    const user = await getUserByEmail(userData.email);

    if (req.body.password !== userData.password) {
      throw new Error("Invalid password");
    }

    const id = generateId();

    const token = generateToken({
      id,
    });
    res.status(200).send({ token });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
