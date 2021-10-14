import React from "react";
import { useHistory } from "react-router";

export const AdminHomePage = () => {
  const history = useHistory();

  const irParaCriarViagem = () => {
    history.push("/admin/trips/create");
  };

  const irParaDetalhesViagem = () => {
    history.push("/admin/trips/:id");
  };
  return (
    <div>
      <h1>Admin Home Page</h1>
      <button onClick={irParaCriarViagem}>Criar Viagem</button>
      <button onClick={irParaDetalhesViagem}>Detalhes da Viagem</button>
    </div>
  );
};
