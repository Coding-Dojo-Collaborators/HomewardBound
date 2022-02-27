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
<<<<<<< HEAD:client/src/components/Modals/Register.jsx

// import LoginModal from './LoginModal';

=======
import Cookies from 'js-cookie'
import jwt_decode from "jwt-decode";
>>>>>>> 44e6066aebd257b28f081ae6defb488083541247:client/src/components/userModals/Register.jsx
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


<<<<<<< HEAD:client/src/components/Modals/Register.jsx
export default ({ handleClose, setUser }) => {
=======
export default ({handleClose, setLoggedInUser,setClose }) => {
>>>>>>> 44e6066aebd257b28f081ae6defb488083541247:client/src/components/userModals/Register.jsx
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errors, setErrors] = useState(false);
  const history = useHistory();

  const logo = require('../../assets/img/logo.png');

  React.useEffect(() => {
    setClose(false)
  },[])

  const handleRegister = async (e) => {
    e.preventDefault();
<<<<<<< HEAD:client/src/components/Modals/Register.jsx
    await axios.post(`http://localhost:8080/api/new/user/`, {
=======
    await axios.post(`http://localhost:8080/api/register/`, {

>>>>>>> 44e6066aebd257b28f081ae6defb488083541247:client/src/components/userModals/Register.jsx
      "firstName": firstName,
      "lastName": lastName,
      "email": email,
      "password": password,
<<<<<<< HEAD:client/src/components/Modals/Register.jsx
    })
      .then(res => {
        console.log("response from registering", res);
        if (res.data.errors) {
          setErrors(res.data.message)
          // } else {
          //   axios.post('http://localhost:8000/api/login', {
          //     email: email,
          //     password: password
          //   }, { withCredentials: true })
          //     .then(res => {
          //       console.log(res)
          //       if (res.data.message === "success!") {
          //         setUser(res.data)
          //         handleClose()

          //       } else if (res.data.message) {
          //         console.log(res.data.message)
          //         setErrors(res.data)
          //       }
          //     })
          //     .catch(err => console.log(err))
          //   // login()
        }
=======
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
        
>>>>>>> 44e6066aebd257b28f081ae6defb488083541247:client/src/components/userModals/Register.jsx
      })
      .catch(err => console.log(err));
  };

  return (
<<<<<<< HEAD:client/src/components/Modals/Register.jsx
    // <ThemeProvider theme={theme}>
    <Container component='main' maxWidth='xs'>
=======
    <Container component="main" maxWidth="xs">
>>>>>>> 44e6066aebd257b28f081ae6defb488083541247:client/src/components/userModals/Register.jsx
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
<<<<<<< HEAD:client/src/components/Modals/Register.jsx
        <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
=======
        <Box component="form" noValidate onSubmit={handleRegister} sx={{ mt: 3 }}>
>>>>>>> 44e6066aebd257b28f081ae6defb488083541247:client/src/components/userModals/Register.jsx
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
                autoComplete='family-name'
              />
              {/* {errors.last_name? <p className='text-danger'>{errors.last_name}</p>: ""} */}
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
<<<<<<< HEAD:client/src/components/Modals/Register.jsx
                name='confirmPassword'
                label='Confirm Password'
                type='password'
                id='confirmPassword'
                autoComplete='new-password'
              /> */}
            {/* {errors.confirm_password? <p className='text-danger'>{errors.confirm_password}</p>: ""} */}
            {/* </Grid> */}
=======
                name="confirm"
                label="Confirm Password"
                type="password"
                id="confirm"
                autoComplete="confirm-password"
              />
              {/* {errors.confirm_password? <p className="text-danger">{errors.confirm_password}</p>: ""} */}
            </Grid>
>>>>>>> 44e6066aebd257b28f081ae6defb488083541247:client/src/components/userModals/Register.jsx
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