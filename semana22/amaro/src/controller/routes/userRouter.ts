import { Router } from "express";
import { UserController } from "../UserController/UserController";

export const userRouter = Router();

const userController = new UserController();

userRouter.post("/signup", userController.signup);
userRouter.post("/login", userController.loginUser);
