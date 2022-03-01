/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useRef } from 'react';
import { useHistory, NavLink } from 'react-router-dom';

// Reactstrap components
import { Button, Nav } from 'reactstrap';

// Styles
import styles from '../../assets/css/modules/dashboard.module.css';
import style from '../../assets/css/modules/paper-dashboard.module.css';

// Login
import Cookies from 'js-cookie';

// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from 'perfect-scrollbar';
var ps;

export default ({ loggedInUser, setLoggedInUser }) => {
  const sidebar = useRef();
  const history = useHistory();
  // verifies if routeName is the one active (in browser input)
  // const activeRoute = (routeName) => {
  //   return properties.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  // };

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

  console.log(loggedInUser);

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
    width: 259,
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

  const sidebarIcons = {
    fontSize: '1.5rem',
    marginRight: '12px',
  }

  // const sidebarLinks = {
  //   color: 'f8f9fa !important',
  //   ':hover': {
  //     color: '#f47660 !important',
  //   }
  // }

  return (
    <div>
      <div
        className={`${styles.sidebar} ${style.sidebar}`}
        data-color='black'
        data-active-color='danger'
      >
        <div className={style.logo} style={logoArea}>
          <div style={avatarSize}>
            <img
              src={loggedInUser.picture}
              alt={loggedInUser.name}
              className='img-circle img-no-padding img-responsive m-0'
            />
          </div>
        </div>
        <div className={style.sidebarWrapper} ref={sidebar}>
          <Nav>
            <ul className='list-unstyled'>
              <li style={sidebarList}>
                <NavLink
                  to='/dashboard'
                  style={({ isActive }) => ({
                    color: isActive ? '#f47660' : '#fff',
                    ':hover': '#f47660 !important',
                  })}
                  className='d-flex align-items-center text-decoration-none fw-normal'
                  activeClassName='active'
                >
                  <i className='nc-icon nc-bank'
                    style={sidebarIcons} />
                  <span>Dashboard</span>
                </NavLink>
              </li>
              <li style={sidebarList}>
                <NavLink
                  to='/dashboard/adoption'
                  style={({ isActive }) => ({
                    color: isActive ? '#f47660' : '#fff',
                    ':hover': '#f47660 !important',
                  })}
                  className='d-flex align-items-center text-decoration-none fw-normal'
                  activeClassName='active'
                >
                  <i className='nc-icon nc-briefcase-24'
                    style={sidebarIcons} />
                  Adoption
                </NavLink>
              </li>
              <ul className=''>
                <li style={sidebarList}>
                  <NavLink
                    to='/dashboard/checklist'
                    style={({ isActive }) => ({
                      color: isActive ? '#f47660' : '#fff',
                      ':hover': '#f47660 !important',
                    })}
                    className='d-flex align-items-center text-decoration-none fw-normal'
                    activeClassName='active'
                  >
                    <i className='nc-icon nc-bullet-list-67'
                      style={sidebarIcons} />
                    Checklist
                  </NavLink>
                </li>
                <li style={sidebarList}>
                  <NavLink
                    to='/dashboard/dogmatchquiz'
                    style={({ isActive }) => ({
                      color: isActive ? '#f47660' : '#fff',
                      ':hover': '#f47660 !important',
                    })}
                    className='d-flex align-items-center text-decoration-none fw-normal'
                    activeClassName='active'
                  >
                    <i className='nc-icon nc-touch-id'
                      style={sidebarIcons} />
                    Match Quiz - Dog
                  </NavLink>
                </li>
                <li style={sidebarList}>
                  <NavLink
                    to='/dashboard/catmatchquiz'
                    style={({ isActive }) => ({
                      color: isActive ? '#f47660' : '#fff',
                      ':hover': '#f47660 !important',
                    })}
                    className='d-flex align-items-center text-decoration-none fw-normal'
                    activeClassName='active'
                  >
                    <i className='nc-icon nc-touch-id'
                      style={sidebarIcons} />
                    Match Quiz - Cat
                  </NavLink>
                </li>
              </ul>
              <li style={sidebarList}>
                <NavLink
                  to='/dashboard/rehome'
                  style={({ isActive }) => ({
                    color: isActive ? '#f47660' : '#fff',
                    ':hover': '#f47660 !important',
                  })}
                  className='d-flex align-items-center text-decoration-none fw-normal'
                  activeClassName='active'
                >
                  <i className='nc-icon nc-shop'
                    style={sidebarIcons} />
                  Rehome a Pet
                </NavLink>
              </li>
              <ul className=''>
                <li style={sidebarList}>
                  <NavLink
                    to='/dashboard/rehome/dogprofile'
                    style={({ isActive }) => ({
                      color: isActive ? '#f47660' : '#fff',
                      ':hover': '#f47660 !important',
                    })}
                    className='d-flex align-items-center text-decoration-none fw-normal'
                    activeClassName='active'
                  >
                    <i className='nc-icon nc-single-copy-04'
                      style={sidebarIcons} />
                    Dog Profile
                  </NavLink>
                </li>
                <li style={sidebarList}>
                  <NavLink
                    to='/dashboard/rehome/catprofile'
                    style={({ isActive }) => ({
                      color: isActive ? '#f47660' : '#fff',
                      ':hover': '#f47660 !important',
                    })}
                    className='d-flex align-items-center text-decoration-none fw-normal'
                    activeClassName='active'
                  >
                    <i className='nc-icon nc-single-copy-04'
                      style={sidebarIcons} />
                    Cat Profile
                  </NavLink>
                </li>
              </ul>
              <li style={sidebarList}>
                <NavLink
                  to='/dashboard/profile'
                  style={({ isActive }) => ({
                    color: isActive ? '#f47660' : '#fff',
                    ':hover': '#f47660 !important',
                  })}
                  className='d-flex align-items-center text-decoration-none fw-normal'
                  activeClassName='active'
                >
                  <i className='nc-icon nc-circle-10'
                    style={sidebarIcons} />
                  User Profile
                </NavLink>
              </li>
            </ul>
            <div className='mx-auto mt-3'>
              <Button
                onClick={logout}
                className='btn login-btn mt-4'
                type='button'

              >
                <i className='nc-icon nc-button-power me-2'>
                </i>
                Log Out
              </Button>
            </div>
          </Nav>
        </div>
      </div>
    </div>
  )
}
