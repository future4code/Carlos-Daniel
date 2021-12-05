import React from "react";
import { useHistory } from "react-router";
import { ChakraProvider, Text, Box, Center } from "@chakra-ui/react";

export const HomePage = () => {
  const history = useHistory();

  const irParaViagens = () => {
    history.push("/trips/list");
  };

  const irParaLogin = () => {
    history.push("/login");
  };

  return (
    <ChakraProvider>
      <Center bg="DarkBlue" h="75px" color="white">
        <Text textAlign="center" fontSize="3xl">
          Labe-X
        </Text>
      </Center>
      <Box
        onClick={irParaViagens}
        as="button"
        borderRadius="md"
        bg="#4682B4"
        color="white"
        px={4}
        h={8}
        margin={15}
      >
        Ver Viagens
      </Box>

      <Box
        onClick={irParaLogin}
        as="button"
        auto
        borderRadius="md"
        bg="#4682B4"
        color="white"
        px={4}
        h={8}
      >
        Área de Admin
      </Box>
    </ChakraProvider>
  );
};
