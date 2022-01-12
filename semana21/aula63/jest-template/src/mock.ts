//B Crie um Mock dessa função que represente a saída de sucesso do seu comportamento
describe("Testing Mock", () => {
  test("Creating mock", () => {
    const validateMock = jest.fn(() => {
      return true;
    });
  });

  test("Creating mock", () => {
    const validateMock = jest.fn(() => {
      return false;
    });
  });
});
