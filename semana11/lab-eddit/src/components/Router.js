import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./LoginPage";

const Router = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/login"}>
          <LoginPage />
        </Route>
        <Route exact path={"/signup"}>
          <p>Sign Up</p>
        </Route>
        <Route exact path={"/feed"}>
          <p>Feed</p>
        </Route>
        <Route exact path={"/post/:postId"}>
          <p>Post Id</p>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
