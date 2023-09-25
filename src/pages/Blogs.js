import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function Home() {


		return (
			<> <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
			<Card className="text-center" bg="info" text="light" style={{ width: '18rem'}}>
			 <Card.Header>Brandon Ruiz</Card.Header>
			 <Card.Body>
			   <Card.Title>Cloud and Code</Card.Title>
			   <Card.Text>
			    Welcome to my site, hosted on Azure!
			  </Card.Text>
			  <Button variant="primary">Click here!</Button>
			 </Card.Body>
			<Card.Footer className="text-muted">2 days ago</Card.Footer>
		       </Card>
		   </div>


			                   

		       </>

				)
};

export default Home;
