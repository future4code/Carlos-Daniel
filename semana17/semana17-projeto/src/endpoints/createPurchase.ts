import connection from "../connection";
import { Request, Response } from "express";
import { Purchase, Product, User } from "../types";

export default async function createPurchase(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { user_id, product_id, quantity } = req.body;

    const [user]: User[] = await connection("labecommerce_users")
      .select()
      .where({ id: user_id });

    if (!user) {
      throw new Error("Usuário não encontrado(user_id)");
    }

    const [product]: Product[] = await connection("labecommerce_products")
      .select()
      .where({ id: product_id });

    if (!product) {
      throw new Error("Produto não encontrado(product_id)");
    }

    const total_price = product.price * quantity;

    const purchase: Purchase = {
      id: Date.now().toString(),
      product_id,
      user_id,
      quantity,
      total_price,
    };

    await connection("labecommerce_purchases").insert(purchase);

    res.status(201).send("Compra feita com sucesso!");
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
}
