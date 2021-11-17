import React from "react";
import axios from "axios";

const headers = {
    headers: {
    Authorization: "carlos-daniel-maryam"
    }
}

export default class App extends React.Component {
    state = {
        userList: []
    }

    getAllUsers = () => {
        const url = 
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios
        .get(url, headers)
        .then((res) => {
            this.setState({ userList: res.data})
        })
        .catch((err)=>{
            alert(err.response)
        })  
    }

    componentDidMount() {
        this.getAllUsers()
    }

    render() {
        const listaUsuarios = this.state.userList.map((user)=> {
            return <li key={user.id}>{user.name}</li>
        })
    
            return(
                <div>
            <h1>Lista de Usuários</h1>
            {listaUsuarios}
                </div>
            )}
}