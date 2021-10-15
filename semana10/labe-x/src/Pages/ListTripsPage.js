import React from "react";
import { useHistory } from "react-router";
import { ChakraProvider, Center, Text, Box } from "@chakra-ui/react";

export const ListTripsPage = () => {
  const history = useHistory();

  const voltarInicio = () => {
    history.push("/");
  };

  const irParaFormulario = () => {
    history.push("/trips/application");
  };

  return (
    <ChakraProvider>
      <Center bg="DarkBlue" h="75px" color="white">
        <Text textAlign="center" fontSize="3xl">
          Lista de Viagens
        </Text>
      </Center>

      <Box
        onClick={voltarInicio}
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
        onClick={irParaFormulario}
        as="button"
        borderRadius="md"
        bg="#4682B4"
        color="white"
        px={4}
        h={10}
        margin={15}
      >
        Inscrever-se
      </Box>
    </ChakraProvider>
  );
};
