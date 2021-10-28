import axios from "axios";
import { BASE_URL } from "../constants/url";
import { goToPostList } from "../routes/coordinator";

export const login = (body, clear, history) => {
  axios
    .post(`${BASE_URL}/users/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      goToPostList(history);
    })
    .catch((err) => {
      alert("Erro no login!");
    });
};

export const signUp = (body, clear, history) => {
  axios
    .post(`${BASE_URL}/users/signup`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      goToPostList(history);
    })
    .catch((err) => {
      alert("Erro no Cadastro!");
    });
};
