import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import PostList from "../pages/PostList/PostList";
import PostPage from "../pages/PostPage/PostPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Router = ({ setRightButtonText }) => {
  return (
    <Switch>
      <Route exact path={"/login"}>
        <LoginPage setRightButtonText={setRightButtonText} />
      </Route>

      <Route exact path={"/cadastro"}>
        <SignUpPage setRightButtonText={setRightButtonText} />
      </Route>

      <Route exact path={"/"}>
        <PostList />
      </Route>

      <Route exact path={"/pagina-do-post"}>
        <PostPage />
      </Route>

      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  );
};

export default Router;
