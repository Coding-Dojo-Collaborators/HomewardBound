/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useRef } from 'react';
import {
  useHistory,
  NavLink,
  // useLocation,
  // Link,
} from 'react-router-dom';

// Reactstrap components
import { Button, Nav } from 'reactstrap';

// Styles
import styles from '../../assets/css/modules/dashboard.module.css';
import style from '../../assets/css/modules/paper-dashboard.module.css';
import sidebarLink from './Sidebar.module.css';

// Others
import logo from '../../assets/img/brandlogo/white_logo_transparent_background.png';

// Login
import Cookies from 'js-cookie';

// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from 'perfect-scrollbar';
import SidebarItems from 'SidebarItems';

var ps;

export default ({ loggedInUser, setLoggedInUser, activeRoute, setActiveRoute }) => {
  const sidebar = useRef();
  const history = useHistory();
  // const location = useLocation();
  // verifies if routeName is the one active (in browser input)

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
  }, []);

  let logout = () => {
    setLoggedInUser('no user');
    Cookies.remove('user_id');
    history.push('/');
  }
  const isActive = (name) => {
    setActiveRoute(name)
    localStorage.setItem("active", name)
  }

  console.log(activeRoute);

  const logoArea = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    padding: '20px 20px 20px 15px',
    textAlign: 'center',
  }

  const avatarSize = {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    objectFit: 'cover',
    width: 260,
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
            <img
              src={logo}
              alt='Brand Logo'
              style={avatarSize}
              className='img-no-padding img-responsive m-0'
            />
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
                      onClick={(e) => isActive(item.name)}
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
