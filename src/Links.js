import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
function Links() {
	return (
		<>
		<Stack  gap={4} className="col-md-5 mx-auto">
		<div></div>
		<Button variant="light">Donate</Button>
		<Button variant="light">LinkedIn</Button>
		<Button variant="light">Youtube</Button>
		</Stack>
		</>
	);
}
export default Links;

