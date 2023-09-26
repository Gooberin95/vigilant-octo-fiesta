import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function Home() {


		return (
			<>
			
					      <Row xs={1} md={2} className="g-4">
					        {Array.from({ length: 12 }).map((_, idx) => (
							        <Col key={idx}>
							          <Card>
							            <Card.Body>
							              <Card.Title>Card title</Card.Title>
							              <Card.Text>
							                This is a longer card with supporting text below as a natural
							                lead-in to additional content. This content is a little bit
							                longer.
							              </Card.Text>
							             <Button variant="primary">Open</Button>
							            </Card.Body>
							          </Card>
							        </Col>
							      ))}
					      </Row>

			 


			                   

		       </>

 );
};

export default Home;
