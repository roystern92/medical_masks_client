import React, { Component, Fragment } from "react";
import classes from "./Layout.module.css";

class Layout extends Component {
  state = {
    sideDrawer: false
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Fragment>
        <main>
          <div className={classes.Content}>
              {this.props.children}
            </div>
        </main>
      </Fragment>
    );
  }
}

export default Layout;
