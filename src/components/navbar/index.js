import * as React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import logo from '../../img/logo.png';
import '../../css/navbar/index.css';

export default function NavBar() {
     const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <React.Fragment>
     <Navbar color="white" light expand="md" className="nav--fixed">
        <NavbarBrand href="/"><img src={logo} className='image--resize' alt="logo"/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Personal</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Bisnis</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/add-contact">Add Contact</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Get Jenius</NavbarText>
        </Collapse>
      </Navbar>
    </React.Fragment>
  );
}
