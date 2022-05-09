import React, { useState, useHistory } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/url";

import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleUpdateEmail = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  };
  const handleUpdatePassord = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  const handleLogin = async () => {
    const body = {
      email: email,
      password: password,
    };

    try {
      const res = await axios.post(`${BASE_URL}/login`, body);

      localStorage.setItem("token", res.data.token);

      history.push("/feed");
    } catch (err) {
      alert("Erro ao logar, tente novamente");
      console.error(err);
    }
  };

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <div>
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Entrar
          </Typography>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={handleUpdateEmail}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={handleUpdatePassord}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleLogin}
          >
            Entrar
          </Button>
          <Grid container>
            <Grid item>
              <Link variant="body2">{"Não tem conta? Cadastre-se"}</Link>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
