/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

// Reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
} from 'reactstrap';

// Styles
import './block4.css';

// Others
import toribio from '../../assets/img/toribio.jpg';
import maria from '../../assets/img/maria.jpg';
import matthew from '../../assets/img/matthew.jpg';

export default () => {
  return (
    <section className='pt-5'>
      <div className='section section-dark text-center'>
        <Container>
          <h2 className='title'>Let's Talk About Us</h2>
          <p className='card-description text-center mb-4'>
            Founded in February 2022, we started this web application as a project for Coding Dojo. We were encouraged to create something meaningful and what better cause than helping animals find their perfect person.

            During the height of quarantine, many people adopted animals and when the quarantine was lifted, a lot of these animals ended up in shelters. Most of the animals that can't find homes are transferred to high kill facilities that are euthanizing due to lack of space. Many have been abused, neglected, or abandoned.

            Our app carefully matches with prospective adopters using our matchmaking quiz so we can increase the certainty that they find their loving, forever homes. Like people, animals have distinct personalities that make them unique. Find your match today.
          </p>
          <Row>
            <Col md='4'>
              <Card className='card-profile card-plain'>
                <div className='card-avatar'>
                  <a href='https://github.com/EricToribio'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img
                      alt='Eric Toribio'
                      src={toribio}
                    />
                  </a>
                </div>
                <CardBody>
                  <a href='https://github.com/EricToribio'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='author'>
                      <CardTitle tag='h4'>Eric Toribio</CardTitle>
                      <h6 className='card-category'>Backend Specialist</h6>
                    </div>
                  </a>
                  <p className='card-description text-center'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis earum similique distinctio autem dolore neque consectetur veritatis asperiores iusto sapiente.
                  </p>
                </CardBody>
                <CardFooter className='text-center'>
                  <Button
                    className='btn-just-icon btn-neutral'
                    color='link'
                    href='https://github.com/EricToribio'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='fa fa-github' />
                  </Button>
                  <Button
                    className='btn-just-icon btn-neutral ml-1'
                    color='link'
                    href='https://www.linkedin.com/in/erictoribio/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='fa fa-linkedin' />
                  </Button>
                  <Button
                    className='btn-just-icon btn-neutral ml-1'
                    color='link'
                    href='#meow'
                    target='_blank' rel='noreferrer'
                  >
                    <i className='fa fa-facebook' />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md='4'>
              <Card className='card-profile card-plain'>
                <div className='card-avatar'>
                  <a href='https://github.com/MariaMcBride'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img
                      alt='Maria McBride'
                      src={maria}
                    />
                  </a>
                </div>
                <CardBody>
                  <a href='https://github.com/MariaMcBride'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='author'>
                      <CardTitle tag='h4'>Maria McBride</CardTitle>
                      <h6 className='card-category'>Designer</h6>
                    </div>
                  </a>
                  <p className='card-description text-center'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis earum similique distinctio autem dolore neque consectetur veritatis asperiores iusto sapiente.
                  </p>
                </CardBody>
                <CardFooter className='text-center'>
                  <Button
                    className='btn-just-icon btn-neutral'
                    color='link'
                    href='https://github.com/MariaMcBride'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='fa fa-github' />
                  </Button>
                  <Button
                    className='btn-just-icon btn-neutral ml-1'
                    color='link'
                    href='https://www.linkedin.com/in/maria-mcbride/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='fa fa-linkedin' />
                  </Button>
                  <Button
                    className='btn-just-icon btn-neutral ml-1'
                    color='link'
                    href='#meow'
                    target='_blank' rel='noreferrer'
                  >
                    <i className='fa fa-instagram' />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md='4'>
              <Card className='card-profile card-plain'>
                <div className='card-avatar'>
                  <a href='https://github.com/Matthew-Sherman1'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img
                      alt='Matthew Sherman'
                      src={matthew}
                    />
                  </a>
                </div>
                <CardBody>
                  <a href='https://github.com/Matthew-Sherman1'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='author'>
                      <CardTitle tag='h4'>Matthew Sherman</CardTitle>
                      <h6 className='card-category'>Developer</h6>
                    </div>
                  </a>
                  <p className='card-description text-center'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis earum similique distinctio autem dolore neque consectetur veritatis asperiores iusto sapiente.
                  </p>
                </CardBody>
                <CardFooter className='text-center'>
                  <Button
                    className='btn-just-icon btn-neutral'
                    color='link'
                    href='https://github.com/Matthew-Sherman1'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='fa fa-github' />
                  </Button>
                  <Button
                    className='btn-just-icon btn-neutral ml-1'
                    color='link'
                    href='https://www.linkedin.com/in/matthew-sherman-63953222b/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='fa fa-linkedin' />
                  </Button>
                  <Button
                    className='btn-just-icon btn-neutral ml-1'
                    color='link'
                    href='#meow'
                    target='_blank' rel='noreferrer'
                  >
                    <i className='fa fa-instagram' />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}