import { BaseDatabase } from "./BaseDataBase";
import { Recipe } from "../types/types";

export class RecipeDataBase extends BaseDatabase {
  async createRecipe(recipe: Recipe) {
    try {
      await BaseDatabase.connection("cookenu_recipes").insert({
        id: recipe.getId(),
        title: recipe.getTitle(),
        description: recipe.getDescription(),
        date: recipe.getDate(),
      });
    } catch (error) {
      throw new Error((error as any).sqlMessage || (error as any).message);
    }
  }
  async findRecipeById(id: string): Promise<Recipe> {
    try {
      const recipeId = await BaseDatabase.connection("cookenu_recipes")
        .select("*")
        .where({ id });
      return recipeId[0] && Recipe.toRecipeModel(recipeId[0]);
    } catch (error) {
      throw new Error((error as any).sqlMessage || (error as any).message);
    }
  }
}
