import React, { useState } from "react";
import TelaInicial from "./Components/TelaInicial/TelaInicial";
import ListaMatches from "./Components/ListaMatches/ListaMatches";

const App = () => {
  const [telaAtual, setTelaAtual] = useState("telaInicial");

  const mudarTela = () => {
    switch (telaAtual) {
      case "telaInicial":
        return <TelaInicial trocarTela={trocarTela} />;
      case "telaMatch":
        return <ListaMatches trocarTela={trocarTela} />;
      default:
        return <TelaInicial />;
    }
  };

  const trocarTela = (nomePagina) => {
    setTelaAtual(nomePagina);
  };

  return (
    <div>
      {mudarTela()}
      <TelaInicial />
      <ListaMatches />
    </div>
  );
};

export default App;
