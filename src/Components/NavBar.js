import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle } from 'reactstrap';
import { Link } from 'react-router-dom';
import './nav.css'
  const Brand = {
    fontSize:'24px',
    marginLeft:'35px',
    color:'#fff',
    paddingBottom:'50px',
    marginBottom:'-7px',
    height:'40px',
    paddingLeft:'1px',
    paddingTop: '20px',
    marginTop: '-8px'
  };

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
     

<Navbar id="nav" className="navbar navbar-default navbar-fixed-top be-top-header" light expand="xs">
<NavbarBrand style={Brand} className="brand" href="/">Appiness Interactive</NavbarBrand>
        
        <Nav className="nav navbar-nav" navbar>
          <NavLink></NavLink>
          <NavItem className="navLink">
          </NavItem>
              </Nav>
            <Nav className="ml-auto" navbar style={{color:'blue'}}>

              <button style={{backgroundColor:"#000"}}><a tag={Link} style={{color:"#fff",marginLeft:'7px'}} href="/">Logout</a> </button>
          </Nav>
        </Navbar>
      </div>
    );
  
  }
}
;