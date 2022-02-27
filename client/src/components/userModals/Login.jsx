/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
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
import useStyles from './Styles';
import RegistrationModal from './RegistrationModal';
import jwt_decode from "jwt-decode";
import Cookies from 'js-cookie'
import GitHubLogin from 'react-github-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GithubButton from 'react-github-login-button'
const Copyright = (props) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" to="#">
        Homeward Bound
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
// eslint-disable-next-line no-unused-vars
const theme = createTheme();

export default ({handleClose ,setLoggedInUser, setChangeUser, setUser}) => {
  const [errors, setErrors] = useState("");
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  const classes = useStyles();

  const logo = require('../static/img/logo.png')

  const loginChangeHandler = (e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/login', loginInfo)
      .then(res => {
        // console.log(res.data)
        if (res.data) {
          Cookies.set("user_id",res.data, {path: '/'})
          setLoggedInUser(jwt_decode(Cookies.get("user_id")))
          handleClose()
          }
          else {
              alert('Invalid username or password')
          }
      })
  };

  const googleSuccess = async (res) => {
    console.log(res.profileObj)
    axios.post('http://localhost:8080/api/google/login', res.profileObj
  
    ).then(res => {
        console.log(res.data);
        Cookies.set("user_id",res.data, {path: '/'})
        setLoggedInUser(jwt_decode(Cookies.get("user_id")))
        handleClose()
      }).catch(err => console.log(err));
  };
  const googleFailure = (res) => {
    console.log("Google sign in not working!");
    console.log(res)
  };
  const facebookSuccess = async (res) => {
    console.log(res)
  }
  const facebookFailure = (res) => {
    console.log(res)
  }
  const githubSuccess = async (res) => {
    console.log(res)
  }
  const githubFailure = (res) => {
    console.log(res)
  }
  return (
    // <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar variant="square"
          src={logo} alt="logo"
          sx={{
            height: 65,
            width: 255,
            mb: 3,
          }}
        >
        </Avatar>
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          {
            errors.message ?
              <Stack sx={{ width: '100%', mt: 2 }} spacing={2}>
                <Alert severity="error">{errors.message}</Alert>
              </Stack> : ""
          }
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={loginChangeHandler}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={loginChangeHandler}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <GoogleLogin
            clientId='568067065323-7gvfhrf569i6cqk1m9hcp52qe78r6e3j.apps.googleusercontent.com'
            render={(renderProps) => (
              <Button className={classes.googleButton}
                color="success"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                // startIcon={<Icon />}
                variant="contained"
                sx={{ mb: 2 }}
              >Google Sign In </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy='single_host_origin'
          />
          <FacebookLogin
  appId="1012699556009640"
  autoLoad={false}
  callback={facebookSuccess}
  render={renderProps => (
    <Button 
    color='primary'
    fullWidth
    variant="contained"
            sx={{ mb: 2 }}
    className={classes.facebookButton}
    onClick={renderProps.onClick}>Facebook Login</Button>
  )}
/>

<GitHubLogin clientId="ca0d54ff127cbeeccc8c"
    onSuccess={githubSuccess}
    onFailure={githubFailure}/>
    
          <Grid container
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Grid item sx={{ textAlign: 'center' }}>
              Don't have an Account?
              <RegistrationModal variant="body2" setUser={setUser}/>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ pt: 3, mb: 4 }} />
    </Container>
    // </ThemeProvider>
  );
};