// Import Them
{/* <MainNavbar />
      <Hero /> */}


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios"
import { useEffect, useState } from 'react';


function Content() {
    const [post, setPost] = useState([]);
    const FetchPosts = async () => {
        let response = await axios.get("http://localhost:3000/getPost");
        try {
            console.log(response.data);
            setPost(response.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        FetchPosts()
    }, []);
    return (
        <>
            {
                post.map((item) => (
                    <div className="carwrap" key={item._id} style={{ margin: '10px 0px' }}>

                        <div className="card  ml-60" style={{ padding: '10px' }}>
                            <h5>{item.name}</h5>

                            <p>{item.post}</p>
                        </div>
                    </div>
                ))
            }
        </>
    );
}

function Post() {
    const [postVal, setPostVal] = useState('');


    const postData = async () => {
        console.log(postVal)
        let post = await axios.post('http://localhost:3000/post', {
            name: prompt("Your name"),
            post: postVal
        })
    }
    return (
        <>
            <FloatingLabel controlId="floatingTextarea2" label="What's in your mind">
                <Form.Control
                    as="textarea"
                    onChange={(value) => { setPostVal(value.target.value) }}
                    placeholder="Leave a comment here"
                    style={{ height: '100px', margin: '10px 0px' }}
                />
            </FloatingLabel>
            <Button variant="primary" onClick={() => { postData() }}>Post now</Button>{' '}
        </>
    );
}


function Hero() {
    return (
        <Container>
            <Row>
                {/* Left Start */}
                <Col className='main-left'><h2>L</h2></Col>
                {/* Center Start */}
                <Col xs={6}>
                    <h2>Post Something</h2>
                    <Post />
                    <Content />
                </Col>
                {/* Right Start */}
                <Col className='main-right'><h2> R </h2></Col>
            </Row>
        </Container>
    );
}

export { Hero, Post, Content };

