import app from "./app";
import createUser from "./endpoints/signUp";
import login from "./endpoints/login";
import { connection } from "./data/connection";

app.post("/user/signup", createUser);
app.post("/user/login", login);
