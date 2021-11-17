import React from "react";
import axios from "axios";
import ListaUsuarios from "./ListaUsuarios"

const headers = {
    headers: {
    Authorization: "carlos-daniel-maryam"
  }
};

export default class App extends React.Component {
  state = {
    users: [],
    email: "",
    
  };

  handleUsername = (e) => {
    this.setState({ users: e.target.value });
  };

  handleUserEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  createUser = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    const body = {
      name: this.state.users,
      email: this.state.email
    };

    axios
      .post(url, body, headers)
      .then((res) => {
        this.setState({ users: "", email: "" });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  deleteUser = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id"
    
    const body = {
      name: this.state.users,
      email: this.state.email
    }
  }


  render() {
    
    return (
      <div>
        <h1>Labenusers</h1>
        <input
          placeholder="Digite seu nome"
          value={this.state.users}
          onChange={this.handleUsername}
        />
        <br/>
        <input
          placeholder="Digite seu email"
          value={this.state.email}
          onChange={this.handleUserEmail}
        />
        <br/>
        <button onClick={this.createUser}>Enviar</button>
        <p>
          <ListaUsuarios />
        </p>
      </div>
    );
  }
}


