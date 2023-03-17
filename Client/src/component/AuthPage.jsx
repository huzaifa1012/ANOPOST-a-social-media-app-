import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import { userData } from '../store/slices/userSlice';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { auth } from "../store/slices/userSlice"

export const Signup = () => {
    // let dispatch = useDispatch()
    const [myuserData, setUserData] = useState("");
    const [registerName, setRegisterName] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const isV = (event) => {
        event.preventDefault()
        dispatch(userData(
            { myuserData }
        ))
    }
    const navigate = useNavigate()
    const register = async (event) => {
        event.preventDefault()
        try {
            let registerUser = await axios.post("http://localhost:3000/register", {
                name: registerName,
                email: registerEmail,
                password: registerPassword
            })
            setUserData(registerUser)
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
            <button onClick={isV}>Register</button>
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

            <Button variant="primary" type="submit" onClick={register}>
                Register
            </Button>
            <Link to='/'>
                Already Registered
            </Link>
        </Form>

    )
}
export const Signin = () => {
    const navigate = useNavigate()
    const [signinEmail, setSigninEmail] = useState("");
    const [signinPassword, setSigninPassword] = useState("");
    const Signin = async (event) => {
        event.preventDefault()
        try {
            let signinUser = await axios.post("http://localhost:3000/signin", {
                email: signinEmail,
                password: signinPassword
            })
            console.log("Signed in Successfull ", signinUser.data.data._id);
            let UniqueId = await signinUser.data.data._id + "abrakatabra"
            if (true) {
                localStorage.removeItem('Id');
                localStorage.removeItem('name');
                localStorage.setItem("Id", UniqueId)
                localStorage.setItem("name", signinUser.data.data.name)
            }
            navigate('/anopost')

        } catch (error) {
            alert(error.response.data.message)
            console.log("Failed To Signin", error.response.data.message);
        }
    }
    return (

        <Form style={{ width: '300px', margin: '0px auto' }}>
            <h2>Signin</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control onChange={(event) => { setSigninEmail(event.target.value) }} type="email" name="name" placeholder="Email" autoComplete='email' />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control onChange={(event) => { setSigninPassword(event.target.value) }} type="password" placeholder="Password"
                    autoComplete='current-password'
                    name='current-password' />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={Signin}>
                Signin
            </Button>
            <Link to='/signup'>
                Register
            </Link>
        </Form>

    )
}


// export {Signin}
export default { Signup, Signin };