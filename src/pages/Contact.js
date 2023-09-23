import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import {DiGithubBadge} from 'react-icons/di'
import {BsYoutube} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';

function Contact() {
	return (
		<>
		 <Stack gap={4} className="col-md-5 mx-auto">
		  <div></div>
		  <Button variant="light" size="lg"><BsLinkedin/> LinkedIn</Button>
		  <Button variant="light" size="lg"><DiGithubBadge/> Github</Button>
		  <Button variant="light" size="lg"><BsYoutube/> Youtube</Button>
		</Stack>
		</>
	);
}

export default Contact;

