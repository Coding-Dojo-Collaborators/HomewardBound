/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// Core components
import Navbar from '../components/Navbars/Navbar';
import LandingPageHeader from '../components/Headers/LandingPageHeader';
import Footer from '../components/Footer/Footer';

// Blocks
import Block1Process from './LandingPageBlocks/Block1AdoptionProcess';
import Block2Adopt from './LandingPageBlocks/Block2Adopt';
import Block3Services from './LandingPageBlocks/Block3Services';
import Block4About from '../views/LandingPageBlocks/Block4About';
// import Block5Contact from '../views/LandingPageBlocks/Block5Contact';

// Login
import Cookies from 'js-cookie';

export default ({ setUser, loggedInUser, setLoggedInUser }) => {
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
        logout={logout}
        loggedInUser={loggedInUser}
        setLoggedInUser={setLoggedInUser}
      />
      <LandingPageHeader />
      <div className='main'>
        <Block1Process />
        <Block2Adopt />
        <Block3Services />
        <Block4About />
        {/* <Block5Contact /> */}
        <Footer />
      </div>
    </>
  )
};
