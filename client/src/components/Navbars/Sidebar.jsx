/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useRef } from 'react';
import { Link, NavLink } from "react-router-dom";

// Reactstrap components
import { Nav } from "reactstrap";

// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
var ps;

export default ({ properties, loggedInUser }) => {
  const sidebar = useRef();
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return properties.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };

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

  console.log(loggedInUser);

  const avatarSize = {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    objectFit: 'cover',
    height: 120,
  };

  const sidebarLinks = {
    display: 'flex',
    alignItems: 'center',
    // fontSize: '20px',
  }

  return (
    <div>
      <div
        className='sidebar'
        data-color='black'
        data-active-color='danger'
      >
        <div className='logo'>
          <div className='logo-img' style={avatarSize}>
            <img
              src={loggedInUser.picture}
              alt={loggedInUser.name}
              className='img-circle img-no-padding img-responsive'
            />
          </div>
        </div>
        <div className='sidebar-wrapper' ref={sidebar}>
          <Nav>
            <ul className='list-unstyled'>
              <li style={sidebarLinks}>
                <NavLink
                  to='/dashboard'
                  className='nav-link'
                  activeClassName='active'
                >
                  <i className='nc-icon nc-bank' />
                  Dashboard
                </NavLink>
              </li>
              <li style={sidebarLinks}>
                <NavLink
                  to='/dashboard/adoption'
                  className='nav-link'
                  activeClassName='active'
                >
                  <i className='nc-icon nc-briefcase-24' />
                  Adoption
                </NavLink>
              </li>
              <ul className=''>
                <li style={sidebarLinks}>
                  <NavLink
                    to='/dashboard/checklist'
                    className='nav-link'
                    activeClassName='active'
                  >
                    <i className='nc-icon nc-bullet-list-67' />
                    Checklist
                  </NavLink>
                </li>
                <li style={sidebarLinks}>
                  <NavLink
                    to='/dashboard/dogmatchquiz'
                    className='nav-link'
                    activeClassName='active'
                  >
                    <i className='nc-icon nc-touch-id' />
                    Match Quiz - Dog
                  </NavLink>
                </li>
                <li style={sidebarLinks}>
                  <NavLink
                    to='/dashboard/catmatchquiz'
                    className='nav-link'
                    activeClassName='active'
                  >
                    <i className='nc-icon nc-touch-id' />
                    Match Quiz - Cat
                  </NavLink>
                </li>
              </ul>
              <li>Rehome a Pet</li>
              <ul className=''>
                <li>Dog Profile</li>
                <li>Cat Profile</li>
              </ul>
              <li>User Profile</li>
            </ul>
          </Nav>
        </div>
      </div>
    </div>
  )
}
