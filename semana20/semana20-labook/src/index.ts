import { app } from "./controller/app";
import { Login } from "./endpoints/Login";
import { UserCreator } from "./endpoints/UserCreator";
import { PostCreator } from "./endpoints/PostCreator";

const newUser = new UserCreator().createUser;
const loginUser = new Login().loginUser;
const newPost = new PostCreator().createPost;

app.post("/user", newUser);
app.post("/user/login", loginUser);
app.post("/post", newPost);
