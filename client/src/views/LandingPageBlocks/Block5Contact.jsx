/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react'
import axios from "axios"
import { useHistory } from 'react-router-dom'
import Alert from '@mui/material/Alert';
// Reactstrap components
import {
  Button,
  Form,
  Input,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from 'reactstrap';

export default () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();
  // const [errArray, setErrArray] = useState([]);
  const [errors, setErrors] = useState({});
  const submitHandler = (e) => {
    e.preventDefault()
    axios.post(process.env.REACT_APP_JAVA_API + 'contact/us', {
      "name": name,
      "email": email,
      "message": message
    })
      .then(res => {
        console.log(res)
        if (res.status == 206) {
          let tempError = {}
          for (let i = 0; i < res.data.length; i++) {
            tempError[res.data[i].field] = res.data[i].defaultMessage
          }
          setErrors(tempError);
          return;
        }
        history.push('/success')
      })
      .catch(err => console.log(err));
  }

  return (
    <>
      <div className='section landing-section'>
        <Container>
          <Row className='mx-auto'>
            <Col className='mx-auto' md='8'>
              <h2 className='text-center mt-0'>Contact Us</h2>
              <Form className='contact-form small' onSubmit={submitHandler}>
                <Row>
                  <Col md='6'>
                    <label>Name</label>
                    <InputGroup>
                      <InputGroupText id='basic-addon1'>
                        <i className='nc-icon nc-single-02' />
                      </InputGroupText>
                      <Input placeholder='Name' type='text' name="name" value={name} onChange={e => setName(e.target.value)} />
                    </InputGroup>
                    {
                      errors.name ? <Alert severity='error'>{errors.name}</Alert>
                        : ""
                    }
                  </Col>
                  <Col md='6'>
                    <label>Email</label>
                    <InputGroup>
                      <InputGroupText>
                        <i className='nc-icon nc-email-85' />
                      </InputGroupText>
                      <Input placeholder='Email' type='text' name="email" value={email} onChange={e => setEmail(e.target.value)} />
                    </InputGroup>
                    {
                      errors.email ? <Alert severity='error'>{errors.email}</Alert>
                        : ""
                    }
                  </Col>
                </Row>
                <label>Message</label>
                <Input
                  placeholder='Tell us your thoughts and feelings...'
                  type='textarea'
                  rows='4'
                  name="message" value={message} onChange={e => setMessage(e.target.value)}
                />
                {
                  errors.message ? <Alert severity='error'>{errors.message}</Alert>
                    : ""
                }
                <Row className='mx-auto'>
                  <Col className='mx-auto mt-3 d-flex justify-content-center' md='3'>
                    <Button
                      className='login-btn mb-1 mx-auto px-3 py-2'
                      type='submit'
                      size='md'
                    >
                      Send Message
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

