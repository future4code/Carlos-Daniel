import React from "react";
import { useHistory } from "react-router";
import { ChakraProvider, Text, Box } from "@chakra-ui/react";

export const CreateTripPage = () => {
  const history = useHistory();
  const voltarPaginaInicialAdm = () => {
    history.push("/admin");
  };

  return (
    <ChakraProvider>
      <Text textAlign="center" fontSize="3xl">
        Criar Viagem
      </Text>

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
    </ChakraProvider>
  );
};
