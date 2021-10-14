import React from "react";
import { useHistory } from "react-router";

export const ApplicationFormPage = () => {
  const history = useHistory();

  const voltarParaLista = () => {
    history.push("/trips/list");
  };

  return (
    <div>
      <h1>Inscrição</h1>
      <button onClick={voltarParaLista}>Voltar</button>
    </div>
  );
};
