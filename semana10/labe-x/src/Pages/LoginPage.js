import React from "react";
import { useHistory } from "react-router";

export const LoginPage = () => {
  const history = useHistory();

  const irParaInicioAdm = () => {
    history.push("/admin");
  };

  const voltarPaginaInicialAdm = () => {
    history.push("/");
  };
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={irParaInicioAdm}>Entrar</button>
      <button onClick={voltarPaginaInicialAdm}>Voltar</button>
    </div>
  );
};
