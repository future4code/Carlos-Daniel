import { app } from "./app";
import { signUp } from "./endpoints/signup";
import { login } from "./endpoints/login";
import { getUser } from "./endpoints/getUser";
import { createRecipe } from "./endpoints/createRecipe";
import { getRecipeById } from "./endpoints/getRecipeById";
import { getOwnUser } from "./endpoints/getOwnUser";

app.get("/user/profile", getOwnUser);
app.get("/user/profile/:id", getUser);
app.post("/user/signup", signUp);
app.post("/user/login", login);
app.get("/recipe/:id", getRecipeById);
app.post("/recipe", createRecipe);
