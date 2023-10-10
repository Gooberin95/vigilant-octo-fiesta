import Button from 'react-bootstrap/Button';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const cardData = [
	{
		imgSrc: "https://th.bing.com/th/id/R.36476b18634994b2964ea9e3183d8e9a?rik=L3fnX9BvH%2ftl%2fA&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f05%2femblem-PlayStation.png&ehk=iCOYORQCMP1aKQpv3RJ%2fe%2bI7CSbEXGm1KM4cZ%2bfng1s%3d&risl=&pid=ImgRaw&r=0",
		title: 'Playstation Doorlock',
		description: ' Lock your door with a playstation controller!',
		learnLink: '  "https://youtu.be/XtMI7BTrE3Q?si=SxoaWT5R3UyxedfOttps://gray-mushroom-0a2e1261e.3.azurestaticapps.net'}
	,
	{	
		imgSrc:  'https://logodownload.org/wp-content/uploads/2018/02/raspberry-pi-logo-1.png',
		title: 'Raspberry Pi',
		description: 'No Monitor No Problem! SSH into your Raspberry pi!',
		learnLink: 'https://youtu.be/F863UqkyFY8?si=Qs0WhfCl8LJAOSfk' 
	},
			{	
		imgSrc:' https://th.bing.com/th/id/R.128d48e65866e7ce8bfde2ae7620b327?rik=3IJyqjn19vwmIQ&riu=http%3a%2f%2fchinwag.com%2ffiles%2fimages%2flogos%2fpimoroni_logo.png&ehk=PuebzIWutvBYLKf015%2fn6fJoO%2bjIVvwYRT%2bSGzzoSlQ%3d&risl=&pid=ImgRaw&r=0',
		title: 'BlinkT Manipulation',
		description: 'Controlling and led light strip',
		learnLink: 'https://github.com/Gooberin95/PS4_DOT/blob/main/dot_controller.py' 
	},
	{
		imgSrc: 'https://www.nicepng.com/png/detail/990-9907356_microsoft-excel-icon-microsoft-excel.png',
		title: 'Excel Addition',
		description: 'Excel Budgeting using addition formula!',
		learnLink: 'https://youtu.be/SAIMO6ikFuY?si=pf8tim-VJMoVW2xs'
	}  


]




function Blogs() {
	  return (
		      <Container>
		        <h1 className="text-center mt-4" >Projects!</h1>
		        <Row className="justify-content-center mt-4" md={4}>
		          {cardData.map((card, index) => (
		          <Col className="justify-content-center mt-4" md={4} key={index}>
		            <Card>
				  <Card.Img variant="top" src={card.imgSrc} />
				  <Card.Body>
				    <Card.Title>{card.title}</Card.Title>
				    <Card.Text>{card.description}</Card.Text>
				    <Button href={card.learnLink}>Learn</Button>
				  </Card.Body>

		            </Card>
		          </Col>
			  ))}

		        </Row>
		      </Container>
		    );
}

export default Blogs;
