import React, {useRef, useState} from 'react'

import {Form, Button, Card, Alert} from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import {Link, useNavigate} from 'react-router-dom'

export const Login = () => {

  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()


  async function handleSubmit(e) {
    e.preventDefault()

    
    try {
      setError('')
      await login(emailRef.current.value, passwordRef.current.value)
      navigate("/home")

    } catch {
      setError("Failed to sign in")
    }
    setLoading(true)

    
  }


  return (
    <Card id="login">
      <Card.Header id="login_caption">
        <div id="caption">
          <h1>Log In!</h1><br/>
          <p>Need an account? <Link to="/">Sign up</Link></p>
        </div>
      </Card.Header>
      <Card.Body id="login_form">
      
        <Form onSubmit={handleSubmit}>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form.Control type="email" className="text_input" placeholder="email" ref={emailRef} required/>
          <Form.Control type="password" className="text_input" placeholder="password" ref={passwordRef} required/>
          
          <Button disabled={loading} type="submit" id="login_button" className="button">Log In</Button>
        </Form>
      </Card.Body>
    </Card>
  )
}
