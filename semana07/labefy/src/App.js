import React from "react";
import axios from "axios";
import styled from "styled-components";

const CardPlaylist = styled.div `
    border: 1px solid black;
    margin-top: 15px;
    height: 25px;
    width: 400px;
    padding: 5px;
    display: flex;
    justify-content: space-between;`

    

const headers = {
  headers: {
    Authorization: "carlos-daniel-maryam"
  }
}

export default class App extends React.Component {
  state = {
    playlists: [],
    playlistName: "",
    trackName: "",
    songName: "",
    artistName: "",
    urlPlaylist: ""
  }

  componentDidMount() {
    this.getAllPlaylists()
  }

  handlePlaylistName = (e) => {
    this.setState({ playlistName: e.target.value })
  }

  createPlaylists = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

    const body = {
      name: this.state.playlistName
    }

    axios
      .post(url, body, headers)
      .then((res) => {
        this.setState({ playlistName: "" })
        this.getAllPlaylists();
      })
      .catch((err) => {
        alert(err.response.data.message)
      })
  }

  getAllPlaylists = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    axios
      .get(url, headers)
      .then((res) => {
        this.setState({ playlists: res.data.result.list })
      })
      .catch((err) => {
        alert(err.response)
      })
  }

  deletarPlaylist = (id) => {
    const url =
      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
    axios.delete(url, {
      headers: {
        Authorization: "carlos-daniel-maryam"
      }
    })
    .then((res) => {
      alert("Playlist deletada com sucesso!")
      this.getAllPlaylists()
    })
    .catch((err) => {
      alert("Ocorreu um erro, tente novamente!")
    })
  }

  getPlaylistTracks = (id) => {
    const url =
      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
    axios
    .get(url,headers)
    .then((res)=> {
      this.setState({trackName: res.data.result.list})
          })
          
    .catch((err)=> {
      alert("Ocorreu um erro, tente novamente!")
    })
  }

  addTrackToPlaylist = (id) => {
    const url =
      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`

    const body = {
      name: "aaa",
      artist: "aaa",
      url: "aaa"

    }
    console.log(body,id)
    
    
    axios
    .post(url,body,headers)
    .then((res) => {
      this.setState({ songName: "", artistName: "", urlPlaylist: "" })
      console.log(res.data)
    })
    .catch((err)=> {
      console.log(err.response)
    })
  }


  render() {

    const playlistDetailsComponents = this.state.playlists.map((musica) => {
      return (
        <div>
          <h3>Listagem de músicas</h3>
          <p key={musica.id}>{musica.name} - {musica.artist}</p>
        </div>
      )
    })

    const playlistComponents = this.state.playlists.map((play) => {
      return <CardPlaylist>
                  <li key={play.id}>
                    {play.name}</li>
                    <button onClick={() => this.deletarPlaylist(play.id)}>Apagar</button>
                    <button onClick={() => this.getPlaylistTracks(play.id)}>Listagem</button>
              </CardPlaylist>
    })
    

    return (
      <div>
        <h1>Labefy</h1>
        <input
          placeholder="Nome playlist"
          value={this.state.playlistName}
          onChange={this.handlePlaylistName}
        />
        <button onClick={this.createPlaylists}>Enviar</button>
      
        {playlistComponents}
        {playlistDetailsComponents}
      
      </div>
    )
  }
}