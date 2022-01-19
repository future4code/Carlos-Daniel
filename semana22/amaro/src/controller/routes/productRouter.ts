import { Router } from "express";
import { ProductController } from "../ProductController/ProductController";

export const productRouter = Router();

const productController = new ProductController();

productRouter.post("/", productController.registerProduct);
