import { connection } from "../data/connection";

export async function getUserById(id: string): Promise<any> {
  const result = await connection.select("*").from("User").where({ id });

  return result[0];
}
