import { Request, Response } from "express";
import { character } from "../types";
import connection from "../connection";

export default async function getAllCharacters(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name, orderBy, orderType, page } = req.query;

    const resultsPerPage = 5;

    // página1 -> offset 0
    // página2 -> offset 5
    // página3 -> offset 10

    const offset = resultsPerPage * (Number(page) - 1);

    const characters: character[] = await connection("character")
      .where("name", "LIKE", `${name}`)
      .orderBy((orderBy as string) || "name", orderType as string)
      .offset(offset);

    res.send(characters);
  } catch (err) {
    res.status(500).send("Ocorreu um erro inesperado, tente novamente!  ");
  }
}
