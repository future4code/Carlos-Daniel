import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 100%; //Sempre em porcentagem quando for página, quando for componente, pode ser em px.
  padding: 10px;
  border: 1px solid black;
  background-color: white;
  color: black;
  margin: 10px;
  flex-direction: "column", "flex";

  img {
    width: 350px;
    height: 350px;
    border: solid rgb(60, 60, 60);
  }

  button {
    width: 200px;
    height: 32px;
    font-size: 1rem;
    & + button {
      margin-left: 10px;
    }
  }
`;
