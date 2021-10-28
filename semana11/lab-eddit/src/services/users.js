import axios from "axios";
import { BASE_URL } from "../constants/url";
import { goToPostList } from "../routes/coordinator";

export const login = (body, clear, history, setRightButtonText) => {
  axios
    .post(`${BASE_URL}/users/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      goToPostList(history);
      setRightButtonText("Logout");
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};

export const signUp = (body, clear, history, setRightButtonText) => {
  axios
    .post(`${BASE_URL}/users/signup`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      goToPostList(history);
      setRightButtonText("Logout");
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};
