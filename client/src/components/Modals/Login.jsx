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
// import GithubButton from 'react-github-login-button';

export default ({ handleClose, setLoggedInUser }) => {
  // -------------- useStates ------------------ //
  const [errors, setErrors] = useState("");
  const [close, setClose] = useState(true);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  // ---------- react-router-dom --------------- //
  // const history = useHistory();
  // const classes = useStyles();
  // ------------ Misc Imports ----------------- //
  const logo = require('../../assets/img/brandlogo/white_logo_transparent_background.png');
  // -------------- functions ------------------ //
  const loginChangeHandler = (e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value
    });
  };
  // ------------ Regular Login ---------------- //
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Butts");
    close &&
      await axios.post(process.env.REACT_APP_JAVA_API + 'login', loginInfo)
        .then(res => {
          console.log(res);
          res.data === "No User Found" ?
            setErrors({ "message": res.data }) :
            res.data === "Invalid Email or Password" ?
              setErrors({ "message": res.data }) :
              Cookies.set("user_id", res.data, { path: '/' });
          setLoggedInUser(jwt_decode(Cookies.get("user_id")));
          handleClose();
        })
  };
  // ------------- Google Login --------------- //
  const googleSuccess = async (res) => {
    console.log(res.profileObj)
    axios.post(process.env.REACT_APP_JAVA_API + 'google/login', res.profileObj
    ).then(res => {
      Cookies.set("user_id", res.data, { path: '/' })
      setLoggedInUser(jwt_decode(Cookies.get("user_id")))
      handleClose()
    }).catch(err => console.log(err));
  };
  const googleFailure = (res) => {
    console.log("Google sign in not working!");
    console.log(res);
  };
  // ----------- Facebook Login --------------- //
  const facebookSuccess = async (res) => {
    console.log(res)
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
            errors.message ?
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
                  {errors.message}
                </Alert>
              </Stack> : ''
          }
          <label>Email</label>
          <Input
            placeholder='Email'
            type='text'
            onChange={loginChangeHandler}
            className='mb-3'
          />
          <label>Password</label>
          <Input
            placeholder='Password'
            type='password'
            onChange={loginChangeHandler}
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
          >
            Log In
          </Button>
        </Form>
        {/* // ----------------- Registration ----------------- // */}
        <div className='forgot mt-3 text-center'>
          Don't have an Account?
          <br />
          <Button
            className='btn-link'
            color='danger'
            href='#'
            onClick={(e) => e.preventDefault()}
          >
            Sign Up
          </Button>
        </div>
      </Container>
    </div>
  );
};