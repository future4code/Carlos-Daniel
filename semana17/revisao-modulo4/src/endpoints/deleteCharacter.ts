import { Request, Response } from "express";
import connection from "../connection";

export default async function deleteCharacter(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { id } = req.params;

    // const index: number = characters.findIndex(
    //   (character) => character.id === id
    // );
    // characters.splice(index, 1);

    await connection("character").delete().where({ id });
    res.status(200).end();
  } catch (err) {
    res.status(500).end();
  }
}
