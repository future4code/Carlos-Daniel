import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import {
  ChakraProvider,
  Text,
  Box,
  Input,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

export const CreateTripPage = () => {
  const [nome, setNome] = useState("dsfs");
  const [planeta, setPlaneta] = useState("");
  const [data, setData] = useState("");
  const [descricao, setDescricao] = useState("");
  const [duracao, setDuracao] = useState("");

  const history = useHistory();

  const onChangeNome = (e) => {
    setNome(e.target.value);
  };

  const onChangePlaneta = (e) => {
    setPlaneta(e.target.value);
  };

  const onChangeData = (e) => {
    setData(e.target.value);
  };

  const onChangeDescricao = (e) => {
    setDescricao(e.target.value);
  };

  const onChangeDuracao = (e) => {
    setDuracao(e.target.value);
  };

  const voltarPaginaInicialAdm = () => {
    history.push("/admin");
  };

  const criarViagem = () => {
    const token = localStorage.getItem("token");
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/carlos-daniel-maryam/trips";

    const body = {
      name: nome,
      planet: planeta,
      date: data,
      description: descricao,
      durationInDays: duracao,
    };

    axios
      .post(url, body, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <ChakraProvider>
      <Text textAlign="center" fontSize="3xl">
        Criar Viagem
      </Text>

      <Input
        placeholder="Nome"
        onChange={onChangeNome}
        value={nome}
        size="md"
        type="text"
        margin={3}
        width={300}
      />

      <Select
        placeholder="Escolha um planeta"
        onChange={onChangePlaneta}
        value={planeta}
        margin={3}
        width={300}
      >
        <option value="Mercúrio">Mercúrio</option>
        <option value="Vênus">Vênus</option>
        <option value="Terra">Terra</option>
        <option value="Marte">Marte</option>
        <option value="Jupiter">Jupiter</option>
        <option value="Saturno">Saturno</option>
        <option value="Urano">Urano</option>
        <option value="Netuno">Netuno</option>
        <option value="Plutão">Plutão</option>
      </Select>

      <Input
        placeholder="Descrição"
        onChange={onChangeDescricao}
        value={descricao}
        size="md"
        type="text"
        margin={3}
        width={300}
      />

      <NumberInput
        placeholder="Duração em dias"
        onChange={onChangeDuracao}
        value={duracao}
        step={5}
        defaultValue={15}
        min={1}
        max={365}
        width={300}
        margin={3}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>

      <Box
        onClick={voltarPaginaInicialAdm}
        as="button"
        borderRadius="md"
        bg="#4682B4"
        color="white"
        px={4}
        h={10}
        margin={15}
      >
        Voltar
      </Box>
      <Box
        onClick={criarViagem}
        as="button"
        borderRadius="md"
        bg="#4682B4"
        color="white"
        px={4}
        h={10}
        margin={15}
      >
        Criar
      </Box>
    </ChakraProvider>
  );
};
