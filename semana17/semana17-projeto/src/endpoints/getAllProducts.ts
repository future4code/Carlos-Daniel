import connection from "../connection";
import { Response, Request } from "express";
import { Product } from "../types";

export default async function getAllProducts(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const search = req.query.search || "%";
    const order = req.query.order === "ASC" ? "ASC" : "DESC";
    const products: Product[] = await connection("labecommerce_products")
      .select()
      .orderBy("name", order)
      .where("name", "LIKE", `%${search}%`);

    res.send(products);
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
}
