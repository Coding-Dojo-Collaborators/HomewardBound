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
// import Index from "views/Index.js";
// import NucleoIcons from "views/NucleoIcons.js";
// import LandingPage from "views/examples/LandingPage.js";
// import ProfilePage from "views/examples/ProfilePage.js";
// import RegisterPage from "views/examples/RegisterPage.js";
import Test from './views/Test';
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
      </Switch>
    </BrowserRouter>
  );
}
