import React from "react";
import { useHistory } from "react-router";

export const ApplicationFormPage = () => {
  const history = useHistory();

  const voltarParaLista = () => {
    history.push("/trips/list");
  };

  return (
    <div>
      <h1>Inscreva-se para uma viagem</h1>
      <button onClick={voltarParaLista}>Voltar</button>
    </div>
  );
};
