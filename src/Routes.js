import React from "react";
import Main from "./pages/Main";
import Playlist from "./pages/ListedPlayer";
import pr from "./pages/pr";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, {ThemeProvider} from 'styled-components';
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";


class Routes extends React.Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/playlist" component={Playlist} />
          <Route exact path="/pr" component={pr} />
        </Switch>
        </ThemeProvider>
      </Router>
    );
  }
}

export default Routes;
