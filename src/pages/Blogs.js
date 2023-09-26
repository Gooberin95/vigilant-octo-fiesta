import React from 'react';
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function Home() {


		return (
			<>
			 <Container>
			      <Row x style={{border: 'solid'}}s={2} md={4} lg={6}>
			        <Col   style={{border: 'solid'}}>1 of 2</Col>
			        <Col   style={{border: 'solid'}}>2 of 2</Col>
			      </Row>
			      <Row x style={{border: 'solid'}}s={1} md={2}>
			        <Col  style={{border: 'solid'}}>1 of 3</Col>
			        <Col   style={{border: 'solid'}}>2 of 3</Col>
			        <Col  style={{border: 'solid'}}>3 of 3</Col>
			      </Row>
			      <Row  style={{border: 'solid'}}xs="auto">
			        <Col  style={{border: 'solid'}}>1 of 3</Col>
			        <Col  style={{border: 'solid'}}>2 of 3</Col>
			        <Col  style={{border: 'solid'}}>3 of 3</Col>
			      </Row>
			    </Container>
		       </>

		);
};

export default Home;
