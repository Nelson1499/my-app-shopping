import React from "react";
import Home from "../components/pages/Home";
import { Route, Switch } from "react-router-dom";
import Category from "../components/pages/Category";
import DetailsProducts from "../components/pages/DetailsProducts";
import Cart from "../components/pages/Cart";
import Contact from "../components/pages/Contact";
import AboutUs from "../components/pages/About-us";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/category" component={Category} />
      <Route
        exact
        path="/details/:id"
        component={DetailsProducts}
      />
      <Route
        exact
        path="/cart"
        component={Cart}
      />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/about-us" component={AboutUs} />
    </Switch>
  );
};

export default Routes;
