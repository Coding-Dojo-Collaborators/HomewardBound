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

// MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

// Styles
import './block3.css';

// Others
import dogwalking4 from '../../assets/img/services/dogwalking4.jpg';
import petboarding3 from '../../assets/img/services/petboarding3.jpg';
import grooming2 from '../../assets/img/services/grooming2.jpg';
import vet4 from '../../assets/img/services/vet4.jpg';

export default () => {
  return (
    
      <section className="py-5">
        <div className='section text-center'>
          <Container>
            <Row className='mx-auto'>
              <Col className='mx-auto services' md='8'>
                <h2 className='title mt-0'>Search for Pet Services in your Area</h2>
              </Col>
            </Row>
            <br />
            <Row className='mb-4 pb-2'>
              <Col md='3'>
                <Card sx={{ maxWidth: 305 }}>
                  <CardMedia
                    component='img'
                    alt='dogwalkers'
                    height='200'
                    image={dogwalking4}
                  />
                  <CardContent>
                    <div className='description'>
                      <h4 className='info-title mt-2 mb-2'>Dog Walking</h4>
                      <p className='description'>
                        Daily walks to keep your dogs happy and healthy! Perfect for those with busy schedules.
                      </p>
                      <Button className='btn-link' color='info' href='/dogwalkers'>
                        Find Dog Walkers Near You
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Col>
              <Col md='3'>
                <Card sx={{ maxWidth: 305 }}>
                  <CardMedia
                    component='img'
                    alt='petboarding'
                    height='200'
                    image={petboarding3}
                  />
                  <CardContent>
                    <div className='description'>
                      <h4 className='info-title mt-2 mb-2'>Pet Boarding</h4>
                      <p className='description'>
                        Going out of town? Don't leave your pet home alone. Find animal boarding services near you.
                      </p>
                      <Button className='btn-link' color='info' href='/petboarding'>
                        Find Pet Boarding Near You
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Col>
              <Col md='3'>
                <Card sx={{ maxWidth: 305 }}>
                  <CardMedia
                    component='img'
                    alt='grooming'
                    height='200'
                    image={grooming2}
                  />
                  <CardContent>
                    <div className='description'>
                      <h4 className='info-title mt-2 mb-2'>Pet Grooming</h4>
                      <p className='description'>
                        Is your dog getting shaggy? Cat need their claws filed down? Search for pet grooming services near you.
                      </p>
                      <Button className='btn-link' color='info' href='/petgrooming'>
                        Find Pet Groomers Near You
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Col>
              <Col md='3'>
                <Card sx={{ maxWidth: 305 }}>
                  <CardMedia
                    component='img'
                    alt='veterinary'
                    height='200'
                    image={vet4}
                  />
                  <CardContent>
                    <div className='description'>
                      <h4 className='info-title mt-2 mb-2'>Veterinary Services</h4>
                      <p className='description'>
                        Your pets's health is very important to us, and we take every measure to give your pets the care they deserve!
                      </p>
                      <Button className='btn-link' color='info' href='/veterinary'>
                        Find Clinics Near You
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Col>
            </Row>
            <Button
              className='mt-4 getstartedbtn mb-1'
              type='button'
              size='lg'
              tag={Link} to='/services'
            // onClick={(e) => e.preventDefault()}
            >
              Find Services
            </Button>
          </Container>
        </div>
      </section>
  );
}