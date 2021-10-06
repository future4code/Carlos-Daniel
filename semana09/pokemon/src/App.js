import React, { useState, useEffect } from "react";
import axios from "axios";
import PokeCard from "./Componentes/PokeCard/PokeCard";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
`;

const App = () => {
  const [pokelist, setPokelist] = useState([]);
  const [pokeName, setPokeName] = useState("");

  const getPokemon = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((response) => {
        // função que está setando no estado os 151 pokemons
        setPokelist(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changePokeName = (e) => {
    setPokeName(e.target.value);
  };

  return (
    <Container>
      {/* evento onChange chama função toda vez que o usuário 
        escolhe um novo pokemon no dropdown */}
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        {/* renderizando a lista de pokemons como opções do select */}
        {pokeList.map((pokemon) => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      {/* expressão booleana que renderiza o componente PokeCard,
        caso o valor de pokeName, no estado, seja true */}
      {this.state.pokeName && <PokeCard pokemon={this.state.pokeName} />}
    </Container>
  );
};

export default App;
