import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";
import { Recipe } from "../types/types";
import { IdGenerator } from "../services/IdGenerator";
import { RecipeDataBase } from "../data/RecipeDataBase";

export async function createRecipe(req: Request, res: Response) {
  try {
    const { title, description, date } = req.body;

    if (!title || !description || !date) {
      res
        .status(422)
        .send("Informe corretamente as informações de 'title' e 'description'");
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

    const newRecipe = new Recipe(id, title, description, date);
    const recipeDataBase = new RecipeDataBase();
    await recipeDataBase.createRecipe(newRecipe);

    res.status(200).send({ "Receita criada com sucesso": newRecipe });
  } catch (error) {
    res.status(400).send((error as Error).message);
  }
}
