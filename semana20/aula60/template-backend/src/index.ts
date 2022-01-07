import { app } from "./controller/app";
import { PostController } from "./controller/PostController";

const postController = new PostController();

app.get("/posts/:id", postController.getPostById);
