import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import NavBar from './components/navbar'

function App() {
  return (
    <Router>
      <React.Fragment>
        <NavBar/>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
