/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

// MUI
import { createTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
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
import useStyles from './Styles';
<<<<<<< HEAD:client/src/components/Modals/Login.jsx

// Login
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';
import GitHubLogin from 'react-github-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
// import GithubButton from 'react-github-login-button';

// Others
import RegistrationModal from './RegistrationModal';
=======
import RegistrationModal from './RegistrationModal';
import jwt_decode from "jwt-decode";
import Cookies from 'js-cookie'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
>>>>>>> 44e6066aebd257b28f081ae6defb488083541247:client/src/components/userModals/Login.jsx

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

<<<<<<< HEAD:client/src/components/Modals/Login.jsx
export default ({ handleClose, setLoggedInUser, setChangeUser, setUser }) => {
=======
export default ({handleClose ,setLoggedInUser, handleOpen}) => {
>>>>>>> 44e6066aebd257b28f081ae6defb488083541247:client/src/components/userModals/Login.jsx
  const [errors, setErrors] = useState("");
  const [close, setClose] = useState(true);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  const classes = useStyles();
<<<<<<< HEAD:client/src/components/Modals/Login.jsx

  const logo = require('../../assets/img/logo.png');
=======
  const logo = require('../static/img/logo.png')
>>>>>>> 44e6066aebd257b28f081ae6defb488083541247:client/src/components/userModals/Login.jsx

  const loginChangeHandler = (e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    close &&
    await axios.post('http://localhost:8080/api/login', loginInfo)
      .then(res => {
<<<<<<< HEAD:client/src/components/Modals/Login.jsx
        // console.log(res.data)
        if (res.data) {
          Cookies.set('user_id', res.data, { path: '/' });
          setLoggedInUser(jwt_decode(Cookies.get('user_id')));
          handleClose();
        }
        else {
          alert("Invalid username or password");
        }
      });
  };

  const googleSuccess = async (res) => {
    console.log(res.profileObj);
    axios.post('http://localhost:8080/api/google/login', res.profileObj)
      .then(res => {
        console.log(res.data);
        Cookies.set('user_id', res.data, { path: '/' });
        setLoggedInUser(jwt_decode(Cookies.get('user_id')));
        handleClose();
=======
        console.log(res)
        res.data === "No User Found" ? 
        setErrors({"message" : res.data }) :
        res.data ===  "Invalid Email or Password" ?
        setErrors({"message" : res.data }) :
          Cookies.set("user_id",res.data, {path: '/'})
          setLoggedInUser(jwt_decode(Cookies.get("user_id")))
          handleClose()
          
          
          
      })
  };

  const googleSuccess = async (res) => {
    console.log(res.profileObj)
    axios.post('http://localhost:8080/api/google/login', res.profileObj
  
    ).then(res => {
        Cookies.set("user_id",res.data, {path: '/'})
        setLoggedInUser(jwt_decode(Cookies.get("user_id")))
        handleClose()
>>>>>>> 44e6066aebd257b28f081ae6defb488083541247:client/src/components/userModals/Login.jsx
      }).catch(err => console.log(err));
  };
  const googleFailure = (res) => {
    console.log("Google sign in not working!");
    console.log(res);
  };
  const facebookSuccess = async (res) => {
<<<<<<< HEAD:client/src/components/Modals/Login.jsx
    console.log(res);
=======
    console.log(res)
    await axios.post("http://localhost:8080/api/facebook/login", {...res , "picture" : res.picture.data.url})
    .then(res => {
      Cookies.set("user_id",res.data, {path: '/'})
        setLoggedInUser(jwt_decode(Cookies.get("user_id")))
        handleClose()
    })
>>>>>>> 44e6066aebd257b28f081ae6defb488083541247:client/src/components/userModals/Login.jsx
  }
  const facebookFailure = (res) => {
    console.log(res);
  }
<<<<<<< HEAD:client/src/components/Modals/Login.jsx
  const githubSuccess = async (res) => {
    console.log(res);
  }
  const githubFailure = (res) => {
    console.log(res);
  }

=======
>>>>>>> 44e6066aebd257b28f081ae6defb488083541247:client/src/components/userModals/Login.jsx
  return (
    // <ThemeProvider theme={theme}>
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
<<<<<<< HEAD:client/src/components/Modals/Login.jsx
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
=======
            name="password"
            label="Password"etUser
            type="password"
            id="password"
            autoComplete="current-password"
>>>>>>> 44e6066aebd257b28f081ae6defb488083541247:client/src/components/userModals/Login.jsx
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
          <GoogleLogin
            clientId='568067065323-7gvfhrf569i6cqk1m9hcp52qe78r6e3j.apps.googleusercontent.com'
            render={(renderProps) => (
              <Button className={classes.googleButton}
                color='success'
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                // startIcon={<Icon />}
                variant='contained'
                sx={{ mb: 2 }}
              >Google Sign In </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy='single_host_origin'
          />
          <FacebookLogin
<<<<<<< HEAD:client/src/components/Modals/Login.jsx
            appId='1012699556009640'
            autoLoad={false}
            callback={facebookSuccess}
            render={renderProps => (
              <Button
                color='primary'
                fullWidth
                variant='contained'
                sx={{ mb: 2 }}
                className={classes.facebookButton}
                onClick={renderProps.onClick}>Facebook Login</Button>
            )}
          />
          <GitHubLogin clientId='ca0d54ff127cbeeccc8c'
            onSuccess={githubSuccess}
            onFailure={githubFailure} />
=======
  appId="1012699556009640"
  autoLoad={false}
  callback={facebookSuccess}
  fields="name,email,picture,first_name,last_name"
  render={renderProps => (
    <Button 
    color='primary'
    fullWidth
    variant="contained"
            sx={{ mb: 2 }}
    className={classes.facebookButton}
    onClick={renderProps.onClick}> Facebook Login</Button>
  )}
/>

>>>>>>> 44e6066aebd257b28f081ae6defb488083541247:client/src/components/userModals/Login.jsx
          <Grid container
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Grid item sx={{ textAlign: 'center' }}>
              Don't have an Account?
<<<<<<< HEAD:client/src/components/Modals/Login.jsx
              <RegistrationModal variant='body2' setUser={setUser} />
=======
              <RegistrationModal variant="body2" setLoggedInUser={setLoggedInUser} setClose={setClose}/>
>>>>>>> 44e6066aebd257b28f081ae6defb488083541247:client/src/components/userModals/Login.jsx
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ pt: 3, mb: 4 }} />
    </Container>
    // </ThemeProvider>
  );
};