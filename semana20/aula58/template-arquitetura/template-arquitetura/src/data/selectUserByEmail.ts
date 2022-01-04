import { connection } from "../connection";
import { user } from "../types/user";

export const selectUserByEmail = async (email: string): Promise<user> => {
  try {
    const result = await connection("to_do_list_users")
      .select("*")
      .where({ email });

    return result[0];
  } catch (error: any) {
    console.log(error.sqlMessage || error.message);
    throw new Error("Usuário não encontrado");
  }
};
