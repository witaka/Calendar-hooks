import React from "react";
import EventsIndexPage from "./EventsIndexPage";
import { GlobalStateProvider, useGlobalState } from "./GlobalState";

const App = () => (
  <GlobalStateProvider>
    <EventsIndexPage />
  </GlobalStateProvider>
);

export default App;
