import React from 'react';
import { Switch, Route } from 'react-router';
import './App.css';
import Homepage from "./pages/Homepage/Homepage"
import Hats from "./pages/Hats/Hats";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/hats" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
