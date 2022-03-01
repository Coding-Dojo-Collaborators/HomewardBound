/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useRef } from 'react';
import { useHistory, Route, Switch, useLocation } from 'react-router-dom';

// Reactstrap components
import { Button } from 'reactstrap';

// Core components
import Sidebar from 'components/Navbars/Sidebar';
import DashboardNavbar from 'components/Navbars/DashboardNavbar';
import Footer from 'components/Footer/Footer';

// Misc components
import PerfectScrollbar from 'perfect-scrollbar';

// Styles
import 'bootstrap/dist/css/bootstrap.css';
import './DashboardSections/scss/paper-dashboard.scss';
import './DashboardSections/css/dashboard.css';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

// Views
import DashboardMain from './DashboardSections/DashboardMain';

// Login
import Cookies from 'js-cookie';

// Others
var ps;

export default ({ loggedInUser, setLoggedInUser, properties }) => {
  const history = useHistory();
  const mainPanel = useRef();
  const location = useLocation();

  useEffect(() => {
    if (navigator.platform.indexOf('Win') > -1) {
      ps = new PerfectScrollbar(mainPanel.current);
      document.body.classList.toggle('perfect-scrollbar-on');
    }
    return function cleanup() {
      if (navigator.platform.indexOf('Win') > -1) {
        ps.destroy();
        document.body.classList.toggle('perfect-scrollbar-on');
      }
    };
  });

  useEffect(() => {
    mainPanel.current.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [location]);

  useEffect(() => {
    loggedInUser === 'no user' &&
      history.push('/');
  }, [history, loggedInUser]);

  let logout = () => {
    setLoggedInUser('no user');
    Cookies.remove('user_id');
    history.push('/');
  }

  return (
    <div className='wrapper'>
      <Sidebar
        bgColor='black'
        activeColor='danger'
        loggedInUser={loggedInUser}
      />
      <div className='main-panel' ref={mainPanel}>
        <DashboardNavbar />
        {/* <Footer fluid /> */}
      </div>
      <Button
        onClick={logout}
      >
        Log Out
      </Button>
      <DashboardMain />

      <h1>
        <img src={loggedInUser.picture} alt="fffff" />
        {loggedInUser.firstName}
      </h1>
    </div>
  );
}


