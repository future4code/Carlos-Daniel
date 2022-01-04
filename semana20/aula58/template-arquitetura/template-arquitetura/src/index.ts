import { app } from "./app";
import { signupController } from "./controllers/signupController";
import { loginController } from "./controllers/loginController";

// app.get("/all", getAllUsersController);
app.post("/user/signup", signupController);
app.post("/user/login", loginController);

// app.put("/task", createTask);
// app.get("/task/:id", getTaskById);
