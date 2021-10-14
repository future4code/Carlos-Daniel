import React from "react";
import { useHistory } from "react-router";

export const ListTripsPage = () => {
  const history = useHistory();

  const voltarInicio = () => {
    history.push("/");
  };

  const irParaFormulario = () => {
    history.push("/applicationForm");
  };

  return (
    <div>
      <h1>Lista</h1>
      <button onClick={voltarInicio}>Voltar</button>
      <button onClick={irParaFormulario}>Inscrever-se</button>
    </div>
  );
};
