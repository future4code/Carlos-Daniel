import React, { useState, useEffect } from "react";
import { CardPerfil, ListaMatches, Botoes } from "./Styles";
import axios from "axios";
import { Button, Heading, ChakraProvider, Image } from "@chakra-ui/react";
import { theme } from "../../Theme";

const Lista = (props) => {
  const [profileMatch, setProfileMatch] = useState([]);

  const getMatches = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/carlos-daniel-maryam/matches"
      )
      .then((res) => {
        setProfileMatch(res.data.matches);
      })
      .catch((err) => {
        alert(err.response);
      });
  };
  useEffect(() => {
    getMatches();
  }, []);

  const profileMap = profileMatch.map((profile) => {
    return (
      <div key={profile.id}>
        <Image
          borderRadius="full"
          boxSize="150px"
          src={profile.photo}
          alt="Imagem do Perfil"
        />
        <Heading as="h4" size="md">
          {profile.name}
        </Heading>
      </div>
    );
  });

  const putClear = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/carlos-daniel-maryam/clear"
      )
      .then((res) => {
        alert("Matches apagados com sucesso!");
        getMatches();
      })
      .catch((err) => {
        alert(err.response);
      });
  };

  return (
    <ChakraProvider theme={theme}>
      <div>
        <Botoes>
          <Button
            onClick={() => props.trocarTela("telaInicial")}
            colorScheme="teal"
            size="sm"
          >
            Voltar
          </Button>
        </Botoes>
      </div>
      <ListaMatches>
        <div>
          <Heading as="h2" size="xl">
            Seus Matches
          </Heading>
          <CardPerfil>{profileMap}</CardPerfil>
        </div>
      </ListaMatches>
      <Botoes>
        <Button onClick={putClear} colorScheme="teal" size="sm">
          Limpar Matches
        </Button>
      </Botoes>
    </ChakraProvider>
  );
};

export default Lista;
