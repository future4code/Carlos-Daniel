import React, { useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { ChakraProvider, Text, Box } from "@chakra-ui/react";

export const TripDetailsPage = () => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/carlos-daniel-maryam/trip/ecPljIkF2ybFuCq71gSc",
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  const voltarInicio = () => {
    history.push("/");
  };
  return (
    <ChakraProvider>
      <Text textAlign="center" fontSize="3xl">
        Detalhes da Viagem
      </Text>

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
    </ChakraProvider>
  );
};
