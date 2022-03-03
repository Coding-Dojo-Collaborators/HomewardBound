/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect, useRef } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  useHistory,
  useLocation
} from 'react-router-dom';
import axios from 'axios';
// Core components
import Sidebar from 'components/Navbars/Sidebar';
// import Footer from 'components/Footer/Footer';

// Misc components
import PerfectScrollbar from 'perfect-scrollbar';

// Styles
import 'bootstrap/dist/css/bootstrap.css';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import styles from '../assets/css/modules/paper-dashboard.module.css';
import style from '../assets/css/modules/dashboard.module.css';

// Views
import DashboardBody from './DashboardSections/DashboardBody';

// Others
import SidebarItems from 'SidebarItems.js';
import Footer from 'components/Footer/Footer';
import DashboardNavbar from 'components/Navbars/DashboardNavbar';
var ps;

export default ({ dogs, cats, loading, loggedInUser, setLoggedInUser, sidebarItems, activeRoute, setActiveRoute }) => {

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


  console.log(activeRoute)
  return (
    <>
      <div className={`${styles.wrapper}`} >
        <Sidebar
          sidebarItems={sidebarItems}
          bgColor='black'
          activeColor='danger'
          activeRoute={activeRoute}
          setActiveRoute={setActiveRoute}
          loggedInUser={loggedInUser}
          setLoggedInUser={setLoggedInUser}
        />
        <div className="App">
          <div className={`${styles['main-panel']}`} ref={mainPanel}>
            <DashboardNavbar
              loggedInUser={loggedInUser}
              setLoggedInUser={setLoggedInUser} />
            <DashboardBody
              dogs={dogs}
              cats={cats}
              loading={loading}
              loggedInUser={loggedInUser}
              setLoggedInUser={setLoggedInUser}
              currentPage={localStorage.getItem('active')} />
            <BrowserRouter>
              <Switch>
                {
                  SidebarItems.map((item, i) => {
                    return (
                      <Route
                        key={i}
                        exact path={item.layout + item.path}
                        component={item.component}
                      />
                    );
                  })
                }
              </Switch>
            </BrowserRouter>
          </div>
        </div>
      </div>
      <Footer currentPage='dashboard' />
    </>
  );
}


