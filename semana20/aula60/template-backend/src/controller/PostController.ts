import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { PostDatabase } from "../data/PostDatabase";

export class PostController {
  postBusiness: PostBusiness;

  constructor() {
    this.postBusiness = new PostBusiness(new PostDatabase());
  }

  getPostById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const post = await this.postBusiness.getPostById(id);

      res.send(post);
    } catch (error: any) {
      console.log(error);
      res.status(500).send("Ocorreu um erro inesperado!");
    }
  };
}
