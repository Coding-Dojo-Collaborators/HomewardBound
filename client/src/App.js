/* eslint-disable import/no-anonymous-default-export */
import { useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

// Login
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';

// Styles
import './App.css';
import 'assets/scss/paper-kit.scss';
import 'assets/demo/main-demo.css';

// Pages
import LandingPage from './views/LandingPage';
import RegistrationPage from 'views/RegistrationPage';
import Dashboard from 'views/Dashboard';
import Test from './views/Test';

export default () => {
  const [loggedInUser, setLoggedInUser] = useState(
    Cookies.get('user_id') ? jwt_decode(Cookies.get('user_id')) : 'no user'
  );

  return (
    <BrowserRouter >
      <Switch>
        <Route exact path='/'>
          <LandingPage
            loggedInUser={loggedInUser}
            setLoggedInUser={setLoggedInUser}
          />
        </Route>
        <Route exact path='/register'>
          <RegistrationPage
            loggedInUser={loggedInUser}
            setLoggedInUser={setLoggedInUser}
          />
        </Route>
        <Route exact path='/hello'>
          <Test />
        </Route>
        <Route exact path='/dashboard'>
          <Dashboard
            loggedInUser={loggedInUser}
            setLoggedInUser={setLoggedInUser}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
