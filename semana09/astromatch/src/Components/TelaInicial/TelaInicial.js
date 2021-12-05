import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Content } from "./styles";
import { Button, Heading, ChakraProvider, Image, Text } from "@chakra-ui/react";
import { theme } from "../../Theme";

const App = (props) => {
  const [profile, setProfile] = useState({});

  const getProfile = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/carlos-daniel-maryam/person"
      )
      .then((res) => {
        setProfile(res.data.profile);
      })
      .catch((err) => {
        alert(err.response);
      });
  };
  useEffect(() => {
    getProfile();
  }, []);

  const postChoosePerson = (choosePerson) => {
    const body = {
      id: profile.id,
      choice: choosePerson,
    };
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/carlos-daniel-maryam/choose-person",
        body
      )
      .then((res) => {
        console.log(res.data);
        getProfile();
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <ChakraProvider theme={theme}>
      <Container>
        <Content>
          <Heading color="#48BB78" isTruncated>
            Astro-Match
          </Heading>
          <div>
            <Image
              borderRadius="full"
              boxSize="150px"
              src={profile.photo}
              alt="Imagem do Perfil"
            />
          </div>
          <Heading as="h4" size="md">
            {profile.name}, {profile.age}
          </Heading>
          <Text fontSize="xl">{profile.bio}</Text>
          <br />
          <div>
            <Button onClick={() => postChoosePerson(false)} colorScheme="red">
              X
            </Button>
            <Button onClick={() => postChoosePerson(true)} colorScheme="blue">
              ♥
            </Button>
          </div>
        </Content>
        <div>
          <Button
            onClick={() => props.trocarTela("telaMatch")}
            colorScheme="teal"
            size="sm"
          >
            Ir para Matches
          </Button>
        </div>
      </Container>
    </ChakraProvider>
  );
};

export default App;
