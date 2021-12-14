import { connection } from "../data/connection";

export async function getUserByEmail(email: string): Promise<void> {
  const result = await connection.select("*").from("User").where({ email });

  return result[0];
}
