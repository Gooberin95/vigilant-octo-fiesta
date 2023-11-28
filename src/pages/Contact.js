import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import {DiGithubBadge} from 'react-icons/di'
import {BsYoutube} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';

function Contact() {
	return (
		<>
		 <Stack gap={5} className="col-md-5 mx-auto">
		  <div></div>
		  <Button href="https://www.linkedin.com/in/brandon-ruiz1/" variant="dark" size="lg"><BsLinkedin/> LinkedIn</Button>
		  <Button href="https://github.com/Gooberin95" variant="dark" size="lg"><DiGithubBadge/> Github</Button>
		  <Button href="https://www.youtube.com/channel/UC5y5JHcpvCzgcy04QcvLLBg" variant="dark" size="lg"><BsYoutube/> Youtube</Button>
		</Stack>
		</>
	);
}

export default Contact;

