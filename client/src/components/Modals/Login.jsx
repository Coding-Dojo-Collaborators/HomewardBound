/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

// MUI
import { createTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
// Styles
import { Button } from 'reactstrap';
import useStyles from './Styles';

// Login
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
// import GithubButton from 'react-github-login-button';

// Others
import RegistrationModal from './RegistrationModal';

const Copyright = (props) => {
  return (
    <Typography variant='body2' color='text.secondary' align='center' {...props}>
      {'Copyright © '}
      <Link color='inherit' to='#'>
        Homeward Bound
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
// eslint-disable-next-line no-unused-vars
const theme = createTheme();

export default ({ handleClose, setLoggedInUser }) => {
  //------------ other imports---------------- //
  const logo = require('../../assets/img/brandlogo/logo_white_background.jpg');
  const history = useHistory();
  const classes = useStyles();
  //------------ use state---------------- //
  const [errors, setErrors] = useState("");
  const [close, setClose] = useState(true);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const loginChangeHandler = (e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value
    });
  };
  //------------Regular Login---------------- //
  const handleSubmit = async (e) => {
    e.preventDefault();
    close &&
      await axios.post(process.env.REACT_APP_JAVA_API + 'login', loginInfo)
        .then(res => {
          console.log(res)
          res.data === "No User Found" ?
            setErrors({ "message": res.data }) :
            res.data === "Invalid Email or Password" ?
              setErrors({ "message": res.data }) :
              Cookies.set("user_id", res.data, { path: '/' })
          setLoggedInUser(jwt_decode(Cookies.get("user_id")))
          handleClose()
        })
  };
  // -------------Google Login-------------------//
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
  // -------------Facebook Login-------------------//
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
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar variant='square'
          src={logo} alt='logo'
          sx={{
            height: 65,
            width: 255,
            mb: 3,
          }}
        >
        </Avatar>
        <Typography component='h1' variant='h5'>
          Log In
        </Typography>
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          {
            errors.message ?
              <Stack sx={{ width: '100%', mt: 2 }} spacing={2}>
                <Alert severity='error'>{errors.message}</Alert>
              </Stack> : ''
          }
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
            onChange={loginChangeHandler}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
            onChange={loginChangeHandler}
          />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='Remember me'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <div className='d-flex justify-content-center gap-3'>
            {/* // -------------Google Login-------------------// */}
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              render={(renderProps) => (
                <Button
                  className="btn-neutral btn-just-icon mr-1"
                  type='button'
                  color="google"
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
          <Grid container
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            {/* //------------Registration-------------------// */}
            <Grid item sx={{ display: "flex", alignItems: 'center' }}>
              Don't have an Account?
              <RegistrationModal variant="body2" loggedIn={handleClose} setLoggedInUser={setLoggedInUser} setClose={setClose} />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ pt: 3, mb: 4 }} />
    </Container>
  );
};