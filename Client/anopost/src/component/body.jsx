import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Post() {
    return (
        <>

            <FloatingLabel controlId="floatingTextarea2" label="What's in your mind">
                <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '100px', margin: '10px 0px' }}
                />
            </FloatingLabel>
            <Button variant="primary">Post now</Button>{' '}
        </>
    );
}


function Hero() {
    return (
        <Container>
            <Row>
                {/* Left Start */}
                <Col><h2>Hello it's Left</h2></Col>
                {/* Center Start */}
                <Col xs={6}>
                    <h2>Post Something</h2>
                    <Post />
                </Col>
                {/* Right Start */}
                <Col><h2> Hello it's Right </h2></Col>
            </Row>
        </Container>
    );
}

export { Hero, Post };