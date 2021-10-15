import React from "react";
import { useHistory } from "react-router";
import { ChakraProvider, Text, Center, Box } from "@chakra-ui/react";

export const ApplicationFormPage = () => {
  const history = useHistory();

  const voltarParaLista = () => {
    history.push("/trips/list");
  };

  return (
    <ChakraProvider>
      <Text fontSize="4xl" textAlign="center">
        Inscreva-se para uma viagem
      </Text>

      <Box
        onClick={voltarParaLista}
        as="button"
        borderRadius="md"
        bg="#CBD5E0"
        color="black"
        px={4}
        h={10}
        margin={15}
      >
        Voltar
      </Box>
    </ChakraProvider>
  );
};
