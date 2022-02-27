/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { useState } from 'react';
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom';

// MUI
import { createTheme } from '@mui/material/styles';
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


export default ({handleClose, setLoggedInUser,setClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errors, setErrors] = useState(false);
  const history = useHistory();

  const logo = require('../../assets/img/brandlogo/logo_white_background.jpg');

  React.useEffect(() => {
    setClose(false)
  },[])

  const handleRegister = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:8080/api/register/`, {

      "firstName": firstName,
      "lastName": lastName,
      "email": email,
      "password": password,
      "confirm" : confirm
    
  })
      .then(res => {

        console.log("response from registering", res);
        res.data === "Passwords don't match" ?
        setErrors({"message" : res.data }) :
        res.data === "Please sign in User already exist" ?
        setErrors({"message" : res.data }) :
        Cookies.set("user_id",res.data, {path: '/'})
        setLoggedInUser(jwt_decode(Cookies.get("user_id")))
        handleClose()
        
      })
      .catch(err => console.log(err));
  };

  return (
    <Container component="main" maxWidth="xs">
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
        <Box component="form" noValidate onSubmit={handleRegister} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              {/* {
                errors.message ?
                  <Stack sx={{ width: '100%', mt: 2 }} spacing={2}>
                    <Alert severity='error'>{errors.message}</Alert>
                  </Stack> : ""
              } */}
              <TextField
                onChange={(e) => setFirstName(e.target.value)}
                required
                fullWidth
                id='firstName'
                label='First Name'
                name='firstName'
                autoComplete='family-name'
              />
              {errors.firstName? <p className='text-danger'>{errors.firstName}</p>: ""}
            </Grid>
            <Grid item xs={12} >
              {
                errors.message ?
                  <Stack sx={{ width: '100%', mt: 2 }} spacing={2}>
                    <Alert severity="error">{errors.message}</Alert>
                  </Stack> : ""
              }
              <TextField
                onChange={(e) => setLastName(e.target.value)}
                required
                fullWidth
                id='lastName'
                label='Last Name'
                name='lastName'
                autoComplete='family-name'
              />
              {/* {errors.last_name? <p className='text-danger'>{errors.last_name}</p>: ""} */}
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
              />
              {/* {errors.email? <p className='text-danger'>{errors.email}</p>: ""} */}
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
              {/* {errors.password? <p className='text-danger'>{errors.password}</p>: ""} */}
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => setConfirm(e.target.value)}
                required
                fullWidth
                name="confirm"
                label="Confirm Password"
                type="password"
                id="confirm"
                autoComplete="confirm-password"
              />
              {/* {errors.confirm_password? <p className="text-danger">{errors.confirm_password}</p>: ""} */}
            </Grid>
          </Grid>
          <Button
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
              <Button onClick={handleClose} variant='body2' >
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