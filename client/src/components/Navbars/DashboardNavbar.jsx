/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect, useRef } from 'react';
// import { useHistory } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  // NavbarToggler,
  // Nav,
  // NavItem,
  Container,
  // Button,
  NavbarBrand,
} from 'reactstrap';

// Styles
import styles from '../../assets/css/modules/paper-dashboard.module.css';

// // Login
// import Cookies from 'js-cookie';

export default ({ loggedInUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState("transparent");
  // const [dropdownOpen, setDropdownOpen] = useState(false);
  const sidebarToggle = useRef();
  // const history = useHistory();

  const toggle = () => {
    if (isOpen) {
      setColor("transparent");
    } else {
      setColor("dark");
    }
    setIsOpen(!isOpen);
  };

  // const dropdownToggle = (e) => {
  //   setDropdownOpen(!dropdownOpen);
  // };

  const openSidebar = () => {
    document.documentElement.classList.toggle(`${styles['nav-open']}`);
    sidebarToggle.current.classList.toggle(`${styles.toggled}`);
  };

  // function that adds color dark/transparent to the navbar on resize (this is for the collapse)
  const updateColor = () => {
    if (window.innerWidth < 993 && isOpen) {
      setColor("dark");
    } else {
      setColor("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateColor.bind(this));
  });

  useEffect(() => {
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf(`${styles['nav-open']}`) !== -1
    ) {
      document.documentElement.classList.toggle(`${styles['nav-open']}`);
      sidebarToggle.current.classList.toggle(`${styles.toggled}`);
    }
  }, []);

  // let logout = () => {
  //   setLoggedInUser('no user');
  //   Cookies.remove('user_id');
  //   history.push('/');
  // }

  const navbar = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }

  return (
    <Navbar
      // How do I pass in the updateColor function?
      expand='lg' style={navbar}
      className={`${styles['navbar-absolute']} ${styles['fixed-top']} p-3 ` +
        (color === "transparent" ? `${styles['navbar-transparent']} ` : "")
      }
    >
      <Container fluid>
        <div className='navbar-wrapper'>
          <div className='navbar-toggle'>
            <button
              type='button'
              ref={sidebarToggle}
              className='navbar-toggler'
              onClick={() => openSidebar()}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <NavbarBrand><h1 className='mb-0'>Welcome, {loggedInUser.firstName}</h1></NavbarBrand>
        </div>
        {/* <NavbarToggler onClick={toggle}>
          <span className="navbar-toggler-bar navbar-kebab" />
          <span className="navbar-toggler-bar navbar-kebab" />
          <span className="navbar-toggler-bar navbar-kebab" />
        </NavbarToggler> */}
        <Collapse isOpen={isOpen} navbar className="justify-content-between">
          {/* <form>
            <InputGroup className="no-border">
              <Input placeholder="Search..." />
              <InputGroupText>
                <i className="nc-icon nc-zoom-split" />
              </InputGroupText>
            </InputGroup>
          </form> */}
          {/* <Nav navbar>
            <NavItem>
              <Button
                onClick={logout}
                className='btn login-btn mt-3'
                type='button'

              >
                <i className='nc-icon nc-button-power me-2'>
                </i>
                Log Out
              </Button>
            </NavItem>
          </Nav> */}
        </Collapse>
      </Container>
    </Navbar>
  );
}