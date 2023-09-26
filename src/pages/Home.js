import React from 'react';
import axios from 'axios';
import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function Home() {
	const [ quote, setQuote] = useState('')
	
	const getQuote = () => {
		axios.get('https://api.quotable.io/random')
		.then(res => {
			console.log(res)
			setQuote(res.data.content)
		}).catch(err => {
			console.log(err)
		})
	}


		return ( 
		<> <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
			<Card className="text-center" bg="dark" text="light" style={{ width: '48rem'}}>
			 <Card.Header>Brandon Ruiz</Card.Header>
			 <Card.Body>
			   <Card.Title>Cloud and Code</Card.Title>
			   <Card.Text>
			    Welcome to my site, hosted on Azure!
			{ quote && <p> {quote}</p>}
			  </Card.Text>
			  <Button onClick={getQuote} variant="primary">Click here for a quote!</Button>
			 </Card.Body>
			<Card.Footer className="text-muted">2 days ago</Card.Footer>
		       </Card>
		   </div>
		);
		</>

				)
};

export default Home;
