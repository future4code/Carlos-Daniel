import { app } from "./controller/app";
import { createUser } from "./endpoints/createUser";
import { loginUser } from "./endpoints/loginUser";
import { getPostById } from "./endpoints/getPostById";
import { createPost } from "./endpoints/createPost";

app.post("/users/signup", createUser);
app.post("/users/login", loginUser);
app.get("/posts/:id", getPostById);
app.post("/post/create", createPost);
