import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Container } from 'react-bootstrap'
import './css/login.css'

function Login() {

  let navigate = useNavigate();

  function login() {
    let email = document.querySelector('#formEmail');
    let password = document.querySelector('#formPassword');

    const loginInfo = {
      email: email.value,
      password: password.value
    }

    const OPTIONS = {
      method: "POST",
      headers: {
        "Content-type": "Application/JSON"
      },
      body: JSON.stringify(loginInfo)
    }

    fetch('/login', OPTIONS)
    .then(response => response.json())
    .then(resultUser => { 
      console.log(resultUser);  
      navigate('/dashboard');
    })
    .catch(err => {
      console.log(err);
      navigate('/');
    });
  }
  
  return (
    <div className='white-page d-flex align-items-center'>
      <Container fluid className='bg-light py-3 d-flex justify-content-center'>
            <Form>
              <Form.Label className='h3'>Owner Login</Form.Label>
              <Form.Group className='mb-3' controlId='formEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder='Enter Email'/>
              </Form.Group>
              <Form.Group className='mb-3' controlId='formPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder='Password'/>
              </Form.Group>
              <Button className='dark-violet-button' onClick={ login }>
                Submit
              </Button>
            </Form>
      </Container>
    </div>
  )
}

export default Login
