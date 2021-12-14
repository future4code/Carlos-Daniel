import connection from "../connection";
import { Response, Request } from "express";
import { User } from "../types";

export default async function getAllUsers(req: Request, res: Response) {
  try {
    const users: User[] = await connection.raw(`SELECT * FROM labecommerce_users
    JOIN labecommerce_purchases
    ON labecommerce_users.${req.body.id} = labecommerce_purchases.${req.body.user_id};`);
    res.send(users);
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
}
