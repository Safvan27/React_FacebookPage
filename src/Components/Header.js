import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 import {Navbar,Nav,Form,Button} from 'react-bootstrap';
 import "./Listing.css";
 import Facebook from './Facebook';

 class Header extends Component{
    render(){
        return(
            <>
  
  <Navbar bg="light" variant="light">
    <Navbar.Brand  className="sidehead" href="#home">GROWTH PLUG</Navbar.Brand>
    <Nav className="mr-auto">
      </Nav>
    
  </Navbar>
</>
        )
    }
}
export default Header;