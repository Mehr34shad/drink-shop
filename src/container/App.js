import React, { Fragment } from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';
import Drink from '../components/Cards';
import Carts from '../pages/Carts';
import Favorite from './../pages/Favorite';
import NotFound from './../pages/NotFound';


const App = () => {

    return (
        <Fragment>
            <Switch>
                <Route path="/" component={Drink} exact />
                <Route path="/buy" component={Carts} exact />
                <Route path="/favorite" component={Favorite} exact />
                <Route path="/not-found" exact component={NotFound} />
                <Redirect to="/not-found" />
            </Switch>
        </Fragment>
    );
};

export default App;
