/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Link } from 'react-router-dom';

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
  Button,
} from 'reactstrap';

// MUI
import { Avatar } from '@mui/material';
// import { Box } from '@mui/system';
// import { Grid } from '@material-ui/core';
// import NavLinks from './NavLinks';

export default ({ setLoggedInUser, loggedInUser, logout, changeUser, setUser, user, setChangeUser }) => {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

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

  const logo = require('../../assets/img/brandlogo/logo_transparent_background.png');

  return (
    // <div className=''>
    //   <Box >
    //     <Grid>
    //       <NavLinks setLoggedInUser={setLoggedInUser}
    //         logout={logout} setUser={setUser} user={user} changeUser={changeUser}
    //         setChangeUser={setChangeUser} loggedInUser={loggedInUser} />
    //       </Grid>
    //     </Box>
    //     <div>
    //     </div>
    //   </div>
    <Navbar
      className={classnames('fixed-top', navbarColor )}
      color-on-scroll='300'
      expand='lg'
      
    >
      <Container>
        <div className='navbar-translate'>
          <NavbarBrand
            data-placement='bottom'
            to='/'
            target='_blank'
            title='Home'
            tag={Link}
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
              <NavLink to='#about' tag={Link}>
                <i className='nc-icon nc-alert-circle-i' /> About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='#process' tag={Link}>
                <i className='nc-icon nc-single-copy-04' /> Adopt
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='#services' tag={Link}>
                <i className='nc-icon nc-zoom-split' /> Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='#contact' tag={Link}>
                <i className='nc-icon nc-send' /> Contact Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement='bottom'
                href='https://github.com/EricToribio/HomewardBound'
                target='_blank'
                title='Follow & Star on GitHub'
              >
                <i className='fa fa-github' />
                <p className='d-lg-none'>GitHub</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <Button
                className="bg-danger"
                type='button'
                sx={{
                  borderWidth: '0px !important',
                  borderColor: 'transparent !important',
                }}
                component={Link} to={'/dashboard'
                  // `/dashboard/${user._id}`
                }
              >
                <i className='nc-icon nc-badge'></i> Log In
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}