import React from "react";
import Main from "./pages/Main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
