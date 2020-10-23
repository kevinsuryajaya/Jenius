import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "reactstrap";
import styled from "styled-components";
import Home from "./pages/home";
import ContactDetail from "./pages/contact-detail";
import NavBar from "./components/navbar";

const StyledContainer = styled(Container)`
  margin-top: 50px;
`;
function App() {
  return (
    <Router>
      <React.Fragment>
        <NavBar />
        <Switch>
          <StyledContainer>
            <Route exact path="/" component={Home} />
            <Route path={`/contact-detail/:id`} component={ContactDetail} />
          </StyledContainer>
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
