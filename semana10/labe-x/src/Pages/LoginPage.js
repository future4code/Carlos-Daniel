import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { ChakraProvider, Box, Input, Center, Text } from "@chakra-ui/react";

export const LoginPage = () => {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

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

  const autenticaUsuario = () => {
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
      <Input
        placeholder="medium size"
        size="md"
        placeholder="Senha"
        type="senha"
        margin={3}
        width={300}
        value={senha}
        onChange={onChangeSenha}
      />
      <br />

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
        onClick={autenticaUsuario}
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
