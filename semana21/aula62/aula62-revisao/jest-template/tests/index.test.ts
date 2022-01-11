import { isEven } from "../src";
import { connection } from "../src/Data/connection";

//testando paridade de um número
describe("isEven", () => {
  test("é par", () => {
    const result = isEven(4);
    expect(result).toBe(true);
  });

  test("é ímpar", () => {
    const result = isEven(5);
    expect(result).toBe(false);
  });

  test("não é inteiro", () => {
    const result = isEven(3.5);
    expect(result).toBe(false);
  });
});

//Testando conexão com o banco de dados e erros

describe("Conexão com o banco e erros", () => {
  test("testando conexão", async () => {
    expect.assertions(1);
    try {
      const result = await connection.raw("SELECT 'hello' as message");

      expect(result[0][0]).toEqual({ message: "hello" });
    } catch (error) {
      console.log(error);
    }
  });

  test("testando erro", async () => {
    try {
      throw new Error("Erro ocorrido");
    } catch (error) {
      // os expect's ficam no bloco catch
      expect(error.message).toEqual("Erro ocorrido");
    }
  });

  afterAll(() => {
    connection.destroy();
  });
});
