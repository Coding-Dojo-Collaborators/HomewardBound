/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Link } from 'react-router-dom';

// Reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
} from 'reactstrap';

// Styles
import './block1.css';

export default () => {
  return (
    <section className='py-5'>
      <div className='section text-center'>
        <Container>
          <Row className='mx-auto'>
            <Col className='mx-auto process' md='8'>
              <h2 className='title mt-0'>Planning to Adopt a Pet?</h2>
              <h5 className='description'>
                Here's what you need to know
              </h5>
              <br />
            </Col>
          </Row>
          <br />
          <br />
          <Row className='mx-auto mb-5'>
            <Col md='4'>
              <div className='info'>
                <div className='icon icon-info'>
                  <i className='nc-icon nc-bullet-list-67' />
                </div>
                <div className='description'>
                  <h4 className='info-title mt-0 mb-2'>1 - Checklist for Adopters</h4>
                  <p className='description'>
                    View our checklist to find out what you will need for the potential new member of your family.
                  </p>
                </div>
              </div>
            </Col>
            <Col md='4'>
              <div className='info'>
                <div className='icon icon-info'>
                  <i className='nc-icon nc-chart-bar-32' />
                </div>
                <div className='description'>
                  <h4 className='info-title mt-0 mb-2'>2 - Finding the Right Pet</h4>
                  <p>
                    Take our match quiz to get matched with the perfect cat or dog.
                  </p>
                </div>
              </div>
            </Col>
            <Col md='4'>
              <div className='info'>
                <div className='icon icon-info'>
                  <i className='nc-icon nc-layout-11' />
                </div>
                <div className='description'>
                  <h4 className='info-title mt-0 mb-2'>3 - Matching Pet List</h4>
                  <p>
                    See a list of nearby dogs or cats ranked based on your quiz score.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Button
            className='mt-3 login-btn mb-1 px-3 py-2'
            type='button'
            size='md'
            tag={Link} to='/register'
          // onClick={(e) => e.preventDefault()}
          >
            Get Started
          </Button>
        </Container>
      </div>
    </section>
  );
}