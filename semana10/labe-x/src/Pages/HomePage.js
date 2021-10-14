import React from "react";
import { useHistory } from "react-router";

export const HomePage = () => {
  const history = useHistory();

  const irParaViagens = () => {
    history.push("/trips/list");
  };

  const irParaLogin = () => {
    history.push("/login");
  };

  return (
    <div>
      <h1>LabeX</h1>
      <button onClick={irParaViagens}>Ver Viagens</button>
      <button onClick={irParaLogin}>Área de Admin</button>
    </div>
  );
};
