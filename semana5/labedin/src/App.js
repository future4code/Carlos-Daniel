import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import fotoperfil from '../src/components/CardGrande/fotoperfil.jpeg'
import udemy from '../src/components/CardGrande/udemy.png'
import CardPequeno from './components/CardPequeno/CardPequeno'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import tecnologias from './components/CardGrande/tecnologias.png'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  `

const Container = styled.div `
  width: 40vw;
  margin: 10px 0;`

const Corpo = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`

const Titulo = styled.h2 `
display: flex;
justify-content: center;
margin-bottom: 20px; `

const MinhasHabilidades = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: 1px black;
    height: 50px;`

const ImgHabilidades = styled.img `
    width: 75px;
    margin: 12px;`


function App() {
  return (
    <Corpo>
      <Container>
        <Titulo>Dados pessoais</Titulo>
        <CardGrande 
          imagem= {fotoperfil}
          nome="Carlos Daniel" 
          descricao="Oi, eu sou o Carlos. Faço o curso integral de Desenvolvimento Web Full stack na Labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </Container>

      <Container>
        <CardPequeno 
        nome = "Email"
        descricao = "CarlosDaniel@gmail.com"
        />

        <CardPequeno
        nome = "Endereço"
        descricao = "Rua Goiás Velho, nº 15, Bairro: Centro"
        />
      </Container>

      <Container>
        <Titulo>Experiências profissionais</Titulo>
        <CardGrande 
          imagem= "https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Estudante de programação da Turma Maryam" 
        />

        <CardGrande 
          imagem= {udemy} 
          nome="Udemy" 
          descricao="Cursando Algoritmos e Lógica de Programação" 
        />
      </Container>

      <Container>
        <Titulo>Experiências</Titulo>
        <CardGrande
          imagem= {tecnologias}
          nome= "Tecnologias"
          descricao= "Trabalho com HTML, CSS e JavaScript"
        />
      </Container>


      <Container>
        <Titulo>Minhas redes sociais</Titulo>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </Container>
    </Corpo>
  );
}

export default App;
