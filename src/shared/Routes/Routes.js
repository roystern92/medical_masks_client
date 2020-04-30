import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NewOrder from '../../containers/NewOrder/NewOrder';


const NEWORDER_ROUTE = '/new-order';


class Routes extends Component {
  componentDidMount() {
    // console.log("[Routes]componentDidMount");
  }

  render() {
    // console.log("[Routes] render");
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
