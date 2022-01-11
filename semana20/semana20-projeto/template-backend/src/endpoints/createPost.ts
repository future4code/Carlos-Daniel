import { Request, Response } from "express";
import { Post } from "../model/Post";
import { connection } from "../data/connection";
import { IdGenerator } from "../services/IdGenerator";
import { Authenticator } from "../services/Authenticator";

export async function createPost(req: Request, res: Response) {
  try {
    let message = "Success!";

    const { photo, description, type, created_at } = req.body;

    const token: string = req.headers.authorization as string;

    const authenticator = new Authenticator();
    const resultToken = authenticator.getTokenData(token);

    const idGenerator = new IdGenerator();
    const id: string = idGenerator.generate();

    const post: Post = {
      id,
      photo,
      description,
      created_at,
      type,
      authorId: resultToken.id,
    };

    await connection("labook_posts").insert(post);

    res.status(201).send({ message, post });
  } catch (error: any) {
    let message = error.sqlMessage || error.message;
    res.statusCode = 400;

    res.send({ message });
  }
}
