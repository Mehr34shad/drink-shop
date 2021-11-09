import React, { Fragment, useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Drink from "../components/Cards";
import Carts from "../pages/Carts";
import Favorite from "./../pages/Favorite";
import NotFound from "./../pages/NotFound";
import contextApi from "../context/contextApi.js";

const App = () => {
  const context = useContext(contextApi);
  return (
    <Fragment>
      <Switch>
        <Route
          path="/"
          render={() => <Drink type={context.AllBeers} />}
          exact
        />
        <Route
          path="/pizza"
          render={() => <Drink type={context.BeerPairPizza} />}
          exact
        />
        <Route
          path="/steak"
          render={() => <Drink type={context.BeerPairSteak} />}
          exact
        />
        <Route path="/buy" component={Carts} exact />
        <Route path="/favorite" component={Favorite} exact />
        <Route path="/not-found" exact component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </Fragment>
  );
};

export default App;
