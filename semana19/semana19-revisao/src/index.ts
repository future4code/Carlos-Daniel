import { app } from "./app";
import { signup } from "./endpoints/signup";
import { login } from "./endpoints/login";
import { getAllCharacters } from "./endpoints/getAllCharacters";

app.get("/user", getAllCharacters);
app.post("/user", signup);
app.post("/user/login", login);
