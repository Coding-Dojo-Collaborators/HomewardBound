/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { useState } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';

// MUI
import Avatar from '@mui/material/Avatar';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

// Reactstrap components
import {
  Container,
  Button,
  Form,
  Input,
  // FormGroup
} from 'reactstrap';

// Login
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { useHistory } from 'react-router-dom';
import validator from 'validator';


export default ({ handleClose, setLoggedInUser }) => {
  // -------------- useHistory ------------------ //
  const history = useHistory()
  // -------------- useStates ------------------ //
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // -------------- errors ----------------- //
  const [errors, setErrors] = useState(null);
  const [emailErrors, setEmailErrors] = useState(null);
  // ------------ Misc Imports ----------------- //
  const logo = require('../../assets/img/brandlogo/white_logo_transparent_background.png');
  // ------------ Regular Login ---------------- //
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validator.isEmail(email)) {
      setEmailErrors(null);
    } else if (email == "") {
      setEmailErrors("Enter valid email!");
      return 'error';
    } else {
      setEmailErrors("Enter valid email!");
      return 'error';
    }
    await axios.post(process.env.REACT_APP_JAVA_API + 'login', {
      "email": email,
      "password": password
    })
      .then(res => {
        if (res.status === 206) {
          for (let i = 0; i < res.data.length; i++) {
            if (res.data[i].code === "error") {
              setErrors(res.data[i].defaultMessage)
              return
            }
          }
        }
        Cookies.set("user_id", res.data, { path: '/' });
        setLoggedInUser(jwt_decode(Cookies.get("user_id")));
        handleClose();
      })
  };
  // ------------- Google Login --------------- //
  const googleSuccess = async (res) => {
    axios.post(process.env.REACT_APP_JAVA_API + 'google/login', res.profileObj
    ).then(res => {
      Cookies.set("user_id", res.data, { path: '/' })
      setLoggedInUser(jwt_decode(Cookies.get("user_id")))
      handleClose()
    }).catch(err => console.log(err));
  };
  const googleFailure = (res) => {
    console.log("Google sign in not working!");
  };
  // ----------- Facebook Login --------------- //
  const facebookSuccess = async (res) => {
    await axios.post(process.env.REACT_APP_JAVA_API + "facebook/login", { ...res, "picture": res.picture.data.url })
      .then(res => {
        Cookies.set("user_id", res.data, { path: '/' })
        setLoggedInUser(jwt_decode(Cookies.get("user_id")))
        handleClose()
      })
  }

  return (
    <div className='filter'>
      <Container>
        <Avatar variant='square'
          src={logo} alt='logo'
          sx={{
            height: 95,
            width: 'auto',
          }}
        >
        </Avatar>
        <h3 className='title text-center mt-2 mb-4 text-white'>Log In</h3>
        <div className='social-line text-center mb-3'>
          {/* // -------------Google Login-------------------// */}
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            render={(renderProps) => (
              <Button
                className='btn-neutral btn-just-icon mr-1'
                type='button'
                color='google'
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <i className='fa fa-google' />
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
            fields='name,email,picture,first_name,last_name'
            render={renderProps => (
              <Button
                className='btn-neutral btn-just-icon mr-1 mx-1'
                color='facebook'
                onClick={renderProps.onClick}
              >  <i className='fa fa-facebook-square' />
              </Button>
            )}
          />
        </div>
        {/* // ---------------- Login Form ------------------- // */}
        <Form className='register-form' onSubmit={handleSubmit}>
          {
            errors ?
              <Stack sx={{ width: '100%', mt: 3 }} spacing={2}>
                {/* <FormGroup className='has-danger'>
                  <Input
                    className='form-control-danger'
                    defaultValue={errors.message}
                    id='inputDanger1'
                    type='text'
                  />
                </FormGroup> */}
                <Alert severity='error'
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    my: 2,
                    fontSize: '12px',
                  }}
                >
                  {errors}
                </Alert>
              </Stack> : ''
          }
          <label>Email</label>
          <Input
            placeholder='Email'
            type='text'
            onChange={(e) => setEmail(e.target.value)}
            className='mb-3'
          />
          {
            emailErrors ?
              <Stack sx={{ width: '100%', mt: 2 }} spacing={2}>
                <Alert severity='error'>{emailErrors}</Alert>
              </Stack> : ""
          }
          <label>Password</label>
          <Input
            placeholder='Password'
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            className='mb-3'
          />
          {/* <Label check>
            <Input defaultValue='' type='checkbox'
              className='mb-3' />
            <span className='ms-2'>Remember me</span>
            <span className='form-check-sign' />
          </Label> */}
          <Button
            block
            className='btn login-btn'
            type='submit'
            disabled={password.length < 8}
          >Log In</Button>
        </Form>
        {/* // ----------------- Registration ----------------- // */}
        <div className='forgot mt-3 text-center'>
          Don't have an Account?
          <br />
          <Button
            className='btn-link'
            color='danger'
            onClick={(e) => history.push('/register')}

          >
            Sign Up
          </Button>
        </div>
      </Container>
    </div>
  );
};