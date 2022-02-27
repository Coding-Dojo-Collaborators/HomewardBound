/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// Reactstrap Components
// import {
//   Button,
//   Card,
//   CardBody,
//   CardFooter,
//   CardTitle,
//   Form,
//   Input,
//   InputGroupAddon,
//   InputGroupText,
//   InputGroup,
//   Container,
//   Row,
//   Col,
// } from 'reactstrap';

// Core components
import Navbar from '../components/Navbars/Navbar';
import LandingPageHeader from '../components/Headers/LandingPageHeader';
import Footer from '../components/Footer/Footer';

// Blocks
import Block1Process from './LandingPageBlocks/Block1AdoptionProcess';
import Block2Services from '../views/LandingPageBlocks/Block2Services';
import Block3Adopt from '../views/LandingPageBlocks/Block3Adopt';
import Block4About from '../views/LandingPageBlocks/Block4About';
// import Block5Contact from '../views/LandingPageBlocks/Block5Contact';

// Login
import Cookies from 'js-cookie';

export default ({ loggedInUser, setLoggedInUser }) => {
  const [changeUser, setChangeUser] = useState();
  const history = useHistory();

  document.documentElement.classList.remove('nav-open');
  React.useEffect(() => {
    document.body.classList.add('profile-page');
    return function cleanup() {
      document.body.classList.remove('profile-page');
    };
  });

  let logout = () => {
    setLoggedInUser('no user');
    Cookies.remove('user_id');
    history.push('/');
  }

  return (
    <>
      <Navbar
        logout={logout} changeUser={changeUser}
        setChangeUser={setChangeUser}
        loggedInUser={loggedInUser}
        setLoggedInUser={setLoggedInUser}
      />
      <LandingPageHeader />
      <div className='main'>
        <Block1Process />
        <Block2Services />
        <Block3Adopt />
        <Block4About />
        {/* <Block5Contact /> */}
        <Footer />
      </div>
    </>
  )
};
