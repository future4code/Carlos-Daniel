import { Router } from "express";
import { ProductController } from "../ProductController/ProductController";

export const productRouter = Router();

const productController = new ProductController();
// router
productRouter.post("/", productController.registerProduct);
productRouter.get("/:name", productController.getProductByName);
