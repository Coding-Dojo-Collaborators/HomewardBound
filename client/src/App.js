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
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";

// Pages
import LandingPage from './views/LandingPage';
import Dashboard from 'views/Dashboard';
import Test from './views/Test';
import Dashboard from './views/Dashboard';
// import Dashboard from './views/Dashboard/Content';
// import Content from 'views/DashboardSections/Content';
import RegistrationPage from 'views/RegistrationPage';

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

          <Dashboard/>
          <Dashboard
            loggedInUser={loggedInUser}
            setLoggedInUser={setLoggedInUser}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
