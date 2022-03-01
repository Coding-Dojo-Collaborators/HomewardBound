import React, { useState } from 'react'
import axios from "axios"
import { useHistory } from 'react-router-dom'

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



    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const history = useHistory()
    // const [errArray, setErrArray] = useState([])


    const submitHandler = (e) => {
      e.preventDefault()
      axios.post(process.env.REACT_APP_JAVA_API + `form`, { name, email, message })
        .then(res => {
          history.push("/")
        })
        // .catch(err => {
        //   const errResponse = err.response.data.errors
        //   let tempArr = []
        //   for (const key of Object.keys(errResponse)) {
        //     tempArr.push(errResponse[key].message)
        //   }
        //   setErrArray(tempArr)
        // })
    }




    return (
      <>
        <form onSubmit={submitHandler}>

          <div className='section landing-section'>

            <Container>
              <Row className='mx-auto'>
                <Col className='mx-auto' md='8'>
                  <h2 className='text-center mt-0'>Contact Us</h2>
                  <Form className='contact-form'>
                    <Row>
                      <Col md='6'>
                        <label>Name</label>
                        <InputGroup>
                          <InputGroupText id='basic-addon1'>
                            <i className='nc-icon nc-single-02' />
                          </InputGroupText>
                          <Input placeholder='Name' type='text' name="name" value={name} onChange={e => setName(e.target.value)} />
                        </InputGroup>
                      </Col>
                      <Col md='6'>
                        <label>Email</label>
                        <InputGroup>
                          <InputGroupText>
                            <i className='nc-icon nc-email-85' />
                          </InputGroupText>
                          <Input placeholder='Email' type='text' name="email" value={email} onChange={e => setEmail(e.target.value)} />
                        </InputGroup>
                      </Col>
                    </Row>
                    <label>Message</label>
                    <Input
                      placeholder='Tell us your thoughts and feelings...'
                      type='textarea'
                      rows='4'
                      name="message" value={message} onChange={e => setMessage(e.target.value)}
                    />
                    <Row className='mx-auto'>
                      <Col className='mx-auto mt-3' md='3'>
                        <Button
                          className='getstartedbtn mb-1'
                          type='button'
                          size='lg'
                        // onClick={(e) => e.preventDefault()}
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
        </form>
      </>
    );
  }

