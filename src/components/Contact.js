import { Container, Col} from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contact = () => {
  return (
    <Container>
    <Col>
    <Form id="contact" className="text-center text-white">
      <Form.Group className="mb-3 input" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="textbox" placeholder="Enter your name..." />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 input" controlId="formBasicPassword">
        <Form.Label>Comment</Form.Label>
        <Form.Control as="textarea" placeholder="Give your comment..." />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Col>
    </Container>
  );
}
export default Contact;