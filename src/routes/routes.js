import Home from "../components/pages/Home";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Category from "../components/pages/Category";
import DetailsProducts from "../components/pages/DetailsProducts";

const Routes = (props) => {
  // Rutas necesarias para la navegacion de la app store!!
  const {add, setaddProducts} = props;
  return (
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/category" render={() => <Category />} />
      <Route exact path="/details/:id" render={() => <DetailsProducts add={add} setAdd={setaddProducts} />} />

    </Switch>
  );
};

export default Routes;
