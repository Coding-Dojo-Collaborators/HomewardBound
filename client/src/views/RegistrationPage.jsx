/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import axios from 'axios';

// Reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from 'reactstrap';

// Core components
import Navbar from '../components/Navbars/Navbar';
// Login
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
// Others
import registerbg from 'assets/img/animals/registerbg.png';
import validator from 'validator';
import { Link, useHistory } from 'react-router-dom';
// MUI
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


export default ({ loggedInUser, setLoggedInUser }) => {
  document.documentElement.classList.remove('nav-open');

  //--------------User State------------------- //
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errors, setErrors] = useState(false);
  const history = useHistory();
  const [emailError, setEmailError] = useState("");

  // -------------UseEffects-------------------//
  React.useEffect(() => {
    loggedInUser !== 'no user' &&
      history.push('/dashboard')
  }, [loggedInUser])
  React.useEffect(() => {
    document.body.classList.add('register-page');
    return function cleanup() {
      document.body.classList.remove('register-page');
    };
  });
  // -------------Styling-------------------//
  const myStyle = {
    backgroundImage:
      `url(${registerbg})`,
    height: '100vh',
    paddingTop: 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  // -------------Google Login-------------------//
  const googleSuccess = async (res) => {
    console.log(res.profileObj)
    axios.post(process.env.REACT_APP_JAVA_API +'google/login', res.profileObj

    ).then(res => {
      Cookies.set("user_id", res.data, { path: '/' })
      setLoggedInUser(jwt_decode(Cookies.get("user_id")))
    }).catch(err => console.log(err));
  };
  const googleFailure = (res) => {
    console.log("Google sign in not working!");
    console.log(res);
  };
  // -------------Facebook Login-------------------//
  const facebookSuccess = async (res) => {
    console.log(res)
    await axios.post(process.env.REACT_APP_JAVA_API +"facebook/login", { ...res, "picture": res.picture.data.url })
      .then(res => {
        Cookies.set("user_id", res.data, { path: '/' })
        setLoggedInUser(jwt_decode(Cookies.get("user_id")))
      })
  }
  //------------Registration-------------------//
  const handleRegister = async (e) => {
    e.preventDefault();
    if (validator.isEmail(email)) {
      setEmailError('');
    } else {
      setEmailError('Enter valid email!');
      return "error";
    }
    await axios.post('register/', {
      "firstName": firstName,
      "lastName": lastName,
      "email": email,
      "password": password,
      "confirm": confirm
    })
      .then(res => {
        console.log("response from registering", res);
        res.data === "Passwords don't match" ?
          setErrors({ "message": res.data }) :
          res.data === "Please sign in User already exist" ?
            setErrors({ "message": res.data }) :
            Cookies.set('user_id', res.data, { path: '/' })
        setLoggedInUser(jwt_decode(Cookies.get('user_id')));

      })
      .catch(err => console.log(err));
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
                  {/* // -------------Google Login-------------------// */}
                  <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    render={(renderProps) => (
                      <Button
                        className="btn-neutral btn-just-icon mr-1"
                        color="google"
                        type='button'
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                      >
                        <i className="fa fa-google" />
                      </Button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy='single_host_origin'
                  />
                  {/* // -------------Facebook Login-------------------// */}
                  <FacebookLogin
                    appId={process.env.REACT_APP_FACEBOOK_APP_ID}
                    autoLoad={false}
                    callback={facebookSuccess}
                    fields="name,email,picture,first_name,last_name"
                    render={renderProps => (
                      <Button
                        className="btn-neutral btn-just-icon mr-1 mx-1"
                        color="facebook"
                        onClick={renderProps.onClick}
                      >  <i className="fa fa-facebook-square" />
                      </Button>
                    )}
                  />
                
                </div>
                {/* //------------Registration-------------------// */}
                <Form className="register-form" onSubmit={handleRegister}>
                  <label>First Name</label>
                  <Input
                    placeholder="First Name"
                    type="text"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  {
                    (firstName.length !== 0 && firstName.length < 3) ?
                      <Stack sx={{ width: '100%', mt: 2 }} spacing={2}>
                        <Alert severity='error'>Enter valid First Name</Alert>
                      </Stack> : ""
                  }
                  <label>Last Name</label>
                  <Input
                    placeholder="Last Name"
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  {
                    (lastName.length !== 0 && lastName.length < 3) ?
                      <Stack sx={{ width: '100%', mt: 2 }} spacing={2}>
                        <Alert severity='error'>Enter valid Last Name</Alert>
                      </Stack> : ""
                  }
                  <label>Email</label>
                  <Input
                    placeholder="Email"
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {
                    (email.length !== 0 && emailError !== '') ?
                      <Stack sx={{ width: '100%', mt: 2 }} spacing={2}>
                        <Alert severity='error'>{emailError}</Alert>
                      </Stack> : ""
                  }
                  <label>Password</label>
                  <Input
                    placeholder="Password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)} />
                  {
                    (password.length !== 0 && password.length < 8) ?
                      <Stack sx={{ width: '100%', mt: 2 }} spacing={2}>
                        <Alert severity='error'>Password must be at least 8 characters</Alert>
                      </Stack> : ""
                  }
                  <label>Confirm Password</label>
                  <Input
                    placeholder="Confirm Password"
                    type="password"
                    onChange={(e) => setConfirm(e.target.value)}
                  />
                  {
                    (confirm.length !== 0 && confirm !== password) ?
                      <Stack sx={{ width: '100%', mt: 2 }} spacing={2}>
                        <Alert severity='error'>Passwords must match</Alert>
                      </Stack> : ""
                  }
                  <Button
                    block
                    className="btn registerbtn"
                    type='submit'
                    disabled={
                      confirm !== password ||
                      password.length < 8 ||
                      lastName.length < 3 ||
                      firstName.length < 3
                    }>
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