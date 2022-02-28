/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

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

  return (
    <>
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
                      <Input placeholder='Name' type='text' />
                    </InputGroup>
                  </Col>
                  <Col md='6'>
                    <label>Email</label>
                    <InputGroup>
                      <InputGroupText>
                        <i className='nc-icon nc-email-85' />
                      </InputGroupText>
                      <Input placeholder='Email' type='text' />
                    </InputGroup>
                  </Col>
                </Row>
                <label>Message</label>
                <Input
                  placeholder='Tell us your thoughts and feelings...'
                  type='textarea'
                  rows='4'
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
    </>
  );
}