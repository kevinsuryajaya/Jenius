import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/home";
import ContactDetail from "./pages/contact-detail";
import NavBar from "./components/navbar";
import AddContact from "./pages/add-contact";

const StyledBody = styled.div`
  margin-top: 40px;
`;
function App() {
  return (
    <Router>
      <React.Fragment>
        <NavBar />
        <Switch>
          <StyledBody>
            <Route exact path="/" component={Home} />
            <Route path={`/contact-detail/:id`} component={ContactDetail} />
            <Route path={`/add-contact`} component={AddContact} />
          </StyledBody>
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
