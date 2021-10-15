import React from "react";
import { useHistory } from "react-router";
import { ChakraProvider, Text, Center, Box } from "@chakra-ui/react";

export const AdminHomePage = () => {
  const history = useHistory();

  const irParaCriarViagem = () => {
    history.push("/admin/trips/create");
  };

  const irParaDetalhesViagem = () => {
    history.push("/admin/trips/:id");
  };
  return (
    <ChakraProvider>
      <Center bg="DarkBlue" h="75px" color="white">
        <Text textAlign="center" fontSize="3xl">
          Página Inicial
        </Text>
      </Center>

      <Box
        onClick={irParaCriarViagem}
        as="button"
        borderRadius="md"
        bg="#4682B4"
        color="white"
        px={4}
        h={10}
        margin={15}
      >
        Criar Viagem
      </Box>

      <Box
        onClick={irParaDetalhesViagem}
        as="button"
        borderRadius="md"
        bg="#4682B4"
        color="white"
        px={4}
        h={10}
        margin={15}
      >
        Detalhes da Viagem
      </Box>
    </ChakraProvider>
  );
};
