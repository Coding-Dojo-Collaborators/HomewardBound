/* eslint-disable import/no-anonymous-default-export */
import React,{Component} from 'react';
import { Link } from 'react-router-dom';
// import { NavHashLink as NavLink } from 'react-router-hash-link' 
// import Scroll from 'react-scroll';
// NodeJS library that concatenates strings
import classnames from 'classnames';

// Reactstrap Components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from 'reactstrap';

// MUI
import { Avatar } from '@mui/material';

// Modals
import LoginModal from '../Modals/LoginModal'

export default ({ setLoggedInUser, loggedInUser, logout }) => {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  // const [openModal, setOpenModal] = useState(false);
  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle('nav-open');
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor('navbar-transparent');
      }
    };

    window.addEventListener('scroll', updateNavbarColor);

    return function cleanup() {
      window.removeEventListener('scroll', updateNavbarColor);
    };
  });

  // NavLink.addEventListener("click", function () {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // });

  // const scrollHandler = (e) => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // }

  const logo = require('../../assets/img/brandlogo/logo_transparent_background.png');

  return (
    <Navbar
      className={classnames('fixed-top', navbarColor)}
      color-on-scroll='300'
      expand='md'
    >
      <Container className='d-flex'>
        <div className='navbar-translate'>
          <NavbarBrand
            data-placement='bottom'
            href='#top'
            title='Home'
            
          >
            <Avatar variant='square'
              src={logo} alt='logo'
              sx={{
                height: 70,
                width: 255,
                mb: 3,
                textAlign: 'center'
              }}
            >
            </Avatar>
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames('navbar-toggler navbar-toggler', {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className='navbar-toggler-bar bar1' />
            <span className='navbar-toggler-bar bar2' />
            <span className='navbar-toggler-bar bar3' />
          </button>
        </div>
        <Collapse
          className='justify-content-end'
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              
              <NavLink  href='#about'>
                <i className='nc-icon nc-alert-circle-i me-1' /> About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#adopt' >
                <i className='nc-icon nc-single-copy-04 me-1' /> Adopt
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#services' >
                <i className='nc-icon nc-zoom-split me-1' /> Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#contact' >
                <i className='nc-icon nc-send me-1' /> Contact Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement='bottom'
                href='https://github.com/EricToribio/HomewardBound'
                target='_blank'
                title='Follow & Star on GitHub'
              >
                <i className='fa fa-github me-1' />
                <p className='d-lg-none'>GitHub</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <LoginModal
                loggedInUser={loggedInUser}
                setLoggedInUser={setLoggedInUser}
              />
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}