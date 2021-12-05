import connection from "../connection";
import { Response, Request } from "express";
import { Purchase } from "../types";

export default async function getAllPurchases(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const purchases: Purchase[] = await connection("labecommerce_purchases");
    res.send(purchases);
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
}
