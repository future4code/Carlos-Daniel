import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { ListTripsPage } from "./Pages/ListTripsPage";
import { ApplicationFormPage } from "./Pages/ApplicationFormPage";
import { LoginPage } from "./Pages/LoginPage";
import { AdminHomePage } from "./Pages/AdminHomePage";
import { CreateTripPage } from "./Pages/CreateTripPage";
import { TripDetailsPage } from "./Pages/TripDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>

        <Route exact path={"/trips/list"}>
          <ListTripsPage />
        </Route>

        <Route exact path={"/trips/application"}>
          <ApplicationFormPage />
        </Route>

        <Route exact path={"/login"}>
          <LoginPage />
        </Route>

        <Route exact path={"/admin"}>
          <AdminHomePage />
        </Route>

        <Route exact path={"/admin/trips/create"}>
          <CreateTripPage />
        </Route>

        <Route exact path={"/admin/trips/:id"}>
          <TripDetailsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
