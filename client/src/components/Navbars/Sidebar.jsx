/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect, useRef } from 'react';
import {
  useHistory,
  // useLocation,
  NavLink,
  Link,
} from 'react-router-dom';

// Reactstrap components
import { Button, Nav } from 'reactstrap';

// Styles
import styles from '../../assets/css/modules/dashboard.module.css';
import style from '../../assets/css/modules/paper-dashboard.module.css';
import sidebarLink from './Sidebar.module.css';

// Login
import Cookies from 'js-cookie';

// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from 'perfect-scrollbar';
import SidebarItems from 'SidebarItems';
var ps;

export default ({ loggedInUser, setLoggedInUser, props }) => {
  const sidebar = useRef();
  const history = useHistory();
  // const location = useLocation();
  // verifies if routeName is the one active (in browser input)
  const [activeRoute, setActiveRoute] = useState("Dashboard");

  useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  });

  let logout = () => {
    setLoggedInUser('no user');
    Cookies.remove('user_id');
    history.push('/');
  }

  console.log(activeRoute);

  const logoArea = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    padding: '40px',
    textAlign: 'center',
  }

  const avatarSize = {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    objectFit: 'cover',
    height: 96,
    width: 96,
  };

  const sidebarList = {
    display: 'flex',
    alignItems: 'center',
    margin: '10px 15px 0',
    textDecoration: 'none',
    position: 'relative',
    textTransform: 'uppercase',
    cursor: 'pointer',
    fontSize: '12px',
    padding: '10px 8px',
    lineHeight: '30px',
    opacity: .7,
    transition: 'all .3s ease 0s',
  }

  const navlinkFlex = {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  }

  const sidebarIcons = {
    fontSize: '1.5rem',
    marginRight: '12px',
  }

  return (
    <div>
      <div
        className={`${styles.sidebar} ${style.sidebar}`}
        data-color='black'
        data-active-color='danger'
      >
        <div className={style.logo} style={logoArea}>
          <div className='mx-auto'>
            <Link to='#'>
              <img
                src={loggedInUser.picture}
                alt={loggedInUser.name}
                style={avatarSize}
                className='img-circle img-no-padding img-responsive m-0'
              />
            </Link>
          </div>
        </div>
        <div className={style.sidebarWrapper} ref={sidebar}>
          <Nav>
            <ul className='ps-0' id='sidebarhover'>
              {SidebarItems.map((item, i) => {
                let linkStyle = ``;
                activeRoute === item.name ? (linkStyle += `${sidebarLink.activeLink}`) :
                  (linkStyle += `${sidebarLink.inactiveLink}`);
                return (
                  <li
                    className={`${item.path} + ${style[' active-pro']}`}
                    key={i} style={sidebarList}
                  // onMouseOver={(e) => setHoverColor()}
                  >
                    <NavLink
                      to={item.layout + item.path}
                      className={`${style['nav-link']} ${linkStyle}`}
                      style={navlinkFlex}
                      activeClassName='active'
                      onClick={(e) => setActiveRoute(item.name)}
                    >
                      <i className={item.icon} style={sidebarIcons} />
                      {item.name}
                    </NavLink>
                  </li>
                  // <li key={i}
                  //   style={sidebarList}>
                  //   <NavLink
                  //     to={item.path}
                  //     type='button'
                  //     className={`d-flex align-items-center text-decoration-none ${linkStyle}`}
                  //     activeClassName='active'
                  //     // onClick={(e) => setActiveRoute(item.name)}
                  //   >
                  //     <i className={item.icon}
                  //       style={sidebarIcons} />
                  //     {item.name}
                  //   </NavLink>
                  // </li>
                );
              })}
            </ul>
            <div className='mx-auto mt-3'>
              <Button
                onClick={logout}
                className='btn login-btn mt-4'
                type='button'
              >
                <i className='nc-icon nc-button-power me-2'>
                </i>
                <small>Log Out</small>
              </Button>
            </div>
          </Nav>
        </div>
      </div>
    </div >
  )
}
