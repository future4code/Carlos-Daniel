import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import {
  ChakraProvider,
  Box,
  Input,
  Center,
  Text,
  InputGroup,
} from "@chakra-ui/react";

export const LoginPage = () => {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [mostrar, setMostrar] = React.useState(false);

  const history = useHistory();

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangeSenha = (e) => {
    setSenha(e.target.value);
  };

  const voltarInicio = () => {
    history.push("/");
  };

  const entrar = () => {
    const URL =
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/carlos-daniel-maryam/login";
    const header = "Content-Type: application/json";
    const body = {
      email: email,
      password: senha,
    };

    axios
      .post(URL, body, header)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Deu ruim", err.response);
      });
    history.push("/admin");
  };

  return (
    <ChakraProvider>
      <Center bg="DarkBlue" h="75px" color="white">
        <Text textAlign="center" fontSize="3xl">
          Login Page
        </Text>
      </Center>

      <Input
        placeholder="medium size"
        size="md"
        placeholder="E-mail"
        width={300}
        type="email"
        margin={3}
        value={email}
        onChange={onChangeEmail}
      />
      <br />

      <InputGroup size="md">
        <Input
          placeholder="Senha"
          valu={senha}
          onChange={onChangeSenha}
          width={300}
          margin={3}
          pr="4.5rem"
          type={mostrar ? "text" : "password"}
        />
      </InputGroup>

      <Box
        onClick={voltarInicio}
        as="button"
        borderRadius="md"
        bg="#4682B4"
        color="white"
        px={4}
        h={8}
        margin={15}
      >
        Voltar
      </Box>

      <Box
        onClick={entrar}
        as="button"
        borderRadius="md"
        bg="#4682B4"
        color="white"
        px={4}
        h={8}
        margin={15}
      >
        Enviar
      </Box>
    </ChakraProvider>
  );
};
