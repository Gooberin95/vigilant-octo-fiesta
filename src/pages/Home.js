import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function Home() {
	const [ quoteData, setQuote] = useState({content: '', author: ''})
	
	const getQuote = () => {
		axios.get('https://api.quotable.io/random')
		.then(res => {
			const { content, author} = res.data;
			setQuote({ content, author});

		}).catch(err => {
			console.log(err)
		})
	}


		return ( 
		<> <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '100vh' }}>
			
			<Card className="text-center" bg="dark" text="light" style={{ width: '48rem'}}>
			<Card.Img  style={{alignSelf: 'center',width: '250px', height: '250px'}}variant="top" src="https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur.gif" />
			 <Card.Body>
			   <Card.Title style={{textDecoration: 'underline'}}>{quoteData.author}</Card.Title>
			   <Card.Text>
			{ quoteData && <p> {quoteData.content}</p>}
			  </Card.Text>
			  <Button onClick={getQuote} variant="primary">Click here for a random quote from the Quotable API!</Button>
			 </Card.Body>
			<Card.Footer className="text-muted"></Card.Footer>
		       </Card>
		   </div>
		);
		</>

				)
};

export default Home;
