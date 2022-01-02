import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";
import { RecipeDataBase } from "../data/RecipeDataBase";

export async function getRecipeById(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const token = req.headers.authorization;

    if (!token) {
      res
        .status(422)
        .send("Esse input exige uma autorização a ser passada nos headers");
    }
    const authenticator = new Authenticator();
    const tokenData = authenticator.getTokenData(token as string);

    const recipeDataBase = new RecipeDataBase();
    const recipes = await recipeDataBase.findRecipeById(id);

    res.status(200).send(recipes);
  } catch (error) {
    res.status(400).send((error as any).message);
  }
}
