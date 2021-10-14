import React from "react";
import { useHistory } from "react-router";

export const TripDetailsPage = () => {
  const history = useHistory();

  const voltarPaginaInicialAdm = () => {
    history.push("/admin");
  };
  return (
    <div>
      <h1>Detalhes da Viagem</h1>
      <button onClick={voltarPaginaInicialAdm}>Voltar</button>
    </div>
  );
};
