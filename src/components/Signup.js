import React, {useRef, useState} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import {Link, useNavigate} from 'react-router-dom'

export default function Signup() {


  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()


  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }
    try {
      setError('')
      await signup(emailRef.current.value, passwordRef.current.value)
      navigate("/home")
    } 
    catch {
      setError("Failed to create an account")
    }
    setLoading(true)

    
  }


  return (
    <Card id="login">
      <Card.Header id="login_caption">
        <div id="caption">
          <h1>Sign Up!</h1><br/>
          <p>Get access to abundance of movies and series</p><br></br>
          <p>Allready signed up? <Link to="/Login">Log in</Link></p>
        </div>
      </Card.Header>
      <Card.Body id="login_form">
      
        <Form onSubmit={handleSubmit}>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form.Control type="email" className="text_input" placeholder="email" ref={emailRef} required/>
          <Form.Control type="password" className="text_input" placeholder="password" ref={passwordRef} required/>
          <Form.Control type="password" className="text_input" placeholder="repeat password"ref={passwordConfirmRef} required/>
          <Button disabled={loading} type="submit" id="login_button" className="button">Sign Up</Button>
        </Form>
      </Card.Body>
    </Card>
  )
}
