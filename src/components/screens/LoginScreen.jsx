import React, {useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import Header from './Header'

function LoginScreen() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  }
  
  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  }
  
  const handleSubmit = () => {
    console.log(email.value);
    console.log(password.value);
    alert(`Un formulaire a été envoyé avec un Email :${email.value} et un mot de passe : ${password.value} `);
  }

  return (
    <>
      <Header />
      <h1>LoginScreen</h1>

      <Form onSubmit={(e) =>{handleSubmit()}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email.value} required onChange={(e)=>handleEmailChange()} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password.value} required onChange={(e)=>handlePasswordChange()}/>
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>

    </>)
}

export default LoginScreen