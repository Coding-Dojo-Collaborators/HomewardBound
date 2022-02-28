/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { useState } from 'react';
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom';
import validator from 'validator';
// MUI
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Cookies from 'js-cookie'
import jwt_decode from "jwt-decode";
const Copyright = (props) => {
  return (
    <Typography variant='body2' color='text.secondary' align='center' {...props}>
      {'Copyright © '}
      <Link color='inherit' href='https://mui.com/'>
        Homeward Bound
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default ({ handleClose, setLoggedInUser, setClose, loggedIn }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errors, setErrors] = useState(false);
  const history = useHistory();
  const [emailError, setEmailError] = useState("");

  const logo = require('../../assets/img/brandlogo/logo_white_background.jpg');

  const validateEmail = (e) => {
    setEmail(e.target.value)
    if (validator.isEmail(email)) {
      setEmailError('');
    } else {
      setEmailError('Enter valid email!');
    }
  }
  React.useEffect(() => {
    setClose(false)
  }, [setClose]);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (validator.isEmail(email)) {
      setEmailError('');
    } else {
      setEmailError('Enter valid email!');
      return "error";
    }
    await axios.post(`http://localhost:8080/api/register/`, {
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
        loggedIn();
        handleClose();
      })
      .catch(err => console.log(err));
  };

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
          Sign Up
        </Typography>
        <Box component='form' noValidate onSubmit={handleRegister} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              {
                errors.message ?
                  <Stack sx={{ width: '100%', mt: 2 }} spacing={2}>
                    <Alert severity='error'>{errors.message}</Alert>
                  </Stack> : ""
              }
              <TextField
                onChange={(e) => setFirstName(e.target.value)}
                required
                fullWidth
                id='firstName'
                label='First Name'
                name='firstName'
                autoComplete='off'
              />
              {
                (firstName.length !== 0 && firstName.length < 3) ?
                  <Stack sx={{ width: '100%', mt: 2 }} spacing={2}>
                    <Alert severity='error'>Enter valid First Name</Alert>
                  </Stack> : ""
              }
            </Grid>
            <Grid item xs={12} >
              <TextField
                onChange={(e) => setLastName(e.target.value)}
                required
                fullWidth
                id='lastName'
                label='Last Name'
                name='lastName'
                autoComplete='off' />
              {
                (lastName.length !== 0 && lastName.length < 3) ?
                  <Stack sx={{ width: '100%', mt: 2 }} spacing={2}>
                    <Alert severity='error'>Enter valid Last Name</Alert>
                  </Stack> : ""
              }
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='off'
              />
              {
                (email.length !== 0 && emailError !== '') ?
                  <Stack sx={{ width: '100%', mt: 2 }} spacing={2}>
                    <Alert severity='error'>{emailError}</Alert>
                  </Stack> : ""
              }
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => setPassword(e.target.value)}
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='new-password'
              />
              {
                (password.length !== 0 && password.length < 8) ?
                  <Stack sx={{ width: '100%', mt: 2 }} spacing={2}>
                    <Alert severity='error'>Password must be at least 8 characters</Alert>
                  </Stack> : ""
              }
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => setConfirm(e.target.value)}
                required
                fullWidth
                name='confirm'
                label='Confirm Password'
                type='password'
                id='confirm'
                autoComplete='confirm-password'
              />
              {
                (confirm.length !== 0 && confirm !== password) ?
                  <Stack sx={{ width: '100%', mt: 2 }} spacing={2}>
                    <Alert severity='error'>Passwords must match</Alert>
                  </Stack> : ""
              }
            </Grid>
          </Grid>
          <Button
            disabled={
              confirm !== password ||
              password.length < 8 ||
              lastName.length < 3 ||
              firstName.length < 3
            }
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            Create Account
          </Button>
          <Grid container justifyContent='center'>
            <Grid item sx={{ textAlign: 'center' }}>
              Already have an Account?
              <Button
                onClick={handleClose}
                variant='body2'
              >
                Log In
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ pt: 3, mb: 4 }} />
    </Container>
    // </ThemeProvider>
  );
};