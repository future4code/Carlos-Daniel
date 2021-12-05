import React, { useState } from "react";
import TelaInicial from "./Components/TelaInicial/TelaInicial";
import Match from "./Components/Match/Match";

const App = () => {
  const [telaAtual, setTelaAtual] = useState("telaInicial");

  const mudarTela = () => {
    switch (telaAtual) {
      case "telaInicial":
        return <TelaInicial trocarTela={trocarTela} />;
      case "telaMatch":
        return <Match trocarTela={trocarTela} />;
      default:
        return "error";
    }
  };

  const trocarTela = (nomePagina) => {
    setTelaAtual(nomePagina);
  };

  return <div>{mudarTela()}</div>;
};

export default App;
