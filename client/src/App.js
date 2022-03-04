/* eslint-disable import/no-anonymous-default-export */
import { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import axios from 'axios';
// Login
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';

// Styles
// import 'assets/css/bootstrap.min.css';
import './index.scss';
import 'bootstrap/scss/bootstrap.scss';
import 'assets/scss/paper-kit.scss';
import 'assets/css/paper-kit.css';
import 'assets/demo/demo.css';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import './App.css';

// Pages
import LandingPage from './views/LandingPage';
import RegistrationPage from 'views/RegistrationPage';
import Dashboard from 'views/Dashboard';
import Test from './views/Test';
import ContactMessages from 'views/admins/ContactMessages';

export default () => {
  const [dogs, setDogs] = useState()
  const [cats, setCats] = useState()
  const [loading, setLoading] = useState(true)
  const [activeRoute, setActiveRoute] = useState(
    localStorage.getItem("active") ? localStorage.getItem("active") : localStorage.setItem('active', "Dashboard")
  );
  const [loggedInUser, setLoggedInUser] = useState(
    Cookies.get('user_id') ? jwt_decode(Cookies.get('user_id')) : 'no user'
  );
  useEffect(() => {
    let mounted = true;
    const petFinderKey = process.env.REACT_APP_PET_API_Key1
    const petFinderSecret = process.env.REACT_APP_PET_API_Secret1
    let gettingToken = `grant_type=client_credentials&client_id=${petFinderKey}&client_secret=${petFinderSecret}`
    axios.post(`https://api.petfinder.com/v2/oauth2/token`, gettingToken)
      .then(accessToken => {
        console.log('looking to see wtf is going on')
        const header = "Bearer " + accessToken.data.access_token;
        const options = {
          method: 'GET',
          headers: { 'Authorization': header },
          url: "https://api.petfinder.com/v2/animals?type=dog&limit=20"
        }
        // console.log('this is the animals called', options)---gives me an access token
        axios(options)
          .then((response) => {
            // console.log(response)
            if (mounted) {
              setDogs(response.data.animals)
            }
            // res.render('animalsIndex', {animals: animals})  
          })
      })
      .catch(error => {
        console.log(error)
      })
    axios.post(`https://api.petfinder.com/v2/oauth2/token`, gettingToken)
      .then(accessToken => {
        console.log('looking to see wtf is going on')
        const header = "Bearer " + accessToken.data.access_token;
        const options = {
          method: 'GET',
          headers: { 'Authorization': header },
          url: "https://api.petfinder.com/v2/animals?type=cat&limit=20"
        }
        // console.log('this is the animals called', options)---gives me an access token
        axios(options)
          .then((response) => {
            // console.log(response)
            if (mounted) {
              setCats(response.data.animals)
              setLoading(false)
            }
            // res.render('animalsIndex', {animals: animals})  
          })
      })
      .catch(error => {
        console.log(error)
      })
    return () => {
      mounted = false
    }
  }, [])

  return (
    <BrowserRouter >
      <Switch>
        <Route exact path='/admin'>
          <ContactMessages loggedInUser={loggedInUser} />
        </Route>
        {/* TEST ROUTE */}
        <Route exact path='/hello'>
          <Test loggedInUser={loggedInUser} />
        </Route>
        {/* HOME ROUTE */}
        <Route exact path='/'>
          <LandingPage
            loggedInUser={loggedInUser}
            setLoggedInUser={setLoggedInUser}
          />
        </Route>
        {/* REGISTER USER */}
        <Route exact path='/register'>
          <RegistrationPage
            loggedInUser={loggedInUser}
            setLoggedInUser={setLoggedInUser}
          />
        </Route>
        {/* USER DASHBOARD ROUTES */}
        <Dashboard
          loggedInUser={loggedInUser}
          setLoggedInUser={setLoggedInUser}
          activeRoute={activeRoute}
          setActiveRoute={setActiveRoute}
          dogs={dogs}
          cats={cats}
          loading={loading}
        >
          <Route exact path='/dashboard' />
        </Dashboard>
        
      </Switch>
    </BrowserRouter>
  );
}
