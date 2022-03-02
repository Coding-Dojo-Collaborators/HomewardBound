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
import AdoptionOverview from 'views/DashboardSections/AdoptionOverview';
import Checklist from 'views/DashboardSections/Checklist';
import MatchDogQuiz from 'views/DashboardSections/Quizzes/MatchDogQuiz';
import MatchCatQuiz from 'views/DashboardSections/Quizzes/MatchCatQuiz';
import Rehome from 'views/DashboardSections/Rehome';
import DogProfile from 'views/DashboardSections/Quizzes/DogProfile';
import CatProfile from 'views/DashboardSections/Quizzes/CatProfile';
import UserProfile from 'views/DashboardSections/UserProfile';
import Test from './views/Test';
import ContactMessages from 'views/admins/ContactMessages';

export default () => {
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
        <Route exact path='/dashboard'>
          <Dashboard
            loggedInUser={loggedInUser}
            setLoggedInUser={setLoggedInUser}
          />
        </Route>
        <Route exact path='/dashboard/adoption'>
          <AdoptionOverview />
        </Route>
        <Route exact path='/dashboard/checklist'>
          <Checklist />
        </Route>
        <Route exact path='/dashboard/dogmatchquiz'>
          <MatchDogQuiz />
        </Route>
        <Route exact path='/dashboard/catmatchquiz'>
          <MatchCatQuiz />
        </Route>
        <Route exact path='/dashboard/rehome'>
          <Rehome />
        </Route>
        <Route exact path='/dashboard/rehome/dogprofile'>
          <DogProfile />
        </Route>
        <Route exact path='/dashboard/rehome/catprofile'>
          <CatProfile />
        </Route>
        <Route exact path='/dashboard/profile'>
          <UserProfile />
        </Route>
        <Route exact path='/admin/messages'>
          <ContactMessages loggedInUser={loggedInUser}/>
        </Route>
        {/* TEST ROUTE */}
        <Route exact path='/hello'>
          <Test loggedInUser={loggedInUser}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
