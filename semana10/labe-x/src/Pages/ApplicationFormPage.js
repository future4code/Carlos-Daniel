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

      <select placeholder="Escolha uma viagem">
        <option>Viagem de Verão</option>
        <option>Soneca Coletiva em Plutão</option>
        <option>Pedido de casamento nos anéis de Saturno</option>
        <option>Viagem a Jupiter</option>
        <option>Passeio pelos anéis de Saturno</option>
        <option>Viagem para Mercúrio</option>
        <option>Viagem de férias para Mercúrio </option>
        <option>Pegar os que ficaram</option>
      </select>
      <br />
      <input placeholder="Nome" />
      <br />
      <input placeholder="Idade" />
      <br />
      <input placeholder="Texto de Candidatura" />
      <br />
      <input placeholder="Profissão" />
      <br />
      <select placeholder="Escolha um País"></select>
      <button onClick={voltarParaLista}>Voltar</button>
    </div>
  );
};
