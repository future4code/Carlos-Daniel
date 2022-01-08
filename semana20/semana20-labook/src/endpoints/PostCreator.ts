import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { Post } from "../model/Post";
import { PostDatabase } from "../data/PostDatabase";

export class PostCreator {
  public createPost = async (req: Request, res: Response) => {
    try {
      const { photo, description, date, type } = req.body;

      if (!photo || !description || !date || !type) {
        res
          .status(422)
          .send(
            "Por favor, informe corretamente os campos 'photo', 'description', 'date , e 'type'."
          );
      }

      const token = req.headers.authorization;

      if (!token) {
        res
          .status(422)
          .send("Esse input exige uma autorização a ser passada nos headers");
      }

      const authenticator = new Authenticator();
      const tokenData = authenticator;

      const idGenerator = new IdGenerator();
      const id = idGenerator.generate();

      const newPost = new Post(id, photo, description, date, type);
      const postDatabase = new PostDatabase();
      await postDatabase.createPost(newPost);

      res.status(200).send({ "Post criado com sucesso": newPost });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
}
