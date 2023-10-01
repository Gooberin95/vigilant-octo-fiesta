import Button from 'react-bootstrap/Button';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Blogs() {
	  return (
		      <Container>
		        <h1 className="text-center mt-4">Projects!</h1>
		        <Row className="justify-content-center mt-4">
		          <Col md={4}>
		            <Card>
		              <Card.Img variant="top" src="https://th.bing.com/th/id/R.36476b18634994b2964ea9e3183d8e9a?rik=L3fnX9BvH%2ftl%2fA&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f05%2femblem-PlayStation.png&ehk=iCOYORQCMP1aKQpv3RJ%2fe%2bI7CSbEXGm1KM4cZ%2bfng1s%3d&risl=&pid=ImgRaw&r=0" />
		              <Card.Body>
		                <Card.Title>Playstation Doorlock</Card.Title>
		                <Card.Text>
		                  Lock your door with a playstation controller!
		                </Card.Text>
		              <Button href=  "https://youtu.be/XtMI7BTrE3Q?si=SxoaWT5R3UyxedfOttps://gray-mushroom-0a2e1261e.3.azurestaticapps.net">Learn</Button>

		              </Card.Body>
		            </Card>
		          </Col>
		          <Col md={4}>
		            <Card>
		              <Card.Img variant="top" src="https://logodownload.org/wp-content/uploads/2018/02/raspberry-pi-logo-1.png" />
		              <Card.Body>
		                <Card.Title>Raspberry Pi </Card.Title>
		                <Card.Text>
		                  No monitor no problem! SSH into your Raspberry pi!
		                </Card.Text>
		                <Button href="https://youtu.be/F863UqkyFY8?si=Qs0WhfCl8LJAOSfk">Learn</Button>

		              </Card.Body>
		            </Card>
		          </Col>
		          <Col md={4}>
		            <Card>
		              <Card.Img variant="top" src="https://th.bing.com/th/id/R.128d48e65866e7ce8bfde2ae7620b327?rik=3IJyqjn19vwmIQ&riu=http%3a%2f%2fchinwag.com%2ffiles%2fimages%2flogos%2fpimoroni_logo.png&ehk=PuebzIWutvBYLKf015%2fn6fJoO%2bjIVvwYRT%2bSGzzoSlQ%3d&risl=&pid=ImgRaw&r=0" />
		              <Card.Body>
		                <Card.Title>Blinkt Manipulaiton</Card.Title>
		                <Card.Text>
		                  This is the third card. You can add more cards as required.
		                </Card.Text>
		              <Button href="https://github.com/Gooberin95/PS4_DOT/blob/main/dot_controller.py">Learn</Button>

		              </Card.Body>
		            </Card>
		          </Col>
		        </Row>
		      </Container>
		    );
}

export default Blogs;
