/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
// import { Link } from 'react-router-dom';

// Reactstrap components
import {
  Card,
  Container,
  Row,
  Col,
} from 'reactstrap';

// Styles
import './block2.css';

// Others
import dog2 from '../../assets/img/dogs/dog2.jpg';
import cat1 from '../../assets/img/cats/cat1.jpg';

export default () => {
  return (
    <>
      <div className='section section-dark text-center'>
        <Container>
          <h2 className='adopt-title mt-0'>Pets You Can Adopt</h2>
          <Row className='mx-auto mb-1 d-flex align-items-start gy-0'>
            <Col className='mx-auto' md='5'>
              <Card className='card-profile card-adopt'
              // tag={Link} to='/adoptdog'
              >
                <img
                  alt='dog'
                  className='img-rounded img-responsive adopt-dog'
                  src={dog2}
                />
                <h4>Dogs</h4>
              </Card>
            </Col>
            <Col className='mx-auto' md='5'>
              <Card className='card-profile card-adopt'
              // tag={Link} to='/adoptcat'
              >
                <img
                  alt='cat'
                  className='img-rounded img-responsive adopt-cat'
                  src={cat1}
                />
                <h4>Cats</h4>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}