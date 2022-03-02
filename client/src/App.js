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
import './index.scss';
import 'assets/css/bootstrap.min.css';
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
  const [activeRoute, setActiveRoute] = useState(
    localStorage.getItem("active") ? localStorage.getItem("active") :localStorage.setItem('active', "Dashboard")
  );
  const [loggedInUser, setLoggedInUser] = useState(
    Cookies.get('user_id') ? jwt_decode(Cookies.get('user_id')) : 'no user'
  );

  return (
    <BrowserRouter >
      <Switch>
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
          >
        <Route exact path='/dashboard'/>
          </Dashboard>

          
        <Route exact path='/admin/messages'>
          <ContactMessages loggedInUser={loggedInUser} />
        </Route>
        {/* TEST ROUTE */}
        <Route exact path='/hello'>
          <Test loggedInUser={loggedInUser} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
