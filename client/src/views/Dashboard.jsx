/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

// Core components
import Sidebar from 'components/Navbars/Sidebar';
import DashboardNavbar from 'components/Navbars/DashboardNavbar';
import Footer from 'components/Footer/Footer';

// Misc components
import PerfectScrollbar from 'perfect-scrollbar';

// Styles
import 'bootstrap/dist/css/bootstrap.css';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import styles from '../assets/css/modules/paper-dashboard.module.css';
// import demo from '../assets/css/modules/dashboard.module.css';

// Views
import DashboardMain from './DashboardSections/DashboardMain';

// Others
var ps;

export default ({ loggedInUser, setLoggedInUser, colors }) => {
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

  return (
    <div className='wrapper'>
      <Sidebar
        bgColor='black'
        activeColor='danger'
        loggedInUser={loggedInUser}
      />
      <div className={`${styles['main-panel']}`} ref={mainPanel}>
        <DashboardNavbar
          colors={colors}
          loggedInUser={loggedInUser}
        />
        {/* <Footer fluid /> */}
      </div>
      <DashboardMain />
      <Footer />
    </div>
  );
}


