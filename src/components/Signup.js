import React, {useRef} from 'react'
import {Form, Button, Card} from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'

export default function Signup() {


  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  return (
    <Card id="login">
      <Card.Header id="login_caption">
        <div id="caption">
          <h1>Sign Up!</h1><br/>
          <p>Get access to abundance of movies and series</p>
        </div>
      </Card.Header>
      <Card.Body id="login_form">
        <Form>
          <Form.Control type="email" className="text_input" placeholder="email" ref={emailRef} required/>
          <Form.Control type="password" className="text_input" placeholder="password" ref={passwordRef} required/>
          <Form.Control type="password" className="text_input" placeholder="repeat password"ref={passwordConfirmRef} required/>
          <Button type="submit" id="login_button" className="button">Sign Up</Button>
        </Form>
      </Card.Body>
    </Card>
  )
}
