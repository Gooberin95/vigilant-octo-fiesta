import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Outlet, Link } from "react-router-dom";
function Layout() {
	  return (
		  	  <>
		  	 <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
		  	  <Container>
		  	   <Navbar.Brand >Brandon Ruiz</Navbar.Brand>
		  	    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
		  	    <Navbar.Collapse id="basic-navbar-nav">
		  	    <Nav className="me-auto">
		  	     <Nav.Link > <Link to="/">Home</Link> </Nav.Link>
		  	      <Nav.Link> <Link to="/blogs">Projects</Link> </Nav.Link>
		  	     <Nav.Link> <Link to="/links">Links</Link> </Nav.Link>


		  	  </Nav>
		  	  </Navbar.Collapse>
		  	  </Container>
		  	  </Navbar>

		  		<Outlet />
		  		</>
		  	)
};

export default Layout;
