/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

// Reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from 'reactstrap';

// Core components
import Navbar from '../components/Navbars/Navbar';

// Others
import registerbg from 'assets/img/animals/registerbg.png';

export default () => {
  document.documentElement.classList.remove('nav-open');

  React.useEffect(() => {
    document.body.classList.add('register-page');
    return function cleanup() {
      document.body.classList.remove('register-page');
    };
  });

  const myStyle = {
    backgroundImage:
      `url(${registerbg})`,
    height: '100vh',
    paddingTop: 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <>
      <Navbar />
      <div
        style={myStyle}
        className='page-header'
        data-parallax={true}
      >
        <div className="filter" />
        <Container>
          <Row>
            <Col className="mx-auto" lg="4">
              <Card className="card-register ml-auto mr-auto">
                <h3 className="title mx-auto my-0">Welcome</h3>
                <div className="social-line text-center">
                  <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="google"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-google" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="facebook"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-facebook-square" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon"
                    color="twitter"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                </div>
                <Form className="register-form">
                  <label>First Name</label>
                  <Input placeholder="First Name" type="text" />
                  <label>Last Name</label>
                  <Input placeholder="Last Name" type="text" />
                  <label>Email</label>
                  <Input placeholder="Email" type="text" />
                  <label>Password</label>
                  <Input placeholder="Password" type="password" />
                  <label>Confirm Password</label>
                  <Input placeholder="Confirm Password" type="password" />
                  <Button block className="btn registerbtn" type='button'>
                    Register
                  </Button>
                </Form>
                <div className="forgot">
                  <Button
                    className="btn-link mt-3"
                    color="danger"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                  >
                    Forgot password?
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="footer register-footer text-center">
          <h6>
            © {new Date().getFullYear()} Unlimited Nerd Works
          </h6>
        </div>
      </div>
    </>
  );
}