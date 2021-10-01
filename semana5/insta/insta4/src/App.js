import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const TituloInsta = styled.h1 `
  display: flex;
  justify-content: center;
  `
const BotaoAdicionar = styled.h1 `
  display: flex;
  justify-content: center;`




class App extends React.Component {
  state = {
    pessoas: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario:"https://picsum.photos/50/50",
        fotoPost:"https://picsum.photos/200/150"
      },

      {
        nomeUsuario: "Joao",
        fotoUsuario: "https://picsum.photos/1/50",
        fotoPost: "https://picsum.photos/201/150"
      },

      {
        nomeUsuario: "Amanda",
        fotoUsuario: "https://picsum.photos/2/50",
        fotoPost: "https://picsum.photos/203/150"

      }  
    ],

    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  }

  adicionaPessoa =() => {
    const novaPessoa = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    }

    const novasPessoas = [...this.state.pessoas, novaPessoa]

    this.setState({pessoas: novasPessoas})
  }

  onChangeInputNomeUsuario = (event) => {
    this.setState({ valorInputNomeUsuario: event.target.value})
  }

  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value})
  }

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value})
  }

  render() {
    const listaDeComponentes = this.state.pessoas.map((pessoa) => {
      return (
        <p>
          {pessoa.nomeUsuario}
          {pessoa.fotoUsuario}
          {pessoa.fotoPost}
        </p>
      )
    })
    return (
    <div>
      <div>
        <TituloInsta>Insta4</TituloInsta>
        
        
        <MainContainer>
          <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

          <Post
          nomeUsuario={'joao'}
          fotoUsuario={'https://picsum.photos/1/50'}
          fotoPost={'https://picsum.photos/201/150'}
        />
          
          <Post
          nomeUsuario={'amanda'}
          fotoUsuario={'https://picsum.photos/2/50'}
          fotoPost={'https://picsum.photos/203/150'}
        /> 
         
         <div>{listaDeComponentes}</div>
        


          
          <input
            value={this.state.valorInputNomeUsuario}
            onChange={this.onChangeInputNomeUsuario}
            placeholder={"Nome do Usuário"}
          />
          
          <input
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"Foto do Usuário"}
          />
          <input
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Foto do Post"}
          />
          
          <button onClick={this.adicionaPessoa}>Adicionar</button>

          
        
        
        </MainContainer>
        </div>
      </div>
    )
  }

  
}


export default App;



