/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useRef } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  useHistory,
  useLocation
} from 'react-router-dom';

// Core components
import Sidebar from 'components/Navbars/Sidebar';
// import Footer from 'components/Footer/Footer';

// Misc components
import PerfectScrollbar from 'perfect-scrollbar';

// Styles
import 'bootstrap/dist/css/bootstrap.css';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import styles from '../assets/css/modules/paper-dashboard.module.css';
// import demo from '../assets/css/modules/dashboard.module.css';

// Views
import DashboardBody from './DashboardSections/DashboardBody';

// Others
import SidebarItems from 'SidebarItems.js';
import Footer from 'components/Footer/Footer';
import DashboardNavbar from 'components/Navbars/DashboardNavbar';
var ps;

export default ({ loggedInUser, setLoggedInUser, sidebarItems, currentPage, children, props }) => {
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
    <div className={`${styles.wrapper}`}>
      <Sidebar
        {...props}
        sidebarItems={sidebarItems}
        bgColor='black'
        activeColor='danger'
        loggedInUser={loggedInUser}
        setLoggedInUser={setLoggedInUser}
      />
      <div className="App">
        <div className={`${styles['main-panel']}`} ref={mainPanel}>
          <DashboardNavbar
            {...props}
            loggedInUser={loggedInUser}
            setLoggedInUser={setLoggedInUser} />
          <DashboardBody
            loggedInUser={loggedInUser}
            setLoggedInUser={setLoggedInUser}
            currentPage={currentPage}>
            {children}
          </DashboardBody>
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
          <Footer />
        </div>
      </div>
      {/* <DashboardMain /> */}
    </div>
  );
}


