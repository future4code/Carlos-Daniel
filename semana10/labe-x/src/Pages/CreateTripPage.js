import React from "react";
import { useHistory } from "react-router";

export const CreateTripPage = () => {
  const history = useHistory();

  const voltarPaginaInicialAdm = () => {
    history.push("/admin");
  };

  return (
    <div>
      <h1>Criar Viagem</h1>
      <button onClick={voltarPaginaInicialAdm}>Voltar</button>
    </div>
  );
};
