import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid black;
  width: 500px;
  height: 500px;
  padding: 10px;
  margin-bottom: 10px;
  text-align: center;
  vertical-align: middle;
`;

const App = (props) => {
  return (
    <div>
      <Container>
        <h1>Astro-Match</h1>
        <button>X</button>
        <button>♥</button>
      </Container>
      <button onClick={() => props.trocarTela("telaMatch")}>
        Ir para Matches
      </button>
      <button>Limpar Matches</button>
    </div>
  );
};

export default App;
