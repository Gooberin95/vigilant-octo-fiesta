import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function Home() {


		return ( 
		<> <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
			<Card className="text-center" bg="dark" text="light" style={{ width: '48rem'}}>
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
		);
		</>

				)
};

export default Home;
