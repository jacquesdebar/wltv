import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Music from "./pages/Music";
import Teach from "./pages/Teach";
import Work from "./pages/Work";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/music" component={Music} />
          <Route exact path="/teach" component={Teach} />
          <Route exact path="/work" component={Work} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
