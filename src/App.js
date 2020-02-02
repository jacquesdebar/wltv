import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from "./pages/Home";

import { Layout } from "./components";

// import "./css/App.css";

const HomePage = () => (
  // <Layout>
    <Home />
  // </Layout>
);


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
