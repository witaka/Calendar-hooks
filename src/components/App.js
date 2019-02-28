import React from "react";
import EventsIndexPage from "./EventsIndexPage";
import UrlForm from "./UrlForm";
import { GlobalStateProvider } from "./GlobalState";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
  <GlobalStateProvider>
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={UrlForm} />
          <Route exact path="/calendar" component={EventsIndexPage} />
        </Switch>
      </div>
    </Router>
  </GlobalStateProvider>
);

export default App;
