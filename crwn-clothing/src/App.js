import React from 'react';
import { Switch, Route } from 'react-router';
import './App.css';
import Homepage from "./pages/Homepage/Homepage"

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
