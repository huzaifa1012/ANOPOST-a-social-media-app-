import axios from 'axios';
import React, { useState } from 'react'


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
    const navigate = useNavigate()
    const [registerName, setRegisterName] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const Register = async (event) => {
        event.preventDefault()
        try {
            let registerUser = await axios.post("http://localhost:3000/register", {
                name: registerName,
                email: registerEmail,
                password: registerPassword
            })
            console.log("Registered Successfull ");
            navigate('/anopost')

        } catch (error) {
            alert(error.response.data.message)
            console.log("Failed To Register", error.response.data.message);
        }
    }
    return (

        <Form style={{ width: '300px', margin: '0px auto' }}>
            <h2>Register</h2>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control onChange={(event) => { setRegisterName(event.target.value) }} type="name" placeholder="Name" autoComplete='name' />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control onChange={(event) => { setRegisterEmail(event.target.value) }} type="email" name="name" placeholder="Email" autoComplete='email' />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control onChange={(event) => { setRegisterPassword(event.target.value) }} type="password" placeholder="Password"
                    autoComplete='current-password'
                    name='current-password' />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={Register}>
                Register
            </Button>
            <Link to='/post'>
                <button>
                    GO
                </button>
            </Link>
        </Form>

    )
}


export default AuthPage