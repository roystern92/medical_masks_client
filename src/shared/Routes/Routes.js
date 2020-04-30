import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NewOrder from '../../containers/NewOrder/NewOrder';


const NEWORDER_ROUTE = '/covid-19/disposable-facemask';


class Routes extends Component {
  componentDidMount() {
  }

  render() {
    let routes;
      routes = (
        <Switch>
          <Route path={NEWORDER_ROUTE} exact component={NewOrder} />
          <Redirect to={NEWORDER_ROUTE} />
        </Switch>
      );
    return routes;
  }
}

export default Routes;
