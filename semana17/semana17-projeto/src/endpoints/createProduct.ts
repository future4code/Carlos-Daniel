import connection from "../connection";
import { Request, Response } from "express";
import { Product } from "../types";

export default async function createProduct(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name, price, image_url } = req.body;

    if (!name || !price || !image_url) {
      throw new Error("Por favor, verifique os parâmetros");
    }

    const product: Product = {
      id: Date.now().toString(),
      name,
      price,
      image_url,
    };

    await connection("labecommerce_products").insert(product);
    res.status(201).send("Produto criado com sucesso!");
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
}
