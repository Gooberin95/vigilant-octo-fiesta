mport React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Outlet, Link } from "react-router-dom";
function Layout() {
	  return (
		  	  <>
		  	 <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
		  	  <Container>
		  	   <Navbar.Brand href="#home">Brandon Ruiz</Navbar.Brand>
		  	    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
		  	    <Navbar.Collapse id="basic-navbar-nav">
		  	    <Nav className="me-auto">
		  	     <Nav.Link > <Link to="/">Blog</Link> </Nav.Link>
		  	      <Nav.Link> <Link to="/blogs">Tech News</Link> </Nav.Link>
		  	     <Nav.Link> <Link to="/contact">Links</Link> </Nav.Link>


		  	  </Nav>
		  	  </Navbar.Collapse>
		  	  </Container>
		  	  </Navbar>

		  		<Outlet />
		  		</>
		  	)
};

export default Layout;
